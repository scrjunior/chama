import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
    // directUrl é necessário para o Prisma Migrate funcionar com o pgBouncer do Supabase
    directUrl: env("DIRECT_URL"),
  },
});
