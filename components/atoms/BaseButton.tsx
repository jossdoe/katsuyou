import Link from "next/link"
import React from "react"
import cn from "classnames"

type AsButton = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  href?: never
}

type AsLink = {
  onClick?: never
  href: string
}

export type BaseButtonProps = (AsButton | AsLink) & {
  className?: string
  children: string
  variant: "red" | "grey"
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  className,
  href = undefined,
  onClick = undefined,
  variant,
}) => {
  const baseStyles = [
    "inline-block",
    "font-bold",
    "px-8",
    "py-3",
    "rounded-xl",
    "text-center",
    "min-w-[140px]",
    "transition-colors",
  ]

  const conditionals = {
    "bg-red-500 text-white hover:bg-red-600 active:bg-red-700":
      variant === "red",
    "bg-slate-200 text-slate-700 hover:bg-slate-300 active:bg-slate-400":
      variant === "grey",
  }

  const buttonStyles = cn([baseStyles, conditionals, className])

  return (
    <>
      {href && (
        <Link href={href}>
          <a className={buttonStyles}>{children}</a>
        </Link>
      )}
      {onClick && (
        <button className={buttonStyles} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  )
}

export default BaseButton
