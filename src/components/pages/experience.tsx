import { getDb, schema } from "@/db";
import { asc, eq } from "drizzle-orm";
import type { Experience } from "@/db/schema";
import ExperienceClient from "./experience-client";

async function getExperiences(): Promise<Experience[]> {
  try {
    return await getDb()
      .select()
      .from(schema.experiences)
      .where(eq(schema.experiences.published, true))
      .orderBy(asc(schema.experiences.order), asc(schema.experiences.createdAt));
  } catch {
    return [];
  }
}

export default async function ExperienceSection() {
  const items = await getExperiences();
  if (items.length === 0) return null;
  return <ExperienceClient items={items} />;
}
