"use client";
import Image from "next/image";
import Img1 from "../public/rasters/hamuj6.jpg";
import Img2 from "../public/rasters/hamuj1.jpg";
import Img3 from "../public/rasters/hamuj3.jpg";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const DecorImages = () => {
  const groupImage = useRef(null);
  const groupImageIsInView = useInView(groupImage, {
    margin: "0px 0px -50px 0px",
    once: true,
  });

  const parent = {
    scaleUp: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const children = {
    scaleUp: {
      scale: 1,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={parent}
      animate={groupImageIsInView ? "scaleUp" : ""}
      className="relative h-[280px] lg:h-full w-[300px] lg:w-[540px] drop-shadow-[12px_12px_0px_#E8E8E8] lg:drop-shadow-[15px_20px_0px_#E8E8E8]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        variants={children}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        className={`absolute z-[3] bg-white left-0 bottom-11 lg:bottom-20 xl:bottom-11 overflow-hidden rounded-3xl border-[5px] lg:border-[10px] border-slate-50 w-[180px] lg:w-[250px] xl:w-[330px] aspect-square`}
      >
        <Image
          ref={groupImage}
          src={Img1}
          alt="group image"
          className="h-full w-full object-cover pointer-events-none"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        variants={children}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        className="absolute z-[2] bg-white top-0 right-10 overflow-hidden rounded-3xl border-[5px] lg:border-[10px] border-slate-50 w-[150px] lg:w-[200px] xl:w-[280px] aspect-square"
      >
        <Image
          src={Img2}
          alt="group image"
          className="h-full w-full object-cover pointer-events-none"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        variants={children}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        className="absolute z-[1] bg-white right-0 bottom-0 overflow-hidden rounded-3xl border-[5px] lg:border-[10px] border-slate-50 w-[100px] lg:w-[125px] xl:w-[150px] aspect-square"
      >
        <Image
          src={Img3}
          alt="group image"
          className="h-full w-full object-cover pointer-events-none"
        />
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        variants={children}
        className={`absolute z-[2] bg-white left-0 lg:left-12 top-[40%] lg:top-[45%] -translate-y-1/2 text-center text-xs lg:text-base text-grade-2 rounded-3xl lg:px-3 py-3 lg:py-5 w-[180px] lg:w-fit h-auto font-medium`}
      >
        Designed & Developed by <br /> <span className="text-sm lg:text-base font-bold text-grade-3">King Legitto</span> 
      </motion.div> */}
    </motion.div>
  );
};

export default DecorImages;
