"use client";
import Image from "next/image";
import Filter from "../../assets/vectors/filter.svg";
import Arrow from "../../assets/vectors/lineArrow.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { hyphenate } from "@/utils/hyphenationForRoutes";
import TransitionLink from "@/components/pageTransitions/transitionLink";

interface ProjectsDataProps {
  title: string;
  client: string;
  area: string;
  state: string;
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

const Projects = () => {
  const [projectsData, setProjectsData] = useState<ProjectsDataProps[]>([]);
  const [filters, setFilters] = useState<string[]>([])
  const [filterBox, setFilterBox] = useState<{isOpen: boolean, filter: string|null}>({isOpen: false, filter: null})

  useEffect(() => {
    // Client-side functionality
    if (typeof window !== "undefined") {
      const projectsInMemory = sessionStorage.getItem("projects");
      if (projectsInMemory) {
        setProjectsData(JSON.parse(projectsInMemory));
      } else {
        const fetchProjects = async () => {
          const query = '*[_type == "projects"]';
          const data = await client.fetch(query);
          setProjectsData(data);
          sessionStorage.setItem("projects", JSON.stringify(data));
          // setLoading(false);
        };
        fetchProjects();
      }
    }
  }, []);

  useEffect(()=>{
    let states: string[] = []
    projectsData.forEach((project)=>(
      states.push(project.state)
    ))
    let filteredStates = states.filter((state,index,arr)=>(index===arr.indexOf(state)))
    setFilters([...filteredStates])
  }, [projectsData])

  return (
    <section className="w-full py-top-spacing-s lg:py-top-spacing px-7 lg:px-10 overflow-x-clip grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14">
      <div className="lg:col-span-3 bg-slate-50 sticky -translate-x-1 top-14 lg:top-16 py-5 z-20 w-[110%]">
        <button className="relative flex gap-x-2 items-center" onClick={()=>{setFilterBox({isOpen: !filterBox.isOpen, filter: filterBox.filter})}}>
          <Image src={Filter} alt="filter" />
          <span className="text-sm lg:text-base">Filters</span>
          <span className="absolute left-0 top-[110%] w-[150%] h-[2px] rounded-full bg-theme-2"></span>
        </button>
        {/* filter Container */}
        {filterBox.isOpen && (<div className="absolute left-0 top-full -translate-y-1 rounded-2xl grid grid-cols-3 
        gap-x-2 gap-y-4 px-5 py-5 min-h-[200px] border border-[#e8e8e8] shadow-lg bg-slate-50 w-[calc(100vw-24px-14px)] lg:w-[350px]">
          <button onClick={()=>{setFilterBox({isOpen: false, filter: null})}}
            className={`w-full rounded-full text-center h-fit py-1 bg-[#e8e8e8] text-xs lg:text-sm
              ${filterBox.filter===null? 'bg-theme-1 text-white font-medium':'text-grade-3'}`}
          >
            All
          </button>
          {filters.map((state) => {
            return (
              <button onClick={()=>{setFilterBox({isOpen: false, filter: state})}}
                className={`w-full rounded-full h-fit text-center py-1 bg-[#e8e8e8] text-xs lg:text-sm text-grade-3
                  ${filterBox.filter===state? 'bg-theme-1 text-white font-medium':'text-grade-3'}`}
              >
                {state}
              </button>
            );
          })}
        </div>)}
      </div>

      {projectsData.map((project, index) => {
        if(filterBox.filter && project.state != filterBox.filter) return
        return (
          <TransitionLink
            key={index}
            href={`projects/${hyphenate(project.title)}`}
            styles={`w-full h-[300px] group flex-shrink-0 relative overflow-hidden shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[20px_20px_0px_2px_#0000001A] duration-300 cursor-pointer bg-[#e8e8e8]`}
          >
            <Image
              src={urlFor(project.images[0].asset).url()}
              alt={project.images[0].alt}
              fill
              sizes="(max-width: 1023px) 95vw, (min-width: 1024px) 33vw"
              className={`object-cover group-hover:lg:scale-[1.1] duration-500`}
            />
            <div
              className={`text-white bg-gradient-to-t from-[#080808a8] to-[#08080800] h-1/3 absolute bottom-0 px-5 w-full flex flex-col gap-y-3 justify-center
                `}
            >
              <span className="font-bold text-base lg:text-lg truncate max-w-[90%]">
                {project.title}
              </span>
              <span className="text-xs md:text-base truncate max-w-[90%]">
                {project.area}, {project.state}
              </span>
              <Image
                src={Arrow}
                alt="arrow icon"
                className="absolute top-1/2 -translate-y-1/2 right-5 w-7 md:w-10 scale-[0.7]"
              />
            </div>
          </TransitionLink>
        );
      })}
    </section>
  );
};

export default Projects;
