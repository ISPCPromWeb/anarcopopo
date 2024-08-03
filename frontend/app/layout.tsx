import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapWrapper } from "../components/BootstrapWrapper/BootstrapWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Vet",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} body-dark bg-gray`}>
        <BootstrapWrapper>{children}</BootstrapWrapper>
      </body>
    </html>
  );
}
