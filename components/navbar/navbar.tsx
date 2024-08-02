"use client";

import { FC, useEffect, useState } from "react";
import { navbarLinks } from "./navbarHelpers";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "../../assets/vectors/hamburger.svg";
import BrandLogo from "../../assets/rasters/smallLogo.png";
import Arrow from "../../assets/vectors/lineArrow.svg";
import TransitionLink from "../pageTransitions/transitionLink";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {}
const routes = navbarLinks;
const Navbar: FC<NavbarProps> = () => {
  const [isAtPageTop, setIsAtPageTop] = useState<boolean>(true);
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("scroll", handleNavBg);
    handleNavBg();
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

      {!pathname.startsWith(`/projects/`) && (
        <Image
          src={BrandLogo}
          alt="Hamuj Homes Logo"
          className={`absolute top-1/2 -translate-y-1/2 left-0 duration-500 opacity-0 w-10 lg:w-14 ${
            isAtPageTop && !pathname.startsWith("/projects/")
              ? ""
              : "delay-300 left-7 lg:left-20 opacity-[0.9]"
          } `}
        />
      )}

      {/* Back arrow for project details page */}
      {pathname.startsWith(`/projects/`) && (
        <TransitionLink href={'go-back'} goBack
        styles="absolute flex h-5 lg:h-7 items-center gap-x-2 top-1/2 -translate-y-1/2 left-7 lg:left-20 opacity-[0.9]">
          <Image
            src={Arrow}
            alt="arrow"
            className="h-full rotate-180"
          />
          <span>Back</span>
        </TransitionLink>
      )}

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
        className={`absolute lg:hidden duration-500 top-full pt-5 right-0 z-50 bg-white h-dvh w-3/4 flex flex-col items-center text-sm touch-none shadow-lg ${
          menuIsVisible ? "translate-x-0 " : "translate-x-full "
        } ${isAtPageTop ? "rounded-l-lg" : ""}`}
      >
        {routes.map((navLink) => {
          return (
            <TransitionLink
              key={navLink.title}
              href={navLink.route}
              setMenuIsVisible={setMenuIsVisible}
              styles={`navLink relative duration-200 border-b-[1px] py-3 last:border-none w-full text-center ${
                pathname == navLink.route
                  ? "text-theme-2 font-medium"
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
      <AnimatePresence>
        {menuIsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAtPageTop ? 0 : 0.5 }}
            exit={{ opacity: 0 }}
            className={`absolute top-full h-dvh w-screen bg-black touch-none`}
            onClick={() => {
              setMenuIsVisible(false);
            }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
