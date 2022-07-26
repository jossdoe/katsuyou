import React from "react"
import Head from "next/head"
import NavBar, { NavBarProps } from "./molecules/NavBar"

type LayoutProps = {
  active?: NavBarProps["active"]
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  return (
    <div className="bg-slate-100 flex min-h-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active={active} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
