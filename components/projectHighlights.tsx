import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HighlightsProps {
  projectData: { image: any; title: string; location: string }[];
}

const Highlights: FC<HighlightsProps> = ({ projectData }) => {
  return (
    <div className="mt-10 w-full max-w-[1400px] m-auto overflow-x-scroll snap-x snap-mandatory flex px-10 items-center gap-x-10 h-[400px]">
      {projectData.map((project, index) => {
        return (
          <div key={index} className="group snap-start flex-shrink-0 relative highlight h-[300px] overflow-hidden w-[30%] hover:w-[600px] hover:h-[350px] duration-500 rounded-md hover:rounded-xl shadow-[20px_20px_0px_2px_#0000001A] delay-0 hover:delay-500">
            <Image
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover group-hover:brightness-50 duration-700 delay-300"
            />
            <div className="details delay-500 duration-500 text-white group-hover:translate-y-0 group-hover:opacity-[1] translate-y-1/2 opacity-0 h-1/2 absolute bottom-0 px-5 w-full flex flex-col gap-y-3 justify-center">
                <span className="font-bold text-xl">{project.title}</span>
                <span>{project.location}</span>
            </div>
          </div>
        );
      })}
      
      {/* <Link href={"/projects"}>Go to Projects</Link> */}
    </div>
  );
};

export default Highlights;
