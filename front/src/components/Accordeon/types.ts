import { CommonComponentProps } from "@types";
import { ReactNode } from "react";

export interface AccordeonProps extends CommonComponentProps {
  title: string;
  content: string | ReactNode;
  url?: string;
}
