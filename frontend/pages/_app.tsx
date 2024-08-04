import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { BootstrapWrapper } from "@/components/BootstrapWrapper";
import { Providers, useAppContext } from "@/context";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const { type } = useAppContext();

  return (
    <Providers>
      <BootstrapWrapper>
        <Header type={type} />
        <Component {...pageProps} />
        <Footer type={type} />
      </BootstrapWrapper>
    </Providers>
  );
}
