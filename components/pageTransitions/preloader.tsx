"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Preloader = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname != "/") {
      const preloader: HTMLDivElement = document.querySelector(".preloader")!;
      preloader.style.transition = "1s";
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }
  }, [pathname]);
  return (
    <div
      className={`preloader fixed z-[99] bg-white w-screen h-dvh top-0 left-0`}
    >
      <div className="preloader-spinner absolute w-28 lg:w-36 left-1/2 top-1/2 aspect-square border-dotted border-[#115faa] border-[20px] rounded-full" />
      <div className="preloader-text absolute w-full px-5 text-center top-[calc(50%+5.5rem)] lg:top-[calc(50%+6rem)] left-1/2 -translate-x-1/2 " />
    </div>
  );
};

export default Preloader;
