import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/icons/icon-192x192.png" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
                <meta name="theme-color" content="#1A1736" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}