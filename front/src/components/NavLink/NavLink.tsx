"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { getClassList } from "@utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
}

export function NavLink({ href, children, className, style, target, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={getClassList([styles.navLink, className])}
      data-active={isActive}
      style={style}
      onClick={onClick}
      target={target || "_self"}
    >
      {children}
    </Link>
  );
}
