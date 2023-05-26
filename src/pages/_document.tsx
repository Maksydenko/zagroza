import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <link rel="apple-touch-icon" href="/zagroza/favicon.png" />
      <link rel="icon" href="/zagroza/favicon.png" />
      <title>Nice</title>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
