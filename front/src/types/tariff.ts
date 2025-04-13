export interface Tariff {
  id: string;
  name: string;
  description: string;
  price: number;
  coursesIds: string[];
  features: string[];
}
