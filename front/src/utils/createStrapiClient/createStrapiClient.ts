import { strapi } from "@strapi/client";

export const createStrapiClient = async () => {
  const strapiClient = strapi({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337",
    auth: process.env.STRAPI_API_TOKEN,
  });
  return strapiClient;
};
