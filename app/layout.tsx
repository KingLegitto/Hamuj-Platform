import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"], weight: ['300','400', '700', '800'] });

export const metadata: Metadata = {
  title: "Hamuj Homes",
  description: "Your go to option for interior renovations, furniture and construction.",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="relative bg-theme-1 h-40 flex justify-between">
          <div className="absolute w-full text-center bottom-3 text-white text-xs md:text-sm">© 2024 Hamuj Homes Ltd. All Rights Reserved.</div>
        </footer>
      </body>
    </html>
  );
}
