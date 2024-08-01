"use client";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import RightArrow from "../assets/vectors/lineArrow.svg";
import RightArrowBlk from "../assets/vectors/lineArrow-gold.svg";
import AngledArrow from "../assets/vectors/acuteArrow.svg";
import { client, urlFor } from "../sanityClient";
import { hyphenate } from "@/utils/hyphenationForRoutes";
import TransitionLink from "./pageTransitions/transitionLink";

interface HighlightsProps {
  title: string;
  client: string;
  location: string;
  highlight: boolean;
  description: string;
  images: {
    _key: string;
    asset: {
      _ref: string;
    };
    alt: string;
  }[];
}

const Highlights: FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [activeProject, setActiveProjet] = useState<number>(0);
  const [clickPermit, setClickPermit] = useState<boolean>(true);
  const [highlights, setHighlights] = useState<HighlightsProps[]>([]);
  const [loaded, setLoaded] = useState(false)
  const left = useRef<HTMLButtonElement>(null);
  const right = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Client-side functionality
    if (typeof window !== "undefined") {
      setScreenWidth(innerWidth);
      const projectsInMemory = sessionStorage.getItem("projects");
      if (projectsInMemory) {
        const data = JSON.parse(projectsInMemory);
        let newArr: any = [];
        data.forEach((project: any) => {
          if (project.highlight == true) {
            newArr.push(project);
          }
        });
        setHighlights(newArr);
      } else {
        const fetchProjects = async () => {
          const query = '*[_type == "projects"]';
          const data = await client.fetch(query);
          sessionStorage.setItem("projects", JSON.stringify(data));
          let newArr: any = [];
          data.forEach((project: any) => {
            if (project.highlight == true) {
              newArr.push(project);
            }
          });
          setHighlights(newArr);
          // setLoading(false);
        };
        fetchProjects();
      }
    }
  }, []);

  function handleScrolling(index: number) {
    // Click permit limits the number of times the user can click in rapid succession
    if (clickPermit) {
      if (index < 0) index = 0;
      if (index >= highlights.length + 1) index = highlights.length;
      setActiveProjet(index);

      setTimeout(() => {
        let target: HTMLDivElement = document.querySelector(
          `.project-highlight-${index}`
        )!;

        if (target) {
          screenWidth >= 1024
            ? target.scrollIntoView({ inline: "center", block: "nearest"})
            : target.scrollIntoView({ block: "center", inline: "nearest" });
        }

        setTimeout(() => {
          setClickPermit(true);
        }, 500);
      }, 550);
    }

    setClickPermit(false);
  }

  return (
    <div className="relative">
      <button
        ref={left}
        className="absolute hidden md:block cursor-pointer top-1/2 -translate-y-1/2 left-0 z-10 p-3 bg-[#00000080] hover:scale-105"
        onClick={() => {
          handleScrolling(activeProject - 1);
        }}
      >
        <Image src={AngledArrow} alt="arrow" className="scale-50" />
      </button>
      <button
        ref={right}
        className="absolute hidden md:block cursor-pointer top-1/2 -translate-y-1/2 right-0 z-10 rotate-180 p-3 bg-[#00000080] hover:scale-105"
        onClick={() => {
          handleScrolling(activeProject + 1);
        }}
      >
        <Image src={AngledArrow} alt="arrow" className="scale-50" />
      </button>

      <div className="relative project-highlight-parent mt-0 md:mt-10 w-full max-w-[1400px] m-auto overflow-scroll snap-x snap-mandatory flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 gap-x-10 h-auto md:h-[400px]">
        {highlights.map((project, index) => {
          if (screenWidth < 768 && index > 2) {
            return null;
          }
          if (index > 4) return null;
          return (
            <div
              key={index}
              onClick={() => {
                handleScrolling(index);
              }}
              className={`project-highlight-${index} group snap-center flex-shrink-0 relative highlight overflow-hidden
            ${index === activeProject ? "w-[90%] md:w-[600px] h-[300px] md:h-[350px]" : "w-[80%] md:w-[30%] h-[250px] md:h-[300px] cursor-pointer"} md:first:ml-[50vw] shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[20px_20px_0px_2px_#0000001A]`}
              style={{ transition: "width 0.5s, height 0.5s, margin 0.5s" }}
            >
              <Image
                src={urlFor(project.images[0].asset).url()}
                alt={project.images[0].alt}
                layout="fill"
                onLoad={()=>{setLoaded(true)}}
                className={`object-cover`}
              />
              <div
                className={`details delay-500 duration-500 text-white bg-gradient-to-t from-[#080808a8] to-[#08080800]  opacity-0 h-1/3 absolute bottom-0 px-5 w-full flex flex-col gap-y-3 justify-center
                ${index === activeProject ? "translate-y-0 opacity-100" : "translate-y-1/2"}`}
              >
                <span className="font-bold text-lg lg:text-xl truncate max-w-[70%]">
                  {project.title}
                </span>
                <span className="text-xs md:text-base">{project.location}</span>
                <TransitionLink
                  href={`projects/${hyphenate(project.title)}`}
                  styles={`absolute flex gap-x-2 items-center top-1/2 -translate-y-1/2 right-5 cursor-pointer text-xs md:text-base ${index === activeProject ? "block" : "hidden"}`}
                >
                  Details
                  <Image
                    src={RightArrow}
                    alt="arrow icon"
                    className="w-7 md:w-10"
                  />
                </TransitionLink>
              </div>
            </div>
          );
        })}

        {loaded && (<div
          className={`project-highlight-${highlights.length} snap-start mr-0 md:ml-[5vw] md:mr-[50vw] w-[20vw] flex-shrink-0 py-2`}
        >
          <TransitionLink
            href={"/projects"}
            styles={`flex items-center justify-center md:gap-x-2 text-center underline md:no-underline underline-offset-[5px] decoration-[#F49D02] decoration-[2px] group text-sm md:text-base`}
          >
            {screenWidth >= 1024 ? "Go to Projects" : "View More"}
            <Image
              src={RightArrowBlk}
              alt="arrow"
              className="hidden md:block scale-75 group-hover:scale-[1]"
            />
          </TransitionLink>
        </div>)}
      </div>
    </div>
  );
};

export default Highlights;
