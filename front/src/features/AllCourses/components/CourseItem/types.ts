import { Course } from "@types";

export interface CourseItemProps {
  course: Course;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}
