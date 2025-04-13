export interface ITariff {
  name: string;
  description: string;
  price: number;
  duration: number;
  features: string[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
} 