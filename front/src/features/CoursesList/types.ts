import { Course } from "@types";

export interface CourseWithProgress extends Course {
  progress: number;
}

export interface CoursesListProps {
  courses: CourseWithProgress[];
}
