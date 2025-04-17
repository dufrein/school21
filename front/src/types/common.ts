import { PropsWithChildren } from "react";
import { Tariff } from "./tariff";

export interface HomePageProps {
  tariffs: Tariff[];
  activeTariff: Tariff;
}

export interface CommonComponent extends PropsWithChildren {
  className?: string;
  styles?: React.CSSProperties;
}
