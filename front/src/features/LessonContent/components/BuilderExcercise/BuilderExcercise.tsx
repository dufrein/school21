import React from "react";
import { BuilderExcerciseProps } from "./types";
import { PhraseBuilder } from "@features/PhraseBuilder";

export const BuilderExcercise: React.FC<BuilderExcerciseProps> = (props) => {
  const { builderExcercise } = props;

  return (
    <div>
      <div className={"question"}>
        <h4 className={"questionText"}>{builderExcercise.question}</h4>
        <PhraseBuilder answer={builderExcercise.answer} />
      </div>
    </div>
  );
};
