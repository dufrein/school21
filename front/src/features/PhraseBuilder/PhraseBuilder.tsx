import React from "react";
import { PhraseBuilderProps } from "./types";
import { PhraseBuilderTouch } from "./components/PhraseBuiderTouch";
import { PhraseBuilderDesktop } from "./components/PhraseBuilderDesktop";
import { useIsTouchScreen } from "@hooks/useIsTouchScreen/useIsTouchScreen";

/**
 * Построитель слов в фразу для упражнений
 */
export const PhraseBuilder: React.FC<PhraseBuilderProps> = (props) => {
  const { isTouchScreen } = useIsTouchScreen();

  return isTouchScreen ? <PhraseBuilderTouch {...props} /> : <PhraseBuilderDesktop {...props} />;
};
