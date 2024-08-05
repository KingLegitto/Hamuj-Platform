import { projectDetails } from "./questions";
import { motion } from "framer-motion";

const Project = () => {
    return ( 
        <motion.section initial={{opacity: 0, x: '-50%'}} animate={{opacity: 1, x: 0, transition:{duration: 0.3, delay: 0.1}}} className="w-full max-failsafe pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-lg md:text-2xl text-grade-3 pl-5 md:pl-20">
          <span className="relative font-bold">
            PROJECT DETAILS
            <div className="h-[2px] w-[120%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>

        <div className="mt-10 px-9 lg:px-24 text-sm lg:text-base">
          {projectDetails.map((question) => {
            return (
              <div className="flex flex-col gap-y-2 mb-6 last:mb-0">
                <span className="font-normal">{question.title}</span>

                {/* If there are no options */}
                {!question.options ? (
                  <input
                    type={question.type}
                    className="p-3 border focus:outline-none w-full lg:w-[70%]"
                  />
                ) : (
                  // If there are options
                  <div className="flex flex-col gap-y-5 mt-2">
                    {question.options?.map((option, optionIndex) => {
                      return (
                        <div className="flex gap-x-3 w-fit cursor-pointer pl-3">
                          <input type={question.type} className="w-5 cursor-pointer" id={`${question.title}-${optionIndex}`} name={question.title}/>
                          <label htmlFor={`${question.title}-${optionIndex}`} className="cursor-pointer">{option}</label>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.section>
     );
}
 
export default Project;