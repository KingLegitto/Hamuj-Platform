"use client";

import TransitionLink from "@/components/pageTransitions/transitionLink";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "../assets/vectors/whatsapp.svg";
import Youtube from "../assets/vectors/youTube.svg";
import Instagram from "../assets/vectors/instagram.svg";
import Facebook from "../assets/vectors/facebook.svg";
import TikTok from "../assets/vectors/tikTok.svg";
import { useEffect, useState } from "react";

const footerLinksData = [
  {
    subject: "fb",
    links: {
      ng: "https://web.facebook.com/people/Hamujng/61563704832927/",
      gb: "https://web.facebook.com/people/HamujUk/61563337604992/?mibextid=LQQJ4d&rdid=eMLZzuIBl1kvBUxF&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2FcoJBp1ffV8qR7zmh%2F%3Fmibextid%3DLQQJ4d%26_rdc%3D1%26_rdr",
    },
  },
  {
    subject: "ig",
    links: {
      ng: "https://www.instagram.com/hamuj.ng/",
      gb: "https://www.instagram.com/hamuj.uk/",
    },
  },
  {
    subject: "yt",
    links: {
      ng: "https://www.youtube.com/@Hamuj_ng",
    },
  },
  {
    subject: "tk",
    links: {
      ng: "https://www.tiktok.com/@hamuj.ng",
      gb: "https://www.tiktok.com/@hamuj.uk",
    },
  },
  {
    subject: "whatsapp",
    links: {
      ng: "https://wa.link/tz8g9o",
      gb: "https://wa.link/rc03ay"
    },
  },
];


const Footer = () => {
  const [region, setRegion] = useState<string | null>()

  function localiseLogic(content: { ng: string; uk?: string }) {
    let localisedContent = content.ng; // Nigerian content by default

    Object.keys(content).forEach((regionKey: string) => {
      if (region === regionKey.toUpperCase()) {
        // @ts-ignore
        localisedContent = content[regionKey];
      }
    });
    return localisedContent;
  }

  function footerLinks(criteria: "fb" | "ig" | "whatsapp" | "yt" | "tk") {
    let localisedLink = "";

    footerLinksData.forEach((linksData) => {
      if (criteria === linksData.subject) {
        localisedLink = localiseLogic(linksData.links);
      }
    });

    return localisedLink;
  }

  useEffect(()=>{
    setTimeout(() => {
      setRegion(sessionStorage.getItem("region"))
    }, 1000);
  }, [])
  
  return (
    <footer className="relative bg-theme-1 h-32 md:h-40 flex justify-between">
      <span className="hidden md:flex gap-x-3 absolute top-1/2 -translate-y-1/2 left-5 text-white text-xs md:text-sm">
        <TransitionLink href={"/"}>Testimonials</TransitionLink> •
        <TransitionLink href={"/contact"}>Location</TransitionLink>
      </span>
      <span className="flex items-center gap-x-6 md:gap-x-4 scale-110 md:scale-100 absolute top-[45%] md:top-1/2 -translate-y-1/2 right-1/2 md:right-5 translate-x-1/2 md:translate-x-0 text-white text-xs md:text-sm">
        <Link href={footerLinks("fb")} target="_blank">
          <Image src={Facebook} alt="facebook icon" />
        </Link>
        <Link href={footerLinks('whatsapp')} target="_blank">
          <Image src={Whatsapp} alt="whatsapp icon" />
        </Link>
        <Link href={footerLinks('yt')} target="_blank">
          <Image src={Youtube} alt="youtube icon" />
        </Link>
        <Link href={footerLinks("ig")} target="_blank">
          <Image src={Instagram} alt="instagram icon" />
        </Link>
        <Link href={footerLinks('tk')} target="_blank">
          <Image src={TikTok} alt="tiktok icon" />
        </Link>
      </span>
      <div className="absolute w-full text-center bottom-3 text-white text-xs md:text-sm">
        © 2024 Hamuj Homes Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
