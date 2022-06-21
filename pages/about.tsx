import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="A fully featured react template" />
                <meta property="og:url" content="https://neo-letter.web.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="React Template" />
                <meta property="og:description" content="A fully featured react template" />
                <meta property="og:image" content="/preview/home.png" />
            </Head>
            <div className="min-h-page flex justify-center items-center">
                <p className="text-4xl">This is the about page</p>
            </div>
        </>
    )
}