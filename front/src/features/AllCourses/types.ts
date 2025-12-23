import { Course } from "@types";
import { Complexity } from "@constants";

export interface AllCoursesProps {
  courses: Course[];
  complexityLevel?: Complexity;
}
