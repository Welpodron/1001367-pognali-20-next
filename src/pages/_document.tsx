import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          type="font/woff2"
          href="/fonts/bloggersans.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/bloggersans-italic.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/bloggersans-light.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/bloggersans-lightitalic.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/bloggersans-medium.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/bloggersans-mediumitalic.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/bloggersans-bold.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          type="font/woff2"
          href="/fonts/bloggersans-bolditalic.woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
