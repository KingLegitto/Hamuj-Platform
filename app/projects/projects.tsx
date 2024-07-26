"use client"
import Image from "next/image";
import Filter from "../../assets/vectors/filter.svg";
import Arrow from "../../assets/vectors/lineArrow.svg";
import { projectsData } from "@/utils/dummyData";
import { useRouter } from "next/navigation";

const Projects = () => {
    const router = useRouter()
  return (
    <section className="w-full py-top-spacing-s lg:py-top-spacing px-7 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14">
      <div className="lg:col-span-3">
        <button className="relative flex gap-x-2 items-center">
            <Image src={Filter} alt="filter" />
            <span>Filters</span>
            <span className="absolute left-0 top-[110%] w-[150%] h-[2px] rounded-full bg-theme-2"></span>
        </button>
        
      </div>
        
      {projectsData.map((project, index)=>{
        return(
            <div key={index} onClick={()=>{router.push(`projects/${project.route}`)}} title={project.title}
            className={`w-full h-[300px] group flex-shrink-0 relative overflow-hidden shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[20px_20px_0px_2px_#0000001A] duration-300 cursor-pointer`}>
              <Image
                src={project.image1}
                alt={project.title}
                className={`h-full w-full object-cover group-hover:scale-[1.1] duration-500`}
              />
              <div className={`text-white bg-gradient-to-t from-[#080808a8] to-[#08080800] h-1/3 absolute bottom-0 px-5 w-full flex flex-col gap-y-3 justify-center
                `}>
                  <span className="font-bold text-base lg:text-lg truncate max-w-[90%]">{project.title}</span>
                  <span className="text-xs md:text-base truncate max-w-[90%]">{project.description}</span>
                  <Image src={Arrow} alt="arrow icon" className="absolute top-1/2 -translate-y-1/2 right-5 w-7 md:w-10 scale-[0.7]"/>
              </div>
            </div>
        )
      })}
    </section>
  );
};

export default Projects;
