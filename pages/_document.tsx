import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&family=Monda&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
