import { pgTable, serial, text, boolean, integer, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id:           serial("id").primaryKey(),
  title:        text("title").notNull(),
  dateTitle:    text("date_title").notNull(),
  descriptions: text("descriptions").array().notNull().default([]),
  tags:         text("tags").array().notNull().default([]),
  link:         text("link"),
  imgUrl:       text("img_url").notNull().default(""),
  imgAlt:       text("img_alt").notNull().default(""),
  github:       text("github"),
  order:        integer("order").notNull().default(0),
  published:    boolean("published").notNull().default(true),
  createdAt:    timestamp("created_at").defaultNow().notNull(),
  updatedAt:    timestamp("updated_at").defaultNow().notNull(),
});

export type Project    = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;

export const gallery = pgTable("gallery", {
  id:        serial("id").primaryKey(),
  imgUrl:    text("img_url").notNull(),
  imgAlt:    text("img_alt").notNull().default(""),
  caption:   text("caption").notNull().default(""),
  category:  text("category").notNull().default("general"),
  order:     integer("order").notNull().default(0),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type GalleryItem    = typeof gallery.$inferSelect;
export type NewGalleryItem = typeof gallery.$inferInsert;

export const experiences = pgTable("experiences", {
  id:          serial("id").primaryKey(),
  company:     text("company").notNull(),
  role:        text("role").notNull(),
  type:        text("type").notNull().default("Full-time"),   // Full-time | Part-time | Freelance | Internship
  startDate:   text("start_date").notNull(),                  // e.g. "Jan 2023"
  endDate:     text("end_date").notNull().default("Present"),
  location:    text("location").notNull().default("Remote"),
  logoUrl:     text("logo_url"),
  points:      text("points").array().notNull().default([]),
  tags:        text("tags").array().notNull().default([]),
  order:       integer("order").notNull().default(0),
  published:   boolean("published").notNull().default(true),
  createdAt:   timestamp("created_at").defaultNow().notNull(),
  updatedAt:   timestamp("updated_at").defaultNow().notNull(),
});

export type Experience    = typeof experiences.$inferSelect;
export type NewExperience = typeof experiences.$inferInsert;
