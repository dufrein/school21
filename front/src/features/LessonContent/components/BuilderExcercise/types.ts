import { BuilderExcerciseType } from "@types";

export type BuilderExcerciseProps = {
  builderExcercise: BuilderExcerciseType;
  /** Метод для вызова при проверке результата упражнения  */
  onCheckResult: (isCorrect:boolean)=>void;
};
