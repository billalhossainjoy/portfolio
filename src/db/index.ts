import * as schema from "./schema";

export { schema };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _db: any;

/**
 * Lazy singleton — driver is chosen at runtime from DATABASE_URL:
 *
 *   Local Docker / plain Postgres  →  postgres.js  (TCP)
 *   Neon cloud  (*.neon.tech)      →  neon-http    (HTTP, fastest for serverless)
 *
 * Swap DATABASE_URL in .env to switch environments, no code changes needed.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDb(): any {
  if (_db) return _db;

  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL environment variable is not set.");

  if (url.includes(".neon.tech")) {
    // Neon serverless HTTP driver — single round-trip, no TCP overhead
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { neon }    = require("@neondatabase/serverless") as typeof import("@neondatabase/serverless");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { drizzle } = require("drizzle-orm/neon-http")    as typeof import("drizzle-orm/neon-http");
    _db = drizzle(neon(url), { schema });
  } else {
    // postgres.js — standard TCP driver for local Docker / self-hosted Postgres
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const postgres    = require("postgres")                  as typeof import("postgres");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { drizzle } = require("drizzle-orm/postgres-js")  as typeof import("drizzle-orm/postgres-js");
    _db = drizzle(postgres(url), { schema });
  }

  return _db;
}
