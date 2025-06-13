import { Tariff } from "@types";

export const getTariffs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tariffs`);
  if (!response.ok) {
    throw new Error("Failed to fetch tariffs");
  }
  const data: { data: Tariff[] } = await response.json();

  return data.data;
};

export const getTariffById = async (tariffId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tariffs/${tariffId}?populate=*`);
  if (!response.ok) {
    throw new Error("Failed to fetch tariff");
  }
  const data: { data: Tariff } = await response.json();

  return data.data;
};
