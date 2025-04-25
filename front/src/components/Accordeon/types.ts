import { CommonComponent } from "@types";
import { ReactNode } from "react";

export interface AccordeonProps extends CommonComponent {
  title: string;
  content: string | ReactNode;
  url?: string;
}
