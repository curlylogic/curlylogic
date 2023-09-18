import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
  projectId: "vdrpcsdh",
  dataset: "production",
  title: "curlylogic.dev",
  apiVersion: "2023-09-06",
  basePath: "/studio",
  plugins: [deskTool(), codeInput()],
  schema: { types: schemas },
});

export default config;
