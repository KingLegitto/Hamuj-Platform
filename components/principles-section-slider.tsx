"use client"
import { FC, useEffect, useState } from "react";
import Mission from "../assets/vectors/mission.svg";
import Vision from "../assets/vectors/vision.svg";
import Values from "../assets/vectors/values.svg";
import Image from "next/image";

const Slider: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [screenWidth, setScreenWidth] = useState<number>(0)

    useEffect(()=>{
      if(typeof window !== 'undefined'){
        setScreenWidth(innerWidth)
      }
    }, [screenWidth])

  return (
    screenWidth>=768?
    (<div className="h-[500px] flex flex-col mt-32">
      <div className="h-20 grid grid-cols-3">
        <div onClick={()=>{setActiveIndex(0)}}
          className={`w-full h-full flex items-center justify-center text-xl md:text-3xl font-bold
            ${activeIndex === 0? 'bg-[#E8E8E8]':'text-grade-1 hover:text-grade-3 cursor-pointer'}`}
        >
          MISSION
        </div>
        <div onClick={()=>{setActiveIndex(1)}}
          className={`h-full flex items-center justify-center text-xl md:text-3xl font-bold
            ${activeIndex === 1? 'bg-[#E8E8E8]':'text-grade-1 hover:text-grade-3 cursor-pointer'}`}
        >
          VISION
        </div>
        <div onClick={()=>{setActiveIndex(2)}}
          className={`h-full flex items-center justify-center text-xl md:text-3xl font-bold
            ${activeIndex === 2? 'bg-[#E8E8E8]':'text-grade-1 hover:text-grade-3 cursor-pointer'}`}
        >
          VALUES
        </div>
      </div>

      <div className="bg-[#E8E8E8] flex-grow text-lg">
        { activeIndex === 0 && (<div className="grid grid-cols-[2fr_5fr] w-full h-full items-center gap-x-10"> 
            <Image src={Mission} alt="mission icon" className="justify-self-end"/>
            <p className="max-w-[70%]">
            Our mission is to build expansive, vibrant communities across Africa,
            fostering connections among people of diverse tribes, languages,
            religions, and cultures. We aim to create an inclusive environment
            where individuals from various backgrounds can come together, share
            their unique perspectives, and celebrate their rich cultural heritage.
            By bridging these differences, we hope to promote understanding,
            unity, and cooperation throughout the continent.
            </p>
        </div> )}

        { activeIndex === 1 && (<div className="grid grid-cols-[2fr_5fr] w-full h-full items-center gap-x-10"> 
            <Image src={Vision} alt="mission icon" className="justify-self-end"/>
            <p className="max-w-[70%]">
            Our mission is to build expansive, vibrant communities across Africa,
            fostering connections among people of diverse tribes, languages,
            religions, and cultures. We aim to create an inclusive environment
            where individuals from various backgrounds can come together, share
            their unique perspectives, and celebrate their rich cultural heritage.
            By bridging these differences, we hope to promote understanding,
            unity, and cooperation throughout the continent.
            </p>
        </div> )}

        { activeIndex === 2 && (<div className="grid grid-cols-[2fr_5fr] w-full h-full items-center gap-x-10"> 
            <Image src={Values} alt="mission icon" className="justify-self-end"/>
            <p className="max-w-[70%]">
            Our mission is to build expansive, vibrant communities across Africa,
            fostering connections among people of diverse tribes, languages,
            religions, and cultures. We aim to create an inclusive environment
            where individuals from various backgrounds can come together, share
            their unique perspectives, and celebrate their rich cultural heritage.
            By bridging these differences, we hope to promote understanding,
            unity, and cooperation throughout the continent.
            </p>
        </div> )}
      </div>
    </div>)
    :
    (<div></div>)
  );
};

export default Slider;
