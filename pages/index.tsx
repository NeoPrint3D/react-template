import { m } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
            <Header />
            <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-red-400 via-purple-400 to-blue-400'>
                <m.button
                    className="bg-primary/50 rounded-lg shadow-lg p-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileTap={{ rotateX: [0, 90, 0], rotateY: [0, 180, 0], rotateZ: [0, 360, 0] }}

                    transition={{
                        scale: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        },
                        rotateX: {
                            type: 'inertia',
                            velocity: 1250,
                        },
                        rotateY: {
                            type: 'inertia',
                            velocity: 625,

                        },
                        rotateZ: {
                            type: 'inertia',
                            velocity: 625,

                        },


                    }}
                >
                    <h1 className="text-center text-white text-3xl">
                        The react template
                    </h1>
                </m.button>
            </div>
            <Footer />



        </>
    )
}

export default Home
