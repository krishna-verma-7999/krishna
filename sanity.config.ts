import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "thlj9qy1",

  dataset: "production",

  title: "My Personal Website",

  apiVersion: "2023-10-01",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
});
