"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getClassList } from "@utils";
import { NavLinkProps } from "./types";

export function NavLink({ href, children, className, style, target, onClick }: NavLinkProps) {
  const pathname = usePathname();

  if (!href) {
    return children;
  }

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={getClassList(["navLink", className])}
      data-active={isActive}
      style={style}
      onClick={onClick}
      target={target || "_self"}
    >
      {children}
    </Link>
  );
}
