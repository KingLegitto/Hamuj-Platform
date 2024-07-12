"use client"
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface HeroProps {
    images: any
}

const Hero: FC<HeroProps> = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [initialLoad, setInitialLoad] = useState(false)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );

      }, 12000); // Change image every 10 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <>
        {images.map((image:any, index:number) => (
            <Image onLoad={()=>{setInitialLoad(true)}} key={index} src={image} alt="Hero section background" 
            className={`hero-${index} h-full w-full object-cover absolute left-0 z-10 contrast-[0.7]
                ${(index === currentImageIndex && initialLoad) ? `opacity-70 scale-[1.4]`:`opacity-0 scale-[1]`}`}
            style={{transition: index === currentImageIndex ? 'opacity 1s linear, transform 13s ease-in':'opacity 1s linear, transform 13s 2s linear'}}/>
        ))} 
        </>
     );
}
 
export default Hero;