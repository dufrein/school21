"use client";

import React, { createContext, useEffect, useState } from "react";
import { AppContextProps, AppContextType } from "./types";
import { Tariff } from "@types";

export const AppContext = createContext<AppContextType>({ tariffs: [], activeTariff: null });

export const AppContextProvider: React.FC<AppContextProps> = (props) => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [activeTariff, setActiveTariff] = useState<Tariff | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/tariffs`)
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

  return (
    <AppContext.Provider value={{ tariffs, activeTariff }}>{props.children}</AppContext.Provider>
  );
};
