import { strapi } from "@strapi/client";

export const strapiClient = strapi({
  baseURL: process.env.NEXT_PUBLIC_API || "http://localhost:1337",
  auth: process.env.STRAPI_API_TOKEN,
});
