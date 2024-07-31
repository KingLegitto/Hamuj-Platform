"use client";

import { FC, useEffect, useState } from "react";
import { navbarLinks } from "./navbarHelpers";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "../../assets/vectors/hamburger.svg";
import BrandLogo from "../../assets/rasters/smallLogo.png";
import TransitionLink from "../pageTransitions/transitionLink";

interface NavbarProps {}
const routes = navbarLinks;
const Navbar: FC<NavbarProps> = () => {
  const [isAtPageTop, setIsAtPageTop] = useState<boolean>(true);
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter()

  useEffect(() => {
    document.addEventListener("scroll", handleNavBg);
    handleNavBg();
  }, []);

  useEffect(()=>{
    setMenuIsVisible(false)
  }, [pathname])

  function handleNavBg() {
    if (window.scrollY >= 200) {
      setIsAtPageTop(false);
    } else {
      setIsAtPageTop(true);
    }
  }

  return (
    <nav
      className={`duration-300 group w-full z-40 fixed justify-center items-center gap-x-14 overflow-x-clip text-white ${
        isAtPageTop && !pathname.startsWith("/projects/")
          ? "lg:hover:bg-theme-1 h-20 lg:backdrop-blur-sm"
          : "bg-theme-1 h-14 lg:h-16"
      }
        ${pathname.startsWith("/studio") ? "hidden" : "flex"}`}
    >
      {routes.map((navLink) => {
        return (
          <TransitionLink
            key={navLink.title}
            href={navLink.route}
            styles={`navLink relative duration-200 hidden lg:inline ${
              pathname == navLink.route ||
              pathname.startsWith(`${navLink.route}/`)
                ? "text-theme-2 font-medium"
                : "text-white"
            }`}
          >
            {navLink.title}
            {/* Underline element effect */}
            <div
              className={`w-0 h-[1px] duration-300 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 scale-105 link-underline ${
                pathname == navLink.route ? "opacity-0" : "bg-[#ffffff90]"
              }`}
            />
          </TransitionLink>
        );
      })}

      <Image
        src={BrandLogo}
        alt="Hamuj Homes Logo"
        className={`absolute top-1/2 -translate-y-1/2 left-0 duration-500 opacity-0 w-10 lg:w-14 ${
          isAtPageTop && !pathname.startsWith("/projects/")
            ? ""
            : "delay-300 left-7 lg:left-20 opacity-[0.9]"
        } `}
      />

      <Image
        src={Menu}
        alt="hamburger icon"
        onClick={() => {
          setMenuIsVisible(!menuIsVisible);
        }}
        className="lg:hidden absolute top-1/2 -translate-y-1/2 right-5 scale-75 opacity-90"
      />

      {/* Mobile nav */}
      <aside
        className={`absolute lg:hidden top-full pt-5 right-0 z-50 bg-white h-dvh w-3/4 flex flex-col items-center text-sm touch-none shadow-lg ${
          menuIsVisible ? "translate-x-0 duration-500" : "translate-x-full"
        } ${isAtPageTop ? "rounded-l-lg" : ""}`}
      >
        {routes.map((navLink) => {
          return (
            <TransitionLink
              key={navLink.title}
              href={navLink.route}
              styles={`navLink relative duration-200 border-b-[1px] py-3 last:border-none w-full text-center ${
                pathname == navLink.route
                  ? "text-theme-2 font-bold"
                  : "text-grade-3"
              }`}
            >
              {navLink.title}
            </TransitionLink>
          );
        })}
        <span
          className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-full text-center text-xs text-grade-3 ${isAtPageTop ? "bottom-[5.2rem]" : " bottom-[4rem]"}`}
        >
          © 2024 Hamuj Homes Ltd. <br /> All Rights Reserved.
        </span>
      </aside>

      {/* Black translucent overlay for mobile */}
      <div
        className={`absolute top-full h-dvh w-screen bg-black touch-none ${
          menuIsVisible ? "block" : "hidden"
        } ${isAtPageTop ? "opacity-0" : "opacity-50"}`}
        onClick={() => {
          setMenuIsVisible(false);
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
