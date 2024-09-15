"use client";
import { FC, useEffect, useState } from "react";
import Mission from "../assets/vectors/mission.svg";
import Vision from "../assets/vectors/vision.svg";
import Values from "../assets/vectors/values.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const GuidingPrinciples: FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(innerWidth);
    }
  }, [screenWidth]);

  function handleActiveIndex(index: number) {
    if(index != activeIndex){
      setActiveIndex(index);

      setTimeout(() => {
        const target: HTMLParagraphElement = document.querySelector(
          `.principle-${index}`
        )!;

        target.scrollIntoView({ block: "center", inline: "nearest" });
      }, 400);
    }
    else{
      setActiveIndex(-1)
    }
  }

  return screenWidth > 768 ? (
    <div className="h-[500px] flex flex-col mt-32">
      <div className="h-20 grid grid-cols-3">
        <div
          onClick={() => {
            setActiveIndex(0);
          }}
          className={`w-full h-full flex items-center justify-center text-xl font-bold
            ${(activeIndex === 0 || activeIndex === -1) ? "bg-[#E8E8E8]" : "text-grade-1 hover:text-grade-3 cursor-pointer"}`}
        >
          MISSION
        </div>
        <div
          onClick={() => {
            setActiveIndex(1);
          }}
          className={`h-full flex items-center justify-center text-xl font-bold
            ${activeIndex === 1 ? "bg-[#E8E8E8]" : "text-grade-1 hover:text-grade-3 cursor-pointer"}`}
        >
          VISION
        </div>
        <div
          onClick={() => {
            setActiveIndex(2);
          }}
          className={`h-full flex items-center justify-center text-xl font-bold
            ${activeIndex === 2 ? "bg-[#E8E8E8]" : "text-grade-1 hover:text-grade-3 cursor-pointer"}`}
        >
          VALUES
        </div>
      </div>

      <div className="bg-[#E8E8E8] flex-grow text-lg">
        {(activeIndex === 0 || activeIndex === -1) && (
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-[2fr_5fr] w-full h-full items-center gap-x-10"
          >
            <Image
              src={Mission}
              alt="mission icon"
              className="justify-self-end"
            />
            <p className="max-w-[70%]">
              Our mission is to build expansive, vibrant communities across
              Africa, fostering connections among people of diverse tribes,
              languages, religions, and cultures. <br />
              We aim to create an inclusive environment where individuals from
              various backgrounds can come together, share their unique
              perspectives, and celebrate their rich cultural heritage. By
              bridging these differences, we hope to promote understanding,
              unity, and cooperation throughout the continent.
            </p>
          </motion.div>
        )}

        {activeIndex === 1 && (
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-[2fr_5fr] w-full h-full items-center gap-x-10"
          >
            <Image
              src={Vision}
              alt="mission icon"
              className="justify-self-end"
            />
              <ul className="principle-1 flex flex-col gap-y-7 max-w-[70%]">
              <li>
                To Combine luxury and affordability for the average Nigerian.
              </li>
              <li>Enable fast and time-bound project delivery.</li>
              <li>
                To become a multinational real estate group and solve trending and existing real estate issues
                across Africa.
              </li>
              </ul>
          </motion.div>
        )}

        {activeIndex === 2 && (
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-[4fr_5fr] w-full h-full items-center gap-x-10"
          >
            <Image
              src={Values}
              alt="mission icon"
              className="justify-self-end"
            />
              <ul className="principle-2 flex flex-col gap-y-3 max-w-[70%]">
                <li>Excellence</li>
                <li>Quality</li>
                <li>Tranquility</li>
                <li>Impeccability</li>
                <li>Integrity</li>
              </ul>
          </motion.div>
        )}
      </div>
    </div>
  ) : (
    // MOBILE
    <div className={` duration-500 h-[190px] ${activeIndex === 0? 'h-[500px]':'mb-5'} ${activeIndex === 1? 'h-[400px]':'mb-5'} ${activeIndex === 2? 'h-[350px]':'mb-5'}`}>
      <div className="w-full mt-14 text-grade-3 text-sm">
        <h3
          className={`w-[250px] duration-[0.3s] mx-auto px-5 text-center text-base py-2 ${activeIndex === 0? 'bg-[#8c8c8c] text-white font-medium rounded-2xl':'rounded-3xl shadow-[5px_5px_0px_0px_#e8e8e8] text-grade-3'}`}
          onClick={() => {
            handleActiveIndex(0);
          }}
        >
          MISSION
        </h3>
      
        {activeIndex === 0 && (
          <motion.p
            initial={{ opacity: 0, x: "-100%", maxHeight: 0 }} 
            animate={{ opacity: 1, x: 0, maxHeight: '500px', transition:{duration:0.5}}}
            className="principle-0 px-5 py-10 text-center overflow-hidden bg-[#e8e8e8] rounded-xl mt-3 w-[90%] mx-auto"
          >
            Our mission is to build expansive, vibrant communities across
            Africa, fostering connections among people of diverse tribes,
            languages, religions, and cultures. <br /> <br />
            We aim to create an inclusive environment where individuals from
            various backgrounds can come together, share their unique
            perspectives, and celebrate their rich cultural heritage. By
            bridging these differences, we hope to promote understanding, unity,
            and cooperation throughout the continent.
          </motion.p>
        )}
        
      </div>

      <div className="w-full mt-7 text-grade-3 text-sm">
        <h3
          className={`w-[250px] duration-[0.3s] mx-auto px-5 text-center text-base py-2 ${activeIndex === 1? 'bg-[#8c8c8c] text-white font-medium rounded-2xl':'rounded-3xl shadow-[5px_5px_0px_0px_#e8e8e8] text-grade-3'}`}
          onClick={() => {
            handleActiveIndex(1);
          }}
        >
          VISION
        </h3>
      
        {activeIndex === 1 && (
          <motion.ul
            initial={{ opacity: 0, x: "-100%", maxHeight: 0 }}
            animate={{ opacity: 1, x: 0, maxHeight: '500px', transition:{duration:0.5}}}
            className="principle-1 flex flex-col gap-y-1 p-5 pr-7 py-10 text-left bg-[#e8e8e8] rounded-xl mt-3 w-[90%] mx-auto"
          >
              <li>
                To Combine luxury and affordability for the average Nigerian.
              </li>
              <li>Enable fast and time-bound project delivery.</li>
              <li>
                To become a multinational real estate group and solve trending and existing real estate issues
                across Africa.
              </li>
          </motion.ul>
        )}
        
      </div>

      <div className="w-full mt-7 text-grade-3 text-sm">
        <h3
          className={`w-[250px] duration-[0.3s] mx-auto px-5 text-center text-base py-2 ${activeIndex === 2? 'bg-[#8c8c8c] text-white font-medium rounded-2xl':'rounded-3xl shadow-[5px_5px_0px_0px_#e8e8e8] text-grade-3'}`}
          onClick={() => {
            handleActiveIndex(2);
          }}
        >
          VALUES
        </h3>
      
        {activeIndex === 2 && (
          <motion.ul
            initial={{ opacity: 0, x: "-100%", maxHeight: 0 }} 
            animate={{ opacity: 1, x: 0, maxHeight: '500px', transition:{duration:0.5}}}
            className="principle-2 flex flex-col pl-10 pr-7 py-10 text-left bg-[#e8e8e8] rounded-xl mt-3 w-[90%] mx-auto"
          >
              <li>Excellence</li>
              <li>Quality</li>
              <li>Tranquility</li>
              <li>Impeccability</li>
              <li>Integrity</li>
          </motion.ul>
        )}
        
      </div>
      
    </div>
  );
};

export default GuidingPrinciples;
