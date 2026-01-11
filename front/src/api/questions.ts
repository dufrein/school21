import { ENDPOINTS } from "./constants";
import { QuestionType } from "@types";
import { fetchStrapiDocsList } from "@utils";
import { GetDocsParams } from "./types";
import { fetchApi } from "@utils/fetchApi";

export const getQestionsFull = async ({ populate, pagination, searchParams }: GetDocsParams) => {
  return await fetchStrapiDocsList<QuestionType>({
    url: ENDPOINTS.Questions,
    populate: populate || "*",
    pagination,
    searchParams,
  });
};

export const getQuestionById = async (id: string) => {
  return await fetchApi<QuestionType>(ENDPOINTS.QuestionById(id), {
    params: { populate: "*" },
  });
};
