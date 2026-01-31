import { BuilderExcerciseType } from "@types";

export interface BuilderExcercisesListProps {
  setFinished: (isFinished: boolean) => void;
  builders: BuilderExcerciseType[];
}
