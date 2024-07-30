import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";
import Link from "next/link";
import Whatsapp from "../assets/vectors/whatsapp.svg"
import Youtube from "../assets/vectors/youTube.svg"
import Instagram from "../assets/vectors/instagram.svg"
import Facebook from "../assets/vectors/facebook.svg"
import TikTok from "../assets/vectors/tikTok.svg"
import Image from "next/image";
import Preloader from "@/components/pageTransitions/preloader";




const inter = Inter({ subsets: ["latin"], weight: ['300','400', '500', '700', '800'] });

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
        <footer className="relative bg-theme-1 h-32 md:h-40 flex justify-between">
          <span className="hidden md:flex gap-x-3 absolute top-1/2 -translate-y-1/2 left-5 text-white text-xs md:text-sm">
            <Link href={'/about'}>Testimonials</Link> •
            <Link href={'/contact'}>Location</Link>
          </span>
          <span className="flex gap-x-6 md:gap-x-4 scale-110 md:scale-100 absolute top-[45%] md:top-1/2 -translate-y-1/2 right-1/2 md:right-5 translate-x-1/2 md:translate-x-0 text-white text-xs md:text-sm">
            <Link href=""><Image src={Facebook} alt="facebook icon"/></Link>
            <Link href=""><Image src={Whatsapp} alt="whatsapp icon"/></Link>
            <Link href="https://www.youtube.com/@HamujMedia/" target="_blank"><Image src={Youtube} alt="youtube icon" /></Link>
            <Link href="https://www.instagram.com/hamuj.ng/" target="_blank"><Image src={Instagram} alt="instagram icon"/></Link>
            <Link href=""><Image src={TikTok} alt="tiktok icon"/></Link>
          </span>
          <div className="absolute w-full text-center bottom-3 text-white text-xs md:text-sm">© 2024 Hamuj Homes Ltd. All Rights Reserved.</div>
        </footer>
        <Preloader />
      </body>
    </html>
  );
}
