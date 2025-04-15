import { Course } from "./course";

export interface Tariff {
  id: string;
  name: string;
  price: number;
  courses: Course[];
  features: string[];
  documentId: string;
  description: string;
}
