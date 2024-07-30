"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Preloader = () => {
    const pathname = usePathname()
    
    useEffect(()=>{
        const preloader:HTMLDivElement = document.querySelector('.preloader')!
        preloader.style.transition = '1s'
            preloader.style.opacity = '0'
        setTimeout(() => {
            preloader.style.display = 'none'
        }, 1000);
    },[pathname])
    return ( 
        <div className={`preloader fixed z-[99] bg-white w-screen h-screen top-0 left-0`}>
            <div className="preloader-spinner absolute w-28 lg:w-36 left-1/2 top-1/2 aspect-square border-dotted border-[#115faa] border-[20px] rounded-full"/>
        </div>
     );
}
 
export default Preloader;