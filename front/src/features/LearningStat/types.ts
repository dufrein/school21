import { Complexity } from "@constants";
import { CourseFull, LearningStat } from "@types";

export interface LearningStatProps {
  courses: CourseFull[];
}

export type StatisticType = Record<Complexity, LearningStat | null>;
