'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`${styles.navLink} ${className}`} data-active={isActive}>
      {children}
    </Link>
  )
} 