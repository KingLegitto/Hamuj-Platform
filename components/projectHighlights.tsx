"use client"
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import RightArrow from "../assets/vectors/lineArrow.svg"

interface HighlightsProps {
  projectData: { image: any; title: string; location: string }[];
}

let screenWidth = 0

const Highlights: FC<HighlightsProps> = ({ projectData }) => {
  const [activeProject, setActiveProjet] = useState<number>(-1)
  const parent = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(typeof window !== 'undefined'){
      screenWidth = window.innerWidth
    }

    setTimeout(() => {
      let target:HTMLDivElement | null = document.querySelector(`.project-highlight-${activeProject}`)
      if(target){
        let scrollValue = target.offsetLeft - (window.innerWidth>=768? 300: 100)
          parent.current?.scrollTo({left: scrollValue})
      }
    }, 550);
    
  }, [activeProject])
  return (
    <div ref={parent} className="project-highlight-parent mt-0 md:mt-10 w-full max-w-[1400px] m-auto overflow-scroll snap-x snap-mandatory flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 gap-x-10 h-auto md:h-[400px]">
      {projectData.map((project, index) => {
        if(screenWidth < 768 && index > 2){
          return null
        }
        return (
          <div key={index} onClick={()=>{setActiveProjet(index)}} title={project.title}
          className={`project-highlight-${index} group snap-center flex-shrink-0 relative highlight overflow-hidden
          ${index === activeProject? 'w-[90%] md:w-[600px] h-[300px] md:h-[350px] rounded-xl':'w-[80%] md:w-[30%] h-[250px] md:h-[300px] rounded-md cursor-pointer'} ${activeProject === 0? 'first:!ml-[50vw]':''} shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[20px_20px_0px_2px_#0000001A]`}
          style={{transition: 'width 0.5s, height 0.5s, margin 0.5s'}}>
            <Image
              src={project.image}
              alt={project.title}
              className={`h-full w-full object-cover`}
            />
            <div className={`details delay-500 duration-500 text-white bg-gradient-to-t from-[#080808a8] to-[#08080800]  opacity-0 h-1/3 absolute bottom-0 px-5 w-full flex flex-col gap-y-3 justify-center
              ${index === activeProject? 'translate-y-0 opacity-100':'translate-y-1/2'}`}>
                <span className="font-bold text-lg lg:text-xl truncate max-w-[70%]">{project.title}</span>
                <span className="text-xs md:text-base">{project.location}</span>
                <span className={`absolute flex gap-x-2 items-center top-1/2 -translate-y-1/2 right-5 cursor-pointer text-xs md:text-base ${index === activeProject? 'block':'hidden'}`}>
                  Details
                <Image src={RightArrow} alt="arrow icon" className="w-7 md:w-10"/>
                </span>
            </div>
          </div>
        );
      })}
      
      <Link href={"/projects"} className=" snap-start mr-0 md:mr-[40vw] text-center md:text-left underline underline-offset-[5px] decoration-[#F49D02] decoration-[3px]">{window.innerWidth>=1024? 'Go to Projects':'View More'}</Link>
    </div>
  );
};

export default Highlights;
