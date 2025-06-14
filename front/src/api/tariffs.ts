import { Tariff } from "@types";
import { fetchApi } from "@utils/fetchApi";
import { ENDPOINTS } from "./constants";

/**
 * Хелпер получения списка тарифов
 * @returns Promise<Tariff[]>
 */
export const getTariffs = async (): Promise<Tariff[]> => {
  const { data } = await fetchApi<{ data: Tariff[] }>(ENDPOINTS.Tariffs);
  return data.data;
};

/**
 * Хелпер получения тарифа по id
 * @param tariffId - идентификатор тарифа
 * @returns Promise<Tariff>
 */
export const getTariffById = async (tariffId: string): Promise<Tariff> => {
  const { data } = await fetchApi<{ data: Tariff }>(ENDPOINTS.TariffById(tariffId), {
    params: { populate: "*" }
  });
  return data.data;
};
