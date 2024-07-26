"use client"
import { projectsData } from "@/utils/dummyData";
import { FC, useEffect, useState } from "react";
import P1 from "../../../assets/rasters/hamuj1.jpg"
import Image from "next/image";

interface ProjectProps {
    params: {projectId: string}
}
 
const Project: FC<ProjectProps> = ({params}) => {
    const [projectDetails, setProjectDetails] = useState<any>({title: '---', image1: P1})

    useEffect(()=>{
        projectsData.forEach((project, index)=>{
            if(params.projectId == project.route){
                setProjectDetails(project)
            }
        })
    }, [])
    
    return ( 
        <section className="w-full pt-14 lg:pt-28 h-auto min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_2fr] bg-slate-50">
            <div className="w-full h-auto min-h-[300px] pl-5 pt-5">
                {projectDetails.title}
            </div>
            
            <div className="w-full max-h-fit grid px-5 grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(auto-fit,minmax(0px,min-content))] gap-5">
                <div className="w-full aspect-square bg-red-400">
                    <Image src={projectDetails.image1} alt={projectDetails.title}
                    className="w-full h-full object-cover"/>
                </div>
                <div className="w-full aspect-square">
                    <Image src={projectDetails.image1} alt={projectDetails.title}
                    className="w-full h-full object-cover"/>
                </div>
                <div className="w-full aspect-square">
                    <Image src={projectDetails.image1} alt={projectDetails.title}
                    className="w-full h-full object-cover"/>
                </div>
                <div className="w-full aspect-square">
                    <Image src={projectDetails.image1} alt={projectDetails.title}
                    className="w-full h-full object-cover"/>
                </div>
                <div className="w-full aspect-square">
                    <Image src={projectDetails.image1} alt={projectDetails.title}
                    className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
     );
}
 
export default Project;