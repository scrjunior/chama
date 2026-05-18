import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // No Prisma 7, o CLI (migrate/generate) usa sempre ligação direta
    url: env("DIRECT_URL"),
  },
});