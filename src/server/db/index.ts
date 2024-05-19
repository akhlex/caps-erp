import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from '@/env';

const client = createClient({ url: env.DATABASE_URL, authToken: 'DATABASE_AUTH_TOKEN' });

export const db = drizzle(client);