import { fetchStrapiDocsList } from "@utils";

export type GetDocsParams = Pick<
  Parameters<typeof fetchStrapiDocsList>[0],
  "populate" | "pagination" | "searchParams"
>;
