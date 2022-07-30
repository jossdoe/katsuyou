import Link from "next/link"
import React from "react"
import cn from "classnames"

export type NavBarLinkProps = {
  active?: boolean
  className?: string
  children: string
  href: string
}

const NavBarLink: React.FC<NavBarLinkProps> = ({
  active,
  children,
  className,
  href,
}) => {
  const conditionals = cn({
    "border-b-2 border-red-500": false,
  })

  return (
    <Link href={href}>
      <a
        className={`block w-32 py-4 px-6 text-center font-semibold text-slate-500 hover:text-slate-600 ${className} ${conditionals}`}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavBarLink
