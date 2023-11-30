import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Me VPN - The Best Free VPN Service | Free and Fast",
  description:
    "Discover ultimate and fast freedom with Free Me VPN – your forever-free, Best secure VPN service, ensuring free online safety at no cost with Free Me VPN.",
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
