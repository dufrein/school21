import { ENDPOINTS } from "@api/constants";
import { Tariff } from "@types";
import { useEffect, useState } from "react";

/**
 * Хук для получения инфы о тарифах
 */
export const useGetTariffs = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [activeTariff, setActiveTariff] = useState<Tariff | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.Tariffs}?populate=*`)
      .then((res) => {
        return res.json();
      })
      .then((tariffsData: { data: Tariff[] }) => {
        const sortedTariffs = tariffsData.data.sort(
          (tariffItem1, tariffItem2) => tariffItem1.price - tariffItem2.price
        );
        setTariffs(sortedTariffs);
        setActiveTariff(sortedTariffs[0]);
      });
  }, []);

  return { tariffs, activeTariff };
};
