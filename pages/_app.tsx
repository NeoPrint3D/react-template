import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { domMax, LazyMotion } from 'framer-motion'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domMax}>
      <div className='min-h-screen'
        style={{
          backgroundImage: `url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </LazyMotion>
  )
}

