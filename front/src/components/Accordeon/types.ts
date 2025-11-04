import { CommonComponentProps } from "@types";
import { ReactElement, ReactNode } from "react";

export interface AccordeonProps extends CommonComponentProps {
  title: string | ReactElement;
  content: string | ReactNode;
  url?: string;
}
