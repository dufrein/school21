import { ComponentPropsWithoutRef } from "react";

export type NavLinkProps = ComponentPropsWithoutRef<'a'> & {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};
