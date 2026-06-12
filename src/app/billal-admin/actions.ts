"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getDb, schema } from "@/db";
import { eq } from "drizzle-orm";
import type { NewProject, NewGalleryItem, NewExperience } from "@/db/schema";

/* ── Auth ───────────────────────────────────────────────────────── */

export async function loginAction(prevState: { error?: string }, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return { error: "Invalid username or password." };
  }

  const jar = await cookies();
  jar.set("admin-session", process.env.ADMIN_SECRET!, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    path:     "/",
    maxAge:   60 * 60 * 24 * 7, // 1 week
  });

  redirect("/billal-admin");
}

export async function logoutAction() {
  const jar = await cookies();
  jar.delete("admin-session");
  redirect("/billal-admin/login");
}

/* ── Projects CRUD ──────────────────────────────────────────────── */

export type ProjectFormState = {
  error?:   string;
  success?: string;
};

function parseFormData(formData: FormData): NewProject {
  const raw = (key: string) => (formData.get(key) as string | null) ?? "";

  // descriptions & tags arrive as JSON-encoded arrays from the client form
  let descriptions: string[] = [];
  let tags: string[] = [];
  try { descriptions = JSON.parse(raw("descriptions")); } catch { /* noop */ }
  try { tags         = JSON.parse(raw("tags"));          } catch { /* noop */ }

  return {
    title:        raw("title"),
    dateTitle:    raw("dateTitle"),
    descriptions,
    tags,
    link:         raw("link")   || null,
    imgUrl:       raw("imgUrl"),
    imgAlt:       raw("imgAlt"),
    github:       raw("github") || null,
    order:        parseInt(raw("order") || "0", 10),
    published:    formData.get("published") === "true",
  };
}

export async function createProjectAction(
  prevState: ProjectFormState,
  formData: FormData,
): Promise<ProjectFormState> {
  try {
    await getDb().insert(schema.projects).values(parseFormData(formData));
    revalidatePath("/billal-admin");
    revalidatePath("/");
    return { success: "Project created." };
  } catch (e) {
    console.error(e);
    return { error: "Failed to create project." };
  }
}

export async function updateProjectAction(
  prevState: ProjectFormState,
  formData: FormData,
): Promise<ProjectFormState> {
  const id = parseInt(formData.get("id") as string, 10);
  try {
    await getDb()
      .update(schema.projects)
      .set({ ...parseFormData(formData), updatedAt: new Date() })
      .where(eq(schema.projects.id, id));
    revalidatePath("/billal-admin");
    revalidatePath("/");
    return { success: "Project updated." };
  } catch (e) {
    console.error(e);
    return { error: "Failed to update project." };
  }
}

export async function deleteProjectAction(id: number): Promise<void> {
  await getDb().delete(schema.projects).where(eq(schema.projects.id, id));
  revalidatePath("/billal-admin");
  revalidatePath("/");
}

export async function togglePublishedAction(id: number, published: boolean): Promise<void> {
  await getDb()
    .update(schema.projects)
    .set({ published, updatedAt: new Date() })
    .where(eq(schema.projects.id, id));
  revalidatePath("/billal-admin");
  revalidatePath("/");
}

/* ── Gallery CRUD ───────────────────────────────────────────────── */

export type GalleryFormState = {
  error?:   string;
  success?: string;
};

function parseGalleryForm(formData: FormData): NewGalleryItem {
  const raw = (key: string) => (formData.get(key) as string | null) ?? "";
  return {
    imgUrl:    raw("imgUrl"),
    imgAlt:    raw("imgAlt"),
    caption:   raw("caption"),
    category:  raw("category") || "general",
    order:     parseInt(raw("order") || "0", 10),
    published: formData.get("published") === "true",
  };
}

export async function createGalleryAction(
  prevState: GalleryFormState,
  formData: FormData,
): Promise<GalleryFormState> {
  try {
    await getDb().insert(schema.gallery).values(parseGalleryForm(formData));
    revalidatePath("/billal-admin");
    revalidatePath("/");
    return { success: "Image added." };
  } catch (e) {
    console.error(e);
    return { error: "Failed to add image." };
  }
}

export async function updateGalleryAction(
  prevState: GalleryFormState,
  formData: FormData,
): Promise<GalleryFormState> {
  const id = parseInt(formData.get("id") as string, 10);
  try {
    await getDb()
      .update(schema.gallery)
      .set(parseGalleryForm(formData))
      .where(eq(schema.gallery.id, id));
    revalidatePath("/billal-admin");
    revalidatePath("/");
    return { success: "Image updated." };
  } catch (e) {
    console.error(e);
    return { error: "Failed to update image." };
  }
}

export async function deleteGalleryAction(id: number): Promise<void> {
  await getDb().delete(schema.gallery).where(eq(schema.gallery.id, id));
  revalidatePath("/billal-admin");
  revalidatePath("/");
}

export async function toggleGalleryPublishedAction(id: number, published: boolean): Promise<void> {
  await getDb()
    .update(schema.gallery)
    .set({ published })
    .where(eq(schema.gallery.id, id));
  revalidatePath("/billal-admin");
  revalidatePath("/");
}

/* ── Experience CRUD ────────────────────────────────────────────── */

export type ExperienceFormState = { error?: string; success?: string };

function parseExperienceForm(formData: FormData): NewExperience {
  const raw = (k: string) => (formData.get(k) as string | null) ?? "";
  let points: string[] = [];
  let tags:   string[] = [];
  try { points = JSON.parse(raw("points")); } catch { /* noop */ }
  try { tags   = JSON.parse(raw("tags"));   } catch { /* noop */ }

  return {
    company:   raw("company"),
    role:      raw("role"),
    type:      raw("type")      || "Full-time",
    startDate: raw("startDate"),
    endDate:   raw("endDate")   || "Present",
    location:  raw("location")  || "Remote",
    logoUrl:   raw("logoUrl")   || null,
    points,
    tags,
    order:     parseInt(raw("order") || "0", 10),
    published: formData.get("published") === "true",
  };
}

export async function createExperienceAction(
  prevState: ExperienceFormState, formData: FormData,
): Promise<ExperienceFormState> {
  try {
    await getDb().insert(schema.experiences).values(parseExperienceForm(formData));
    revalidatePath("/billal-admin");
    revalidatePath("/");
    return { success: "Experience added." };
  } catch (e) { console.error(e); return { error: "Failed to add experience." }; }
}

export async function updateExperienceAction(
  prevState: ExperienceFormState, formData: FormData,
): Promise<ExperienceFormState> {
  const id = parseInt(formData.get("id") as string, 10);
  try {
    await getDb()
      .update(schema.experiences)
      .set({ ...parseExperienceForm(formData), updatedAt: new Date() })
      .where(eq(schema.experiences.id, id));
    revalidatePath("/billal-admin");
    revalidatePath("/");
    return { success: "Experience updated." };
  } catch (e) { console.error(e); return { error: "Failed to update experience." }; }
}

export async function deleteExperienceAction(id: number): Promise<void> {
  await getDb().delete(schema.experiences).where(eq(schema.experiences.id, id));
  revalidatePath("/billal-admin");
  revalidatePath("/");
}

export async function toggleExperiencePublishedAction(id: number, published: boolean): Promise<void> {
  await getDb()
    .update(schema.experiences)
    .set({ published, updatedAt: new Date() })
    .where(eq(schema.experiences.id, id));
  revalidatePath("/billal-admin");
  revalidatePath("/");
}
