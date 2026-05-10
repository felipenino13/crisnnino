import { Pool, type PoolConfig } from "pg";

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

function getPositiveIntegerEnv(key: string, fallback: number) {
  const value = process.env[key];

  if (!value) {
    return fallback;
  }

  const parsed = Number(value);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function getDatabaseConfig(): PoolConfig {
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

  const useSsl = process.env.DB_SSL === "true";
  const timeout = getPositiveIntegerEnv("DB_TIMEOUT_MS", 2_000);

  return {
    host: process.env.DB_HOST,
    port,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionTimeoutMillis: timeout,
    query_timeout: timeout,
    statement_timeout: timeout,
    ssl: useSsl ? { rejectUnauthorized: false } : false,
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

type BotContent = {
  title: string | null;
  backgroundBody: string | null;
};

function normalizeHexColor(value: string | null | undefined): string | null {
  const color = value?.trim();

  if (!color) {
    return null;
  }

  const normalized = color.startsWith("#") ? color : `#${color}`;

  return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(
    normalized,
  )
    ? normalized
    : null;
}

export async function getLatestBotContent(): Promise<BotContent> {
  try {
    const result = await getDb().query<{
      title: string | null;
      backgroundbody: string | null;
    }>(
      "SELECT title, backgroundbody FROM bot_cris ORDER BY id DESC LIMIT 1",
    );
    const row = result.rows[0];

    return {
      title: row?.title?.trim() || null,
      backgroundBody: normalizeHexColor(row?.backgroundbody),
    };
  } catch (error) {
    console.error(
      `Failed to fetch latest bot content from ${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}:`,
      error,
    );
    return {
      title: null,
      backgroundBody: null,
    };
  }
}

export async function getLatestBotTitle(): Promise<string | null> {
  const content = await getLatestBotContent();

  return content.title;
}

export const getFirstBotTitle = getLatestBotTitle;
