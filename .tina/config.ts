import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "f8be0708-ed09-4088-a77b-d8647038e999", // Get this from tina.io
  token: "2bb681a1360dcd0b122028f90a63b31f0182edfe", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "assets",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          { 
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "image",
            label: "Image",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: false,
          },
        ],
      },
    ],
  },
});
