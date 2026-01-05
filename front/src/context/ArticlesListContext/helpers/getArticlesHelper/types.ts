import { StrapiPagination } from "@types";

export type GetArticlesHelperParams = Omit<StrapiPagination, "limit">;
