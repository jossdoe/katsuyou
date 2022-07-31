import Link from "next/link"
import React from "react"
import NavBarLink from "../atoms/NavBarLink"

export type NavBarProps = {
  active?: "quiz" | "dictionary"
  className?: string
}

const NavBar: React.FC<NavBarProps> = ({ active, className }) => {
  return (
    <nav className={`bg-white ${className}`}>
      <div className="flex max-w-[600px] mx-auto items-center">
        <div className="flex-1">
          <Link href="/">
            <a>
              <img className="p-4" src="/fujisan.png" width="72px" />
            </a>
          </Link>
        </div>
        <NavBarLink href="/quiz" active={active === "quiz"}>
          Quiz
        </NavBarLink>
        <NavBarLink href="/dictionary" active={active === "dictionary"}>
          Dictionary
        </NavBarLink>
      </div>
    </nav>
  )
}

export default NavBar
