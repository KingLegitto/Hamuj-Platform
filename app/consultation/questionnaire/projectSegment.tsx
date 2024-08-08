import { FC, useEffect, useState } from "react";
import { projectDetails } from "./questions";
import { motion } from "framer-motion";

interface ProjectSegmentProps {
  Questions: {
    title: string;
    type: "text" | "checkbox" | "radio" | "textbox" | "email";
    options?: string[];
    required?: false;
    followUpTriggers?: number[];
    followUpTo?: string;
    hidden?: boolean;
  }[];

  setQuestions: (questions: any) => void;

  storeResponse: (
    segment: string,
    segmentQuestions: {
      title: string;
      type: "text" | "checkbox" | "radio" | "textbox" | "email";
      options?: string[];
      required?: false;
      followUpTriggers?: number[];
      followUpTo?: string;
      hidden?: boolean;
    }[],
    doNotValidate?: boolean
  ) => void;

  checkForStoredResponse: (
    segment: any,
  ) => any;
}

const ProjectSegment: FC<ProjectSegmentProps> = ({
  Questions,
  setQuestions,
  storeResponse,
  checkForStoredResponse,
}) => {

  useEffect(()=>{
    checkForStoredResponse('projectResponses')
    let scrollAnchor: HTMLHeadingElement = document.querySelector('.heading')!
    scrollAnchor.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'instant'})
  }, [])

  // LOGIC TO HANDLE DISPLAY OF FOLLOWUP QUESTIONS
  function followUpLogic(
    optionElement: HTMLInputElement,
    triggersArr: number[],
    optionIndex: number,
    parentTitle: string,
    type: string
  ) {
    let isIncluded = triggersArr.find((item) => item === optionIndex); //Check if option is a followUp question trigger

    if (isIncluded && optionElement.checked) {
      // If option is a followUp question trigger and it is checked...
      let newArr = Questions.map((question) => {
        if (question.followUpTo === parentTitle) {
          // Get the followUp questions for this question and UNHIDE them
          return { ...question, hidden: false };
        }
        return question;
      });

      setQuestions(newArr);
    } else if (isIncluded && !optionElement.checked) {
      // If option is a followUp question trigger and is unchecked...
      let newArr = Questions.map((question) => {
        if (question.followUpTo === parentTitle) {
          // Get the followUp questions for this question and hide them
          return { ...question, hidden: true };
        }
        return question;
      });

      setQuestions(newArr);
    } else if (type === "radio") {
      // If selected option is not a followUp question trigger (Only for radios)
      let newArr = Questions.map((question) => {
        if (question.followUpTo === parentTitle) {
          // Get the followUp questions for this question and hide them
          return { ...question, hidden: true };
        }
        return question;
      });

      setQuestions(newArr);
    }
  }

  return (
    <motion.form
      onSubmit={(e) => (
        e.preventDefault(), storeResponse("project", Questions)
      )}
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } }}
      className="w-full max-failsafe pt-top-spacing-s md:pt-top-spacing not-selectable"
    >
      <button
        type="button"
          onClick={() => {
            storeResponse("project", Questions, true); 
          }}
          className="w-20 lg:w-24 p-2 rounded-full mb-10 lg:mb-16 ml-5 md:ml-20 text-center text-sm lg:text-base shadow-lg bg-white border hover:text-blue-400 hover:border-blue-400"
        >
          Back
        </button>

      <h2 className="heading text-lg md:text-2xl text-grade-3 pl-5 md:pl-20">
        <span className="relative font-bold">
          PROJECT DETAILS
          <div className="h-[2px] w-[120%] absolute bg-theme-2 -bottom-3 left-0" />
        </span>
      </h2>

      {/* QUESTIONS RENDER LOGIC*/}
      <div className="mt-10 px-9 lg:px-24 text-sm lg:text-base">
        {Questions.map((question, questionIndex) => {
           if(question.hidden) return // FollowUp questions are initially hidden and hidden questions are not rendered
           else
           return (
              /* FollowUp questions are initially hidden and hidden questions are not rendered */
                <motion.div
                  key={questionIndex}
                  initial={question.followUpTo ? { x: "-50%", opacity: 0 } : {}}
                  animate={
                    question.followUpTo
                      ? { x: 0, opacity: 1, transition: { duration: 0.5 } }
                      : {}
                  }
                  className={`flex flex-col gap-y-2 mb-6 last:mb-0 ${question.followUpTo ? "" : "duration-300"}`}
                >
                  <span className={`question${questionIndex}${question.title.replaceAll(/[^\w\d]/g, "")} font-normal`}>{question.title}</span>

                  {/* If there are no options */}
                  {!question.options ? (
                    <>
                    {question.type === 'text'? (<input
                      type={question.type}
                      className={` ${question.title.replaceAll(/[\s\W]/g, "-")}-0 p-3 border focus:outline-none w-full lg:w-[70%]`}
                    />) : (<textarea rows={3} className={` ${question.title.replaceAll(/[\s\W]/g, "-")}-0 p-3 border focus:outline-none w-full lg:w-[70%]`}></textarea>)}
                    </>
                  ) : (
                    // If there are options
                    <div className="flex flex-col flex-wrap max-h-[75vh] gap-y-5 mt-2">
                      {question.options?.map((option, optionIndex) => {
                        return (
                          <div
                            key={`${question.title}-${optionIndex}`}
                            className={`flex w-fit cursor-pointer pl-3`}
                          >
                            <input
                              type={question.type}
                              className={`${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex} w-5 cursor-pointer`}
                              id={`${question.title}-${optionIndex}`}
                              name={question.title}
                              onChange={
                                question.followUpTriggers
                                  ? (e) => {
                                      followUpLogic(
                                        e.target,
                                        question.followUpTriggers!,
                                        optionIndex,
                                        question.title,
                                        question.type
                                      );
                                    }
                                  : () => {
                                      /* Do nothing */
                                    }
                              }
                            />
                            <label
                              htmlFor={`${question.title}-${optionIndex}`}
                              className="cursor-pointer pl-3"
                            >
                              {option}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
        className="my-10 lg:my-16 lg:ml-24 flex justify-center lg:justify-start gap-x-3"
      >
        <button
        type="button"
          onClick={(e) => {
            storeResponse("project", Questions, true); 
          }}
          className="w-20 lg:w-24 p-2 rounded-full text-center text-sm lg:text-base shadow-lg bg-white border hover:text-blue-400 hover:border-blue-400"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-20 lg:w-24 p-2 rounded-full text-center text-sm lg:text-base shadow-lg bg-white border hover:text-blue-400 hover:border-blue-400"
        >
          Proceed
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ProjectSegment;
