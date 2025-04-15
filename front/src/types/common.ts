import { Tariff } from "./tariff";

export interface HomePageProps {
  tariffs: Tariff[];
  activeTariff: Tariff;
}
