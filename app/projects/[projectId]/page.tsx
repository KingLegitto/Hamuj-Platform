"use client";
import { projectsData } from "@/utils/dummyData";
import { FC, useEffect, useState } from "react";
import P1 from "../../../assets/rasters/hamuj1.jpg";
import Image from "next/image";
import { client, urlFor } from "../../../sanityClient";
import { dehyphenate } from "@/utils/hyphenationForRoutes";

interface ProjectProps {
  params: { projectId: string };
}

interface ProjectDetails {
  title: string;
  client: string;
  location: string;
  description: string;
  images: {
    _key: string;
    asset: {
      _ref: string;
    };
    alt: string;
  }[];
}

const Project: FC<ProjectProps> = ({ params }) => {
  const { projectId } = params;
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>();

  useEffect(() => {
    // Client-side functionality
    if (typeof window !== "undefined") {
        const projectsInMemory = sessionStorage.getItem("projects");
        if (projectsInMemory) {
            const projectsData = JSON.parse(projectsInMemory)
            projectsData.forEach((project:any)=>{
                if(project.title === dehyphenate(projectId)){
                    setProjectDetails(project)
                }
            })
        } else {
            const fetchProjects = async () => {
                const query = '*[_type == "projects"]';
                const data = await client.fetch(query);
                alert('fetching was done')
                sessionStorage.setItem('projects',JSON.stringify(data))
                data.forEach((project:any)=>{
                    if(project.title === dehyphenate(projectId)){
                        setProjectDetails(project)
                    }
                })
                // setLoading(false);
              };
              fetchProjects();
        }
      }
    const fetchProjects = async () => {
      const projectTitle = dehyphenate(projectId);
      const query = `*[_type == "projects" && title == $projectTitle]`;
      const params = { projectTitle: projectTitle };
      const data = await client.fetch(query, params);
      setProjectDetails(data[0]);
    };

    fetchProjects();
  }, []);

  return (
    <section className="w-full h-auto min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_2fr] bg-slate-50">
      <div className="w-full h-auto lg:h-screen overflow-scroll pl-5 pt-20 lg:pt-28 border-r-[10px] border-[#E8E8E8]
      flex flex-col gap-y-16">
        <span className="relative text-2xl lg:text-heading font-medium text-grade-3 w-full">
            {projectDetails?.title}
            <div className="absolute top-[125%] left-0 rounded-full bg-theme-2 w-[90%] h-[2px]" />
        </span>
        
        <div className="relative pr-10 border-l-[2px] border-[#8c8c8c] py-3 pl-3">
            <span className="font-medium text-grade-1 text-sm lg:text:base">Client:</span> <br />
            <span className="text-lg lg:text-xl font-normal">{projectDetails?.client}</span>
        </div>
        
        <div className="relative pr-10 border-l-[2px] border-[#8c8c8c] py-3 pl-3">
            <span className="font-medium text-grade-1 text-sm lg:text:base">Location:</span> <br />
            <span className="text-lg lg:text-xl font-normal">{projectDetails?.location}</span>
        </div>

        <div className="relative pr-10 border-l-[2px] border-[#8c8c8c] py-3 pl-3">
            <span className="font-medium text-grade-1 text-sm lg:text:base">Details:</span> <br />
            <span className="text-lg lg:text-xl font-normal">{projectDetails?.description}</span>
        </div>
        
      </div>

      <div className="w-full h-auto lg:h-screen overflow-scroll grid px-5 pt-14 lg:pt-28 pb-14 grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(auto-fit,minmax(0px,min-content))] gap-5">
        {projectDetails?.images.map((image) => {
          return (
            <div className="relative group w-full cursor-pointer aspect-square overflow-hidden bg-blue-400">
              <Image
                src={urlFor(image.asset).url()}
                alt={image.alt}
                layout="fill"
                className="object-cover group-hover:scale-[1.1] duration-200"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
