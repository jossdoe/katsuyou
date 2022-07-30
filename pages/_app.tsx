import PlausibleProvider from "next-plausible"
import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="katsuyou.vercel.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
