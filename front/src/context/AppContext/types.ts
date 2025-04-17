import { Course, Tariff } from "@types";
import { PropsWithChildren } from "react";

export type AppContextProps = PropsWithChildren;

export interface AppContextType {
  tariffs: Tariff[];
  activeTariff: Tariff | null;
  userCourses: Course[] | null;
}
