export interface ILesson {
  title: string;
  description: string;
  content: string;
  courseId: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
} 