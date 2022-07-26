import Link from "next/link"
import React from "react"

export type NavBarProps = {
  active?: boolean
  className?: string
  children: string
  href: string
}

const NavBar: React.FC<NavBarProps> = ({
  active,
  children,
  className,
  href,
}) => {
  return (
    <Link href={href}>
      <a
        className={`block w-40 bg-slate-300 py-4 px-6 text-center ${className}`}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavBar
