import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Me VPN",
  description: "Free Me VPN is a Free vpn App",
  alternates: {
    canonical: "https://freemevpn.com/",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <title>Free Me VPN</title>
        <link rel="canonical" href="https://freemevpn.com/" key="canonical" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
