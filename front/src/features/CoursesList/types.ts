import { Course } from "@types";

export interface CourseWithProgress extends Course {
  progress: number;
}