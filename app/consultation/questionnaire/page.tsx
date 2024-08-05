"use client"
import Image from "next/image";
import Hero from "../../../assets/rasters/hamuj1-2.jpg";
import Personal from "./personalPage";
import { useState } from "react";
import Project from "./projectPage";
import { AnimatePresence, motion } from "framer-motion";

const Questionnaire = () => {
    const [page, setPage] = useState(0)
  return (
    <main className="relative w-full h-auto bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            QUESTIONNAIRE
          </span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">
            Please fill the form below
          </span>
        </h1>
      </section>

        {page===0? <Personal />: <Project />}

        {page===0 && (
            <motion.button initial={{opacity: 0}} animate={{opacity: 1, transition:{duration:0.5, delay:1}}} onClick={()=>{setPage(1)}} 
            className="relative left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0 lg:ml-24 my-10 lg:my-16 w-20 lg:w-28 p-2 rounded-full text-center text-sm lg:text-base shadow-lg bg-white border hover:text-blue-400 hover:font-medium hover:border-blue-400">
            Next
            </motion.button>)}

        {page===1 && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{duration:0.5, delay:1}}} className="my-10 lg:my-16 lg:ml-24 flex justify-center lg:justify-start gap-x-3">
                <button onClick={()=>{setPage(0)}} className="w-20 lg:w-24 p-2 rounded-full text-center text-sm lg:text-base shadow-lg bg-white border hover:text-blue-400 hover:font-medium hover:border-blue-400">Back</button>
                <button onClick={()=>{}} className="w-20 lg:w-24 p-2 rounded-full text-center text-sm lg:text-base shadow-lg bg-white border hover:text-blue-400 hover:font-medium hover:border-blue-400">Proceed</button>
            </motion.div>
        )}
      
    </main>
  );
};

export default Questionnaire;
