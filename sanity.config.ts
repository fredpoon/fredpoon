import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "dgunei68",
  dataset: "production",
  title: "Describe",
  apiVersion: "2024-11-23",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
