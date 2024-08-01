"use client";
import { FC, useEffect, useState } from "react";
import Mission from "../assets/vectors/mission.svg";
import Vision from "../assets/vectors/vision.svg";
import Values from "../assets/vectors/values.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Slider: FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(innerWidth);
    }
  }, [screenWidth]);

  function handleActiveIndex(index: number) {
    setActiveIndex(index);

    setTimeout(() => {
      const target: HTMLParagraphElement = document.querySelector(
        `.principle-${index}`
      )!;

      target.scrollIntoView({ block: "center", inline: "nearest" });
    }, 400);
  }

  return screenWidth >= 768 ? (
    <div className="h-[500px] flex flex-col mt-32">
      <div className="h-20 grid grid-cols-3">
        <div
          onClick={() => {
            setActiveIndex(0);
          }}
          className={`w-full h-full flex items-center justify-center text-xl md:text-3xl font-bold
            ${(activeIndex === 0 || activeIndex === -1) ? "bg-[#E8E8E8]" : "text-grade-1 hover:text-grade-3 cursor-pointer"}`}
        >
          MISSION
        </div>
        <div
          onClick={() => {
            setActiveIndex(1);
          }}
          className={`h-full flex items-center justify-center text-xl md:text-3xl font-bold
            ${activeIndex === 1 ? "bg-[#E8E8E8]" : "text-grade-1 hover:text-grade-3 cursor-pointer"}`}
        >
          VISION
        </div>
        <div
          onClick={() => {
            setActiveIndex(2);
          }}
          className={`h-full flex items-center justify-center text-xl md:text-3xl font-bold
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
            <p className="max-w-[70%]">
              <ul className="flex flex-col gap-y-7">
              <li>
                To Combine luxury and affordability for the average Nigerian.
              </li>
              <li>Enable fast and time-bound project delivery.</li>
              <li>
                To become a multinational real estate group and solve trending and existing real estate issues
                across Africa.
              </li>
              </ul>
            </p>
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
            <p className="max-w-[70%]">
              <ul className="flex flex-col gap-y-3">
                <li>Excellence</li>
                <li>Quality</li>
                <li>Tranquility</li>
                <li>Impeccability</li>
                <li>Integrity</li>
              </ul>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  ) : (
    <>
      <div className="w-full mt-14">
        <h3
          className={`w-full text-center text-lg ${activeIndex === 0? 'font-bold text-grade-3':'font-medium text-grade-2'}`}
          onClick={() => {
            handleActiveIndex(0);
          }}
        >
          • MISSION
        </h3>
        <AnimatePresence>
        {activeIndex === 0 && (
          <motion.p
            initial={{ opacity: 0, x: "-100%", maxHeight: 0 }} exit={{maxHeight: 0, opacity: 0, transition:{duration:0.2}}}
            animate={{ opacity: 1, x: 0, maxHeight: '500px', transition:{duration:0.5}}}
            className="principle-0 p-5 text-center bg-[#e8e8e8] rounded-3xl mt-3 w-[90%] mx-auto"
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
        </AnimatePresence>
      </div>

      <div className="w-full mt-7">
        <h3
          className={`w-full text-center text-lg ${activeIndex === 1? 'font-bold text-grade-3':'font-medium text-grade-2'}`}
          onClick={() => {
            handleActiveIndex(1);
          }}
        >
          • VISION
        </h3>
        <AnimatePresence>
        {activeIndex === 1 && (
          <motion.p
            initial={{ opacity: 0, x: "-100%", maxHeight: 0 }} exit={{maxHeight: 0,opacity: 0, transition:{duration:0.2}}}
            animate={{ opacity: 1, x: 0, maxHeight: '500px', transition:{duration:0.5}}}
            className="principle-1 p-5 pr-7 text-left bg-[#e8e8e8] rounded-3xl mt-3 w-[90%] mx-auto"
          >
            <ul className="flex flex-col gap-y-1">
              <li>
                To Combine luxury and affordability for the average Nigerian.
              </li>
              <li>Enable fast and time-bound project delivery.</li>
              <li>
                To become a multinational real estate group and solve trending and existing real estate issues
                across Africa.
              </li>
            </ul>
          </motion.p>
        )}
        </AnimatePresence>
      </div>

      <div className="w-full mt-7">
        <h3
          className={`w-full text-center text-lg ${activeIndex === 2? 'font-bold text-grade-3':'font-medium text-grade-2'}`}
          onClick={() => {
            handleActiveIndex(2);
          }}
        >
          • VALUES
        </h3>
        <AnimatePresence>
        {activeIndex === 2 && (
          <motion.p
            initial={{ opacity: 0, x: "-100%", maxHeight: 0 }} exit={{maxHeight: 0, opacity: 0, transition:{duration:0.2}}}
            animate={{ opacity: 1, x: 0, maxHeight: '500px', transition:{duration:0.5}}}
            className="principle-2 p-5 pr-7 text-left bg-[#e8e8e8] rounded-3xl mt-3 w-[90%] mx-auto"
          >
            <ul className="flex flex-col">
              <li>Excellence</li>
              <li>Quality</li>
              <li>Tranquility</li>
              <li>Impeccability</li>
              <li>Integrity</li>
            </ul>
          </motion.p>
        )}
        </AnimatePresence>
      </div>
      
    </>
  );
};

export default Slider;
