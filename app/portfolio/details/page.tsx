"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { client, urlFor } from "../../../sanityClient";
import { dehyphenate } from "@/utils/hyphenationForRoutes";
import ImagePreloader from "@/components/imagePreloader";
import { AnimatePresence } from "framer-motion";
import ImageViewer from "@/components/imageViewer";
import ExpandIcon from "@/assets/vectors/Expand";
// import { useSearchParams } from "next/navigation";

interface ProjectDetails {
  title: string;
  client: string;
  area: string;
  state: string;
  completionDate: string;
  highlight: boolean;
  description: string;
  images: {
    _key: string;
    asset: {_ref: string};
    alt: string;
  }[];
}

const Project  = () => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>();
  const [loadedImgs, setLoaderImgs] = useState<number>(0);
  const [viewerIsActive, setViewerIsActive] = useState(false);
  const [viewerData, setViewerData] = useState({
    images: projectDetails?.images,
    initialImgIndex: 0,
  });

  useEffect(() => {
    if(typeof window !== "undefined"){
      const urlParams = new URLSearchParams(window.location.search)
        const params = urlParams.get('id')
        if(params){
          hydratePage(params)
        }
    }
  }, []);

  function hydratePage(projectId : string){
    const projectsInMemory = sessionStorage.getItem("projects");
      if (projectsInMemory) {
        const projectsData = JSON.parse(projectsInMemory);
        projectsData.forEach((project: any) => {
          if (project.title === dehyphenate(projectId)) {
            setProjectDetails(project);
          }
        });
      } else {
        const fetchProjects = async () => {
          const query = '*[_type == "projects"]';
          const data = await client.fetch(query);
          sessionStorage.setItem("projects", JSON.stringify(data));
          data.forEach((project: any) => {
            if (project.title === dehyphenate(projectId)) {
              setProjectDetails(project);
            }
          });
        };
        fetchProjects();
      }
  }

  function handleImageViewing(index: number) {
    setViewerData({ images: projectDetails?.images, initialImgIndex: index });
    setViewerIsActive(true);
  }

  return (
    <main className="w-full h-auto min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_2fr] bg-slate-50">
      <h1 className="relative text-2xl w-fit lg:text-heading pl-5 mt-20 pb-3 lg:mt-28 lg:col-span-2 font-medium text-grade-3">
        {projectDetails?.title}
      </h1>
      <div
        className="w-full h-auto lg:h-[calc(100vh-164px)] overflow-scroll mt-2 pl-5 pt-2 lg:pt-10 pb-16 text-grade-3
      flex flex-col gap-y-16"
      >
        {projectDetails?.client && (
          <div className="relative pr-10 border-l-[2px] border-[#f49d02] py-3 pl-3">
            <span className="font-medium text-sm lg:text:base text-grade-2">
              Client:
            </span>{" "}
            <br />
            <span className="text-lg lg:text-xl font-medium">
              {projectDetails?.client}
            </span>
          </div>
        )}

        {(projectDetails?.state) && (<div className="relative pr-10 border-l-[2px] border-[#f49d02] py-3 pl-3">
          <span className="font-medium text-sm lg:text:base text-grade-2">
            Location:
          </span>{" "}
          <br />
          <span className="text-lg lg:text-xl font-medium">
            {projectDetails.area? `${projectDetails.area}, ${projectDetails.state}` : projectDetails.state}
          </span>
        </div>)}

        {projectDetails?.completionDate && (
          <div className="relative pr-10 border-l-[2px] border-[#f49d02] py-3 pl-3">
            <span className="font-medium text-sm lg:text:base text-grade-2">
              Completion Date:
            </span>{" "}
            <br />
            <span className="text-lg lg:text-xl font-medium">
              {projectDetails?.completionDate}
            </span>
          </div>
        )}

        {projectDetails?.description && (
          <div className="relative pr-10 border-l-[2px] border-[#f49d02] py-3 pl-3">
            <span className="font-medium text-sm lg:text:base text-grade-2">
              Details:
            </span>{" "}
            <br />
            <span className="text-lg lg:text-xl font-medium">
              {projectDetails?.description}
            </span>
          </div>
        )}
      </div>

      <div className="w-full h-auto lg:h-[calc(100vh-164px)] overflow-scroll mt-2 grid px-5 pb-14 grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(auto-fit,minmax(0px,min-content))] gap-5">
        {projectDetails?.images.map((image, index, imagesArr) => {
          return (
            <div
              key={index}
              className="relative group w-full cursor-pointer aspect-square overflow-hidden"
            >
              <Image
                src={urlFor(image.asset).url()}
                alt={image.alt}
                fill
                sizes="(max-width: 1023px) 50vw, (min-width: 1024px) 20vw"
                onLoad={() => {
                  setLoaderImgs((prev) => prev + 1);
                }}
                onClick={() => {
                  handleImageViewing(index);
                }}
                className={`object-cover lg:group-hover:scale-[1.1] z-10 ${loadedImgs === imagesArr.length ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "transform 0.2s, opacity 1s" }}
              />
              <div className="bg-[#0000000c] z-20 rounded-sm absolute right-2 bottom-2 lg:right-3 lg:bottom-3 scale-[1.2] lg:scale-[1.5]">
                <ExpandIcon />
              </div>
              <AnimatePresence>
                {!(loadedImgs === imagesArr.length) && <ImagePreloader />}
              </AnimatePresence>

            </div>
          );
        })}
      </div>
      {viewerIsActive && (
        <ImageViewer
          initialImage={viewerData.initialImgIndex}
          images={viewerData.images!}
          setViewerIsActive={setViewerIsActive}
        />
      )}
    </main>
  );
};

export default Project;
