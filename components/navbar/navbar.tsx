"use client";

import { FC, useEffect, useRef, useState } from "react";
import { navbarLinks } from "./navbarHelpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Menu from "../../assets/vectors/hamburger.svg"
import BrandLogo from "../../assets/rasters/smallLogo.png";

interface NavbarProps {}
const routes = navbarLinks;
const Navbar: FC<NavbarProps> = () => {
  const [isAtPageTop, setIsAtPageTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener("scroll", handleNavBg);
  }, []);

  function handleNavBg() {
    if (window.scrollY >= 200) {
      setIsAtPageTop(false);
    } else {
      setIsAtPageTop(true);
    }
  }

  return (
    <nav
      className={`duration-300 w-full z-40 fixed flex justify-center items-center gap-x-14 text-white ${
        isAtPageTop
          ? "hover:bg-theme-1 h-20 backdrop-blur-sm"
          : "bg-theme-1 h-14 md:h-16"
      }`}
    >
      {routes.map((navLink) => {
        return (
          <Link
            key={navLink.title}
            href={navLink.route}
            className={`navLink relative duration-200 hidden md:inline ${
              pathname == navLink.route
                ? "text-theme-2 font-bold"
                : "text-white"
            }`}
          >
            {navLink.title}

            <div
              className={`w-0 h-[1px] duration-300 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 scale-105 link-underline ${
                pathname == navLink.route ? "opacity-0" : "bg-[#ffffff90]"
              }`}
            />
          </Link>
        );
      })}

      <Image
        src={BrandLogo}
        alt="Hamuj Homes Logo"
        className={`absolute top-1/2 -translate-y-1/2 left-0 duration-500 opacity-0 w-12 md:w-14 ${
          isAtPageTop ? "" : "delay-300 left-5 md:left-20 opacity-[0.9]"
        } `}
      />

      <Image src={Menu} alt="hamburger icon" className="md:hidden absolute top-1/2 -translate-y-1/2 right-5 scale-75 opacity-90"/>
    </nav>
  );
};

export default Navbar;
