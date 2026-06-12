import { getDb, schema } from "@/db";
import { asc } from "drizzle-orm";
import AdminDashboard from "./_components/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const db = getDb();

  const [projects, galleryItems, experienceItems] = await Promise.all([
    db.select().from(schema.projects).orderBy(asc(schema.projects.order), asc(schema.projects.createdAt)),
    db.select().from(schema.gallery).orderBy(asc(schema.gallery.order), asc(schema.gallery.createdAt)),
    db.select().from(schema.experiences).orderBy(asc(schema.experiences.order), asc(schema.experiences.createdAt)),
  ]);

  return <AdminDashboard projects={projects} galleryItems={galleryItems} experienceItems={experienceItems} />;
}
