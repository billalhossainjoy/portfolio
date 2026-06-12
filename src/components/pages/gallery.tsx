import { getDb, schema } from "@/db";
import { asc, eq } from "drizzle-orm";
import type { GalleryItem } from "@/db/schema";
import GalleryClient from "./gallery-client";

async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    return await getDb()
      .select()
      .from(schema.gallery)
      .where(eq(schema.gallery.published, true))
      .orderBy(asc(schema.gallery.order), asc(schema.gallery.createdAt));
  } catch {
    return [];
  }
}

export default async function Gallery() {
  const items = await getGalleryItems();
  return <GalleryClient items={items} />;
}
