import { m } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="A fully featured react template" />
                <meta property="og:url" content="https://neo-letter.web.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="React Template" />
                <meta property="og:description" content="A fully featured react template" />
                <meta property="og:image" content="/preview/home.png" />
            </Head>
            <div className='min-h-screen flex justify-center items-center'
                style={{
                    backgroundImage: `url('/images/hero.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h1 className="text-center text-black text-3xl">
                    The react template
                </h1>
            </div>
        </>
    )
}

export default Home
