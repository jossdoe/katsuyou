import React from "react"
import Head from "next/head"
import NavBar, { NavBarProps } from "./molecules/NavBar"
import { FaGithubSquare } from "react-icons/fa"

type LayoutProps = {
  active?: NavBarProps["active"]
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  return (
    <div className="bg-slate-100 flex min-h-screen flex-col">
      <Head>
        <title>活用</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <NavBar active={active} />
      <main className="w-full max-w-lg mx-auto px-8 py-8 mb-6">{children}</main>
      <footer className="w-48 mx-auto opacity-60">
        <div className="mb-2">
          <a href="https://github.com/jossdoe/katsuyou" target="_blank">
            <FaGithubSquare className="mx-auto text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
