import { Pool } from "pg";

declare global {
  var pgPool: Pool | undefined;
}

const requiredEnvVars = [
  "DB_HOST",
  "DB_PORT",
  "DB_NAME",
  "DB_USER",
  "DB_PASSWORD",
] as const;

function getDatabaseConfig() {
  const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing database environment variables: ${missingEnvVars.join(", ")}`,
    );
  }

  const port = Number(process.env.DB_PORT);

  if (!Number.isInteger(port)) {
    throw new Error("DB_PORT must be a valid integer");
  }

  return {
    host: process.env.DB_HOST,
    port,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionTimeoutMillis: 5_000,
  };
}

export function getDb(): Pool {
  if (globalThis.pgPool) {
    return globalThis.pgPool;
  }

  const pool = new Pool({
    ...getDatabaseConfig(),
  });

  if (process.env.NODE_ENV !== "production") {
    globalThis.pgPool = pool;
  }

  return pool;
}

export async function getFirstBotTitle(): Promise<string | null> {
  try {
    const result = await getDb().query<{ title: string | null }>(
      "SELECT title FROM bot_cris ORDER BY id ASC LIMIT 1",
    );

    return result.rows[0]?.title ?? null;
  } catch (error) {
    console.error(
      `Failed to fetch first bot title from ${process.env.DB_HOST}:${process.env.DB_PORT}:`,
      error,
    );
    return null;
  }
}
