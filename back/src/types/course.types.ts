export interface ICourse {
  title: string;
  description: string;
  price: number;
  duration: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  instructor: string;
  createdAt?: Date;
  updatedAt?: Date;
} 