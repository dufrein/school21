import { CommonComponent } from "@types";
import { ReactNode } from "react";

export interface AccordeonProps extends CommonComponent {
  title: string | ReactNode;
  content: string | ReactNode;
}
