import { Html, Head, Main, NextScript } from "next/document";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`body-dark bg-gray`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
