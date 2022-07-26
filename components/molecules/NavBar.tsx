import React from "react"
import NavBarLink from "../atoms/NavBarLink"

export type NavBarProps = {
  active?: "quiz" | "dictionary"
  className?: string
}

const NavBar: React.FC<NavBarProps> = ({ active, className }) => {
  return (
    <nav className={`bg-white shadow-sm ${className}`}>
      <div className="flex max-w-lg mx-auto justify-center">
        <NavBarLink href="/" active={active === "quiz"}>
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
