"use client"
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Hero from "../../../../assets/rasters/hamuj1-2.jpg";
import { personalDetails, projectDetails } from "../questions";
import NotFound from "./notFound";
import { fetchResponse } from "@/firebaseConfig";

interface StoredResponse {
  personalResponses: any;
  projectResponses: any;
}

const ViewResponse = () => {
  const [author, setAuthor] = useState<string>();
  const [formData, setFormData] = useState<StoredResponse | null>();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    if(typeof window !== "undefined"){
      const urlParams = new URLSearchParams(window.location.search)
      const params = urlParams.get('response')
      if(params){
        hydratePage(params)
      }
    }
}, []);

  useEffect(() => {
    if (formData) {
      checkForStoredResponse("personalResponses");
      checkForStoredResponse("projectResponses");
    }
  }, [formData]);

  async function hydratePage (responseId: string){
    let result = await fetchResponse(responseId)
      if (result) {
        setAuthor(result.author);
        const dataObj = JSON.parse(result.response);
        setFormData(dataObj);
      } else {
        setNotFound(true);
      }
  }

  function checkForStoredResponse(segment: keyof StoredResponse) {
    if (formData![segment] && segment === "personalResponses") {
      personalDetails.map((question, questionIndex) => {
        if (!question.options) {
          let data =
            formData![segment][`(#${questionIndex})-${question.title}`];
          let value = data ? data[0] : null;
          let inputElement: HTMLInputElement | null = document.querySelector(
            `.personal${question.title.replaceAll(/[\s\W]/g, "-")}-${questionIndex}`
          );
          if (inputElement) inputElement.value = value;
        } else if (question.options) {
          question.options.forEach((option, optionIndex) => {
            let data =
              formData![segment][`(#${questionIndex})-${question.title}`];
            let value = data ? data[optionIndex] : null;
            let inputElement: HTMLInputElement | null = document.querySelector(
              `.personal${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex}`
            );
            if (inputElement) inputElement.checked = value;
          });
        }
      });
    }

    if (formData![segment] && segment === "projectResponses") {
      projectDetails.map((question, questionIndex) => {
        if (!question.options) {
          let data =
            formData![segment][`(#${questionIndex})-${question.title}`];
          let value = data ? data[0] : null;
          let inputElement: HTMLInputElement | null = document.querySelector(
            `.project${question.title.replaceAll(/[\s\W]/g, "-")}-${questionIndex}`
          );
          if (inputElement) inputElement.value = value;
        } else if (question.options) {
          question.options.forEach((option, optionIndex) => {
            let data =
              formData![segment][`(#${questionIndex})-${question.title}`];
            let value = data ? data[optionIndex] : null;
            let inputElement: HTMLInputElement | null = document.querySelector(
              `.project${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex}`
            );
            if (inputElement) inputElement.checked = value;
          });
        }
      });
    }
  }

  return (
    <main className="relative w-full h-auto min-h-lvh bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">REVIEW</span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">
            Questionnaire response for {author ? author : "no one"}
          </span>
        </h1>
      </section>

      {notFound ? (
        <NotFound />
      ) : (
        <section className="mt-12 lg:mt-20">
          <h2 className="text-lg md:text-2xl text-grade-3 pl-5 md:pl-20 mb-7 lg:mb-14">
            <span className="relative font-bold">
              FEEDBACK
              <div className="h-[2px] w-[150%] absolute bg-theme-2 -bottom-3 left-0" />
            </span>
          </h2>

          <div className="px-9 lg:px-24 flex gap-x-3 items-center w-full my-12 lg:my-20 text-grade-1">
            <hr className="flex-grow" />
            <span>Personal details section</span> <hr className="flex-grow" />
          </div>

          <div className="my-12 lg:my-20 px-9 lg:px-24 text-sm lg:text-base pointer-events-none not-selectable">
            {personalDetails.map((question, questionIndex) => {
              const testString = `(#${questionIndex})-${question.title}`;
              let verdict;
              if (formData?.personalResponses) {
                verdict = Object.keys(formData?.personalResponses).find(
                  (response) => response === testString
                );
              }
              if (!verdict) return;
              else
                return (
                  <div
                    key={`personal-(#${questionIndex})-${question.title}`}
                    className={`flex flex-col gap-y-2 mb-6 last:mb-0`}
                  >
                    <span
                      className={`question${questionIndex}${question.title.replaceAll(/[^\w\d]/g, "")} font-normal`}
                    >
                      {question.title}
                    </span>

                    {/* If there are no options */}
                    {!question.options ? (
                      <input
                        type={question.type}
                        className={` personal${question.title.replaceAll(/[\s\W]/g, "-")}-${questionIndex} ${question.cssSelector ? question.cssSelector : ""} p-3 border focus:outline-none w-full lg:w-[70%]`}
                      />
                    ) : (
                      // If there are options
                      <div className="flex flex-col gap-y-5 mt-2">
                        {question.options?.map((option, optionIndex) => {
                          return (
                            <div
                              key={`${question.title}-${optionIndex}`}
                              className={`flex w-fit cursor-pointer pl-3`}
                            >
                              <input
                                type={question.type}
                                className={`personal${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex} w-5 cursor-pointer`}
                                id={`${question.title}-${optionIndex}`}
                                name={question.title}
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
                  </div>
                );
            })}
          </div>

          <div className="px-9 lg:px-24 flex gap-x-3 items-center w-full text-grade-1">
            <hr className="flex-grow" />
            <span>Project details section</span> <hr className="flex-grow" />
          </div>

          <div className="my-12 lg:my-20 px-9 lg:px-24 text-sm lg:text-base pointer-events-none not-selectable">
            {projectDetails.map((question, questionIndex) => {
              const testString = `(#${questionIndex})-${question.title}`;
              let verdict;
              if (formData?.projectResponses) {
                verdict = Object.keys(formData?.projectResponses).find(
                  (response) => response === testString
                );
              }
              if (!verdict) return;
              else
                return (
                  <div
                    key={`project-(#${questionIndex})-${question.title}`}
                    className={`flex flex-col gap-y-2 mb-6 last:mb-0`}
                  >
                    <span
                      className={`question${questionIndex}${question.title.replaceAll(/[^\w\d]/g, "")} font-normal`}
                    >
                      {question.title}
                    </span>

                    {/* If there are no options */}
                    {!question.options ? (
                      <>
                        {question.type === "text" ? (
                          <input
                            type={question.type}
                            className={` project${question.title.replaceAll(/[\s\W]/g, "-")}-${questionIndex} p-3 border focus:outline-none w-full lg:w-[70%]`}
                          />
                        ) : (
                          <textarea
                            rows={3}
                            className={` project${question.title.replaceAll(/[\s\W]/g, "-")}-${questionIndex} p-3 border focus:outline-none w-full lg:w-[70%]`}
                          ></textarea>
                        )}
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
                                className={`project${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex} w-5 cursor-pointer`}
                                id={`${question.title}-${optionIndex}`}
                                name={question.title}
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
                  </div>
                );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default ViewResponse;
