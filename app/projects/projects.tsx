"use client";
import Image from "next/image";
import Filter from "../../assets/vectors/filter.svg";
import Arrow from "../../assets/vectors/lineArrow.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { client, urlFor } from '../../sanityClient'
import { hyphenate } from "@/utils/hyphenationForRoutes";


interface ProjectsDataProps {
  title: string,
  client: string,
  location: string,
  description: string,
  images: {
    _key: string
    asset: {
      _ref: string
    }
    alt: string
  }[]
}

const Projects = () => {
  const router = useRouter();
  const [projectsData, setProjectsData] = useState<ProjectsDataProps[]>([])

  useEffect(()=>{
    // Client-side functionality
    if (typeof window !== "undefined") {
      const projectsInMemory = sessionStorage.getItem("projects");
      if (projectsInMemory) {
        setProjectsData(JSON.parse(projectsInMemory));
      } else {
        const fetchProjects = async () => {
          const query = '*[_type == "projects"]';
          const data = await client.fetch(query);
          alert('fetching was done')
          setProjectsData(data);
          sessionStorage.setItem('projects',JSON.stringify(data))
          // setLoading(false);
        };
        fetchProjects();
      }
    }
  }, [])

  return (
    <section className="w-full py-top-spacing-s lg:py-top-spacing px-7 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14">
      <div className="lg:col-span-3">
        <button className="relative flex gap-x-2 items-center">
          <Image src={Filter} alt="filter" />
          <span className="text-sm lg:text-base">Filters</span>
          <span className="absolute left-0 top-[110%] w-[150%] h-[2px] rounded-full bg-theme-2"></span>
        </button>
      </div>

      {projectsData.map((project, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              router.push(`projects/${hyphenate(project.title)}`);
            }}
            title={project.title}
            className={`w-full h-[300px] group flex-shrink-0 relative overflow-hidden shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[20px_20px_0px_2px_#0000001A] duration-300 cursor-pointer`}
          >
            <Image
              src={urlFor(project.images[0].asset).url()}
              alt={project.images[0].alt}
              layout="fill"
              className={`object-cover group-hover:scale-[1.1] duration-500`}
            />
            <div
              className={`text-white bg-gradient-to-t from-[#080808a8] to-[#08080800] h-1/3 absolute bottom-0 px-5 w-full flex flex-col gap-y-3 justify-center
                `}
            >
              <span className="font-bold text-base lg:text-lg truncate max-w-[90%]">
                {project.title}
              </span>
              <span className="text-xs md:text-base truncate max-w-[90%]">
                {project.location}
              </span>
              <Image
                src={Arrow}
                alt="arrow icon"
                className="absolute top-1/2 -translate-y-1/2 right-5 w-7 md:w-10 scale-[0.7]"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
