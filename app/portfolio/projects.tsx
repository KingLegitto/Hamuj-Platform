"use client";
import Image from "next/image";
import Arrow from "../../assets/vectors/lineArrow.svg";
// import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { hyphenate } from "@/utils/hyphenationForRoutes";
import TransitionLink from "@/components/pageTransitions/transitionLink";

interface ProjectsDataProps {
  title: string;
  client: string;
  projectType: string;
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
  const [projectType, setProjectType] = useState<'interiors' | 'construction'>('interiors')
  // const searchParams = useSearchParams()

  useEffect(() => {
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

      const urlParams = new URLSearchParams(window.location.search)
      const params = urlParams.get('type')
      // @ts-ignore
      if(params){setProjectType(params)}

  }, []);

  return (
    <>
    <div className="text-xs md:text-base my-10 lg:my-14">
        <div className="text-center mb-3 uppercase text-grade-2">Project type</div>

        <div className="flex justify-center items-center gap-x-3 text-grade-3">
        <button className={`w-28 lg:w-36 py-1 hover:bg-[#e8e8e8] font-normal rounded-lg lg:rounded-xl border ${projectType==='interiors'? 'bg-[#e8e8e8]': ''}`} onClick={()=>{setProjectType('interiors')}}>Interiors</button>
        <button className={`w-28 lg:w-36 py-1 hover:bg-[#e8e8e8] font-normal rounded-lg lg:rounded-xl border ${projectType==='construction'? 'bg-[#e8e8e8]': ''}`} onClick={()=>{setProjectType('construction')}}>Construction</button>
        </div>
    </div>

    <section className="w-full pb-20 px-7 lg:px-10 overflow-x-hidden grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14">

      {projectsData.map((project, index) => {
        if(project.projectType !== projectType) return
        return (
          <TransitionLink
            key={index}
            href={`portfolio/details?id=${hyphenate(project.title)}`}
            styles={`w-full h-[300px] group flex-shrink-0 relative overflow-hidden rounded-xl shadow-[15px_15px_0px_2px_#0000001A] lg:shadow-[17px_17px_0px_2px_#0000001A] duration-300 cursor-pointer bg-[#505050]`}
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
    </>
  );
};

export default Projects;
