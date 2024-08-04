import type { AppProps } from "next/app";
import "./globals.css";

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
