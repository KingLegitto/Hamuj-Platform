"use client";

import { FC, useEffect, useRef, useState } from "react";
import { navbarLinks } from "./navbarHelpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {}
const routes = navbarLinks;
const Navbar: FC<NavbarProps> = () => {
  const [isAtPageTop, setIsAtPageTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener("scroll", handleNavBg);
  }, []);

  function handleNavBg() {
    if (window.scrollY >= 100) {
      setIsAtPageTop(false);
    } else {
      setIsAtPageTop(true);
    }
  }

  return (
    <nav
      className={`navLink duration-300 w-full z-40 h-16 fixed flex justify-center items-center gap-x-14 text-white ${
        isAtPageTop ? "hover:bg-theme-1" : "bg-theme-1"
      }`}
    >
      {routes.map((navLink) => {
        return (
          <Link
            key={navLink.title}
            href={navLink.route}
            className={`${
              pathname == navLink.route
                ? "text-[#F49D02] font-bold"
                : "text-white "
            }`}
          >
            {navLink.title}
          </Link>
        );
      })}
      {/* <div className="absolute right-0 h-full w-[7px] bg-[#021322]">

            </div> */}
    </nav>
  );
};

export default Navbar;
