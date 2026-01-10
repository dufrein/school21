import React from "react";
import { ModalDialogProps } from "./types";

export const ModalDialog: React.FC<ModalDialogProps> = (props) => {
  const { children } = props;

  return <dialog open>{children}</dialog>;
};
