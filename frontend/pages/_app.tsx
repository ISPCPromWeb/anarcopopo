import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { BootstrapWrapper } from "@/components/BootstrapWrapper";
import { Providers, useAppContext } from "@/context";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <BootstrapWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </BootstrapWrapper>
    </Providers>
  );
}
