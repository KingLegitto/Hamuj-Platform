"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface HeroProps {
  images: any[];
}

const Hero: FC<HeroProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 12000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    if(initialLoad === images.length){
      const preloader:HTMLDivElement = document.querySelector('.preloader')!
        preloader.style.transition = '1s'
            preloader.style.opacity = '0'
        setTimeout(() => {
            preloader.style.display = 'none'
        }, 1000);
    }
  }, [initialLoad])

  return (
    <>
      {images.map((image: any, index: number) => (
        <Image
          onLoad={() => {
            setInitialLoad((prev)=>(prev+1));
          }}
          key={index}
          placeholder="blur"
          src={image}
          alt="Hero section background"
          className={`hero-${index} h-full w-full object-cover absolute left-0 z-10 brightness-50
                ${(index === currentImageIndex && (initialLoad === images.length)) ? `opacity-100 scale-[1.3]` : `opacity-0 scale-[1]`}`}
          style={{
            transition:
              index === currentImageIndex
                ? "opacity 1s linear, transform 13s ease-in"
                : "opacity 1s linear, transform 13s 2s linear",
          }}
        />
      ))}
    </>
  );
};

export default Hero;
