"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "../public/vectors/hamburger.svg";
import BrandLogo from "../public/rasters/smallLogo.png";
import Arrow from "../public/vectors/lineArrow.svg";
import Globe from "../public/vectors/globe.svg";
import GlobeMobile from "../public/vectors/globeMobile.svg";
import TransitionLink from "../components/pageTransitions/transitionLink";
import { AnimatePresence, motion } from "framer-motion";
import NigeriaFlag from "@/assets/vectors/NigeriaFlag";
import UKFlag from "@/assets/vectors/UKFlag";

const routes = [
  { title: "Home", route: "/" },
  { title: "About", route: "/about" },
  { title: "Shop", route: "/shop" },
  { title: "Portfolio", route: "/portfolio" },
  { title: "Contact", route: "/contact" },
  { title: "Consultation", route: "/consultation" },
];

const Navbar = () => {
  const [isAtPageTop, setIsAtPageTop] = useState<boolean>(true);
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const pathname = usePathname();
  const [region, setRegion] = useState<string | null>()
  const [isRegionVisible, setIsRegionVisible] = useState<boolean>(false)
  const date = new Date()


  useEffect(() => {
    // getCountryFromIP()
    setRegion(sessionStorage.getItem('region'))
    document.addEventListener("scroll", handleNavBg);
    handleNavBg();
  }, []);

  function handleNavBg() {
    if (window.scrollY >= 200) {
      setIsAtPageTop(false);
    } else {
      setIsAtPageTop(true);
    }
    
    if(window.scrollY >= 50 && !(sessionStorage.getItem('region'))){
      setIsRegionVisible(true)
    }
  }

  function handleDragEnd(distance:number){
    if(distance > 150){
      setIsRegionVisible(false)
    }
  }

  async function getCountryFromIP() {
    if(!sessionStorage.getItem('region')){ // If there's no region data stored
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country_code
        if(country){
          setRegion(country)
          sessionStorage.setItem('region', country)
        }
      } catch (error) {
        // Do nothing
      }
    }
    else{ // If there is region data in session storage
      setRegion(sessionStorage.getItem('region'))
    }
  }

  function handleRegionSelection(selection: string){
    setRegion(selection)
    sessionStorage.setItem('region', selection)
    setTimeout(() => {
      setIsRegionVisible(false)
      setTimeout(() => {
        const preloader: HTMLDivElement = document.querySelector(".preloader")!;
        preloader.style.display = "block";
        setTimeout(() => {
          preloader.style.transition = "0.3s";
          preloader.style.opacity = "1";
        }, 100);
        setTimeout(() => {
          window.location.reload()
        }, 300);
      }, 500);
    }, 500);
  }

  function checkIfRegionSelected(selection : string){
    if(selection === region){
      return 'text-theme-1'
    }
  }

  return (
    <>
    <nav
      className={`duration-300 flex group w-full z-[90] fixed justify-center items-center gap-x-14 text-white ${
        isAtPageTop && !pathname.startsWith("/portfolio/")
          ? "lg:hover:bg-theme-1 h-20 lg:backdrop-blur-sm"
          : "bg-theme-1 h-14 lg:h-16"
      }`}
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

      {/* Logo */}
      {!pathname.startsWith(`/portfolio/`) && (
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
      {pathname.startsWith(`/portfolio/`) && (
        <TransitionLink
          href={"/"}
          goBack
          styles="absolute flex h-5 lg:h-7 items-center lg:gap-x-2 top-1/2 -translate-y-1/2 left-3 lg:left-10"
        >
          <Image src={Arrow} alt="arrow" className="h-full rotate-180" />
          <span className="text-sm lg:text-base">Back</span>
        </TransitionLink>
      )}

      {/* Menu Icon */}
      <Image
        src={Menu}
        alt="hamburger icon"
        onClick={() => {
          setMenuIsVisible(!menuIsVisible);
        }}
        className="lg:hidden backdrop-blur-sm absolute top-1/2 -translate-y-1/2 right-5 scale-75 opacity-90"
      />

      {/* Region button */}
      <button onClick={()=>{setIsRegionVisible(true)}} className="hidden lg:flex items-center gap-x-1 absolute top-1/2 -translate-y-1/2 right-20"
        title="Change region">
        <Image src={Globe} alt="globe" className="w-9"/>
        <span className="uppercase">{region}</span>
      </button>

      {/* Mobile nav */}
      <aside
        className={`absolute lg:hidden duration-500 top-full pt-5 right-0 z-50 bg-white w-3/4 flex flex-col items-center text-sm touch-none shadow-lg ${
          menuIsVisible ? "translate-x-0 " : "translate-x-full "
        } ${isAtPageTop ? "rounded-l-lg h-[calc(100dvh-80px)]" : "h-[calc(100dvh-56px)]"}`}
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

        <div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-full flex flex-col gap-y-5 text-center text-xs text-grade-3`}
        >
          <button onClick={()=>{setIsRegionVisible(true), setMenuIsVisible(false)}} className="flex items-center w-full justify-center">
            <Image src={GlobeMobile} alt="globe" className="w-6"/>
            <span className="uppercase">{region}</span>
          </button>
          <span>
            © {date.getFullYear()} Hamuj Homes Ltd. <br /> All Rights Reserved.
          </span>
        </div>

      </aside>

      {/* Black translucent overlay for mobile */}
      <AnimatePresence>
        {(menuIsVisible || isRegionVisible) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: (isAtPageTop && !isRegionVisible) ? 0 : 0.5 }}
            exit={{ opacity: 0 }}
            className={`absolute ${isRegionVisible? 'top-0':'top-full'} h-dvh w-screen bg-black touch-none`}
            onClick={() => {
              setMenuIsVisible(false);
              region?
              // setIsRegionVisible(false) : setIsRegionVisible(true)
              setIsRegionVisible(false) : (setIsRegionVisible(false), setRegion('NG'),sessionStorage.setItem('region', 'NG'))
            }}
          />
        )}
      </AnimatePresence>
    </nav>

    {/* Region element */}
    <AnimatePresence>
        {isRegionVisible && (
        <>
        {/* TAB AND PC VERSION */}
        <motion.section 
        onClick={(e)=>{e.stopPropagation()}} initial={{opacity: 0, x: '-50%', y: 0}} animate={{opacity: 1, y: '-50%', transition:{delay: 0.3, duration: 0.3}}} exit={{opacity: 0, y: 0, transition:{duration:0.5}}}
        className="hidden md:flex fixed z-[100] top-1/2 left-1/2 flex-col shadow-md
        w-[500px] lg:w-[700px] h-[400px] text-grade-3 font-normal px-10 pt-5 bg-slate-50">
          
          <h2 className="text-center mb-2 text-base font-medium">Select Region</h2>
          
          <button className={`relative text-center py-5 border-b hover:bg-[#e8e8e8] ${checkIfRegionSelected('NG')}`} onClick={()=>{handleRegionSelection('NG')}}>
            <NigeriaFlag className="absolute top-1/2 left-2 -translate-y-1/2"/>
            Nigeria
          </button>
          <button className={`relative text-center py-5 border-b hover:bg-[#e8e8e8] ${checkIfRegionSelected('GB')}`} onClick={()=>{handleRegionSelection('GB')}}>
            <UKFlag className="absolute top-1/2 left-2 -translate-y-1/2"/>
            United Kingdom
          </button>
          
        </motion.section>

          {/* PHONE VERSION */}
        <motion.section drag='y' dragConstraints={{top: 0}} dragElastic={{top: 0, bottom: 0.5}} dragSnapToOrigin onDragEnd={(e,info)=>(handleDragEnd(info.offset.y))} 
        onClick={(e)=>{e.stopPropagation()}} initial={{y: '100%'}} animate={{y:0, transition:{delay: 0.3, duration: 0.7}}} exit={{y: '100%', transition:{delay: 0, duration:0.5}}}
        className="md:hidden fixed z-[100] bottom-0 flex flex-col touch-none h-[calc(100dvh-100px)] w-full text-sm text-grade-3 font-normal px-7 pt-10 pb-9 rounded-t-2xl bg-slate-50">
          
          <div className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full w-1/5 h-1 bg-[#8c8c8c]"/>

          <h2 className="text-center mb-2 text-base font-medium">Select Region</h2>
          
          <button className={`relative text-center py-5 border-b hover:bg-[#e8e8e8] ${checkIfRegionSelected('NG')}`} onClick={()=>{handleRegionSelection('NG')}}>
            <NigeriaFlag className="absolute top-1/2 left-2 -translate-y-1/2"/>
            Nigeria
          </button>
          <button className={`relative text-center py-5 border-b hover:bg-[#e8e8e8] ${checkIfRegionSelected('GB')}`} onClick={()=>{handleRegionSelection('GB')}}>
            <UKFlag className="absolute top-1/2 left-2 -translate-y-1/2"/>
            United Kingdom
          </button>
          
        </motion.section>
        </>
      )}
        </AnimatePresence>
    </>
  );
};

export default Navbar;
