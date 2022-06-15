import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { domMax, LazyMotion } from 'framer-motion'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domMax}>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default MyApp
