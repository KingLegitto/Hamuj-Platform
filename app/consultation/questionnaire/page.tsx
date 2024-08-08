"use client";
import Image from "next/image";
import Hero from "../../../assets/rasters/hamuj1-2.jpg";
import PersonalSegment from "./personalSegment";
import { useEffect, useState } from "react";
import ProjectSegment from "./projectSegment";
import { personalDetails } from "./questions";
import { projectDetails } from "./questions";
import { client } from "@/sanityClient";

interface StoredResponse {
  personalResponses: any;
  projectResponses: any;
}

const Questionnaire = () => {
  const [page, setPage] = useState(0);
  const [personalQuestions, setPersonalQuestions] = useState(personalDetails);
  const [projectQuestions, setProjectQuestions] = useState(projectDetails);
  const [storedResponse, setStoredResponse] = useState<StoredResponse>({
    personalResponses: null,
    projectResponses: null,
  });

  //   RESPONSE STORAGE LOGIC
  function storeResponse(
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
  ) {
    let responseObj: any = {};

    if (segment === "personal") {
      // Personal details segment responses
      segmentQuestions.forEach((question, questionIndex) => {
        if (!question.options && !question.hidden) {
          // If question has options (that is, type checkbox or radio) and is not hidden...
          let inputElement: HTMLInputElement = document.querySelector(
            `.${question.title.replaceAll(/[\s\W]/g, "-")}-0`
          )!; // Get the input element associated with said question
          responseObj[`(#${questionIndex})-${question.title}`] = [
            inputElement.value,
          ]; // Store its value
        }

        if (question.options && !question.hidden) {
          // If question has options (that is, type checkbox or radio) and is not hidden...
          responseObj[`(#${questionIndex})-${question.title}`] = [];
          question.options.forEach((option, optionIndex) => {
            let inputElement: HTMLInputElement = document.querySelector(
              `.${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex}`
            )!; // Get the checkboxes or radios associated with said question
            responseObj[`(#${questionIndex})-${question.title}`].push(
              inputElement.checked
            ); // Store each ones checked state
          });
        }
      });
      setStoredResponse({
        ...storedResponse,
        personalResponses: responseObj,
      });

      if(doNotValidate){
        // setPage(page-1)
      } 
      else{
        validateForm(responseObj)? setPage(1)
        : document.querySelector('.heading')!.scrollIntoView({block: 'center', inline: 'nearest'})
    }
    }

    if (segment === "project") {
      // Project details segment responses
      segmentQuestions.forEach((question, questionIndex) => {
        if (!question.options && !question.hidden) {
          // If question has options (that is, type checkbox or radio) and is not hidden...
          let inputElement: HTMLInputElement = document.querySelector(
            `.${question.title.replaceAll(/[\s\W]/g, "-")}-0`
          )!; // Get the input element associated with said question
          responseObj[`(#${questionIndex})-${question.title}`] = [
            inputElement.value,
          ]; // Store its value
        }

        if (question.options && !question.hidden) {
          // If question has options (that is, type checkbox or radio) and is not hidden...
          responseObj[`(#${questionIndex})-${question.title}`] = [];
          question.options.forEach((option, optionIndex) => {
            let inputElement: HTMLInputElement = document.querySelector(
              `.${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex}`
            )!; // Get the checkboxes or radios associated with said question
            responseObj[`(#${questionIndex})-${question.title}`].push(
              inputElement.checked
            ); // Store each ones checked state
          });
        }
      });
      setStoredResponse({
        ...storedResponse,
        projectResponses: responseObj,
      });
      
      if(doNotValidate){
        setPage(page-1)
      } 
      else{
        validateForm(responseObj)? (setPage(2), sendToSanity())
        : document.querySelector('.heading')!.scrollIntoView({block: 'center', inline: 'nearest'})
    }
    }
  }

  async function sendToSanity(){
    let author
    Object.keys(storedResponse['personalResponses']).forEach((responseKey: any, index)=>{
        if(index === 0){
            //@ts-ignore
            author = storedResponse['personalResponses'][responseKey][0]
        }
    })
    let stringifiedResponse = JSON.stringify(storedResponse)
    try{
        const response = await client.create({_type: 'forms', author: author, data: stringifiedResponse})
        alert('success')
    }
    catch (error){
        alert('Sanity failed')
    }
  }

  function checkForStoredResponse(
    segment: keyof StoredResponse,
  ) {
    if (storedResponse[segment] && segment === 'personalResponses') {
        personalQuestions.map((question, questionIndex)=>{
            if(!question.hidden && !question.options){
                let data = storedResponse[segment][`(#${questionIndex})-${question.title}`][0]
                let inputElement: HTMLInputElement = document.querySelector(`.${question.title.replaceAll(/[\s\W]/g, "-")}-0`)!
                inputElement.value = data
            }
            else if(!question.hidden && question.options){
                question.options.forEach((option, optionIndex)=>{
                    let data = storedResponse[segment][`(#${questionIndex})-${question.title}`][optionIndex]
                    let inputElement: HTMLInputElement = document.querySelector(`.${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex}`)!
                    inputElement.checked = data
                })
            }
        })
    }

    if (storedResponse[segment] && segment === 'projectResponses') {
        projectQuestions.map((question, questionIndex)=>{
            if(!question.hidden && !question.options){
                let data = storedResponse[segment][`(#${questionIndex})-${question.title}`][0]
                let inputElement: HTMLInputElement = document.querySelector(`.${question.title.replaceAll(/[\s\W]/g, "-")}-0`)!
                inputElement.value = data
            }
            else if(!question.hidden && question.options){
                question.options.forEach((option, optionIndex)=>{
                    let data = storedResponse[segment][`(#${questionIndex})-${question.title}`][optionIndex]
                    let inputElement: HTMLInputElement = document.querySelector(`.${question.title.replaceAll(/[\s\W]/g, "-")}-${optionIndex}`)!
                    inputElement.checked = data
                })
            }
        })
    }
  }

  function validateForm(responseObj: any){
    let goodToGo = true
      Object.keys(responseObj).forEach((response, responseIndex)=>{
        let questionWasAnswered = false
        responseObj[response].forEach((potentialAnswer: boolean | string)=>{
            if(potentialAnswer){
                questionWasAnswered = true
            }
        })

        if(!questionWasAnswered){
            goodToGo = false
            let targetQuestion: HTMLSpanElement = document.querySelector(`.question${response.replaceAll(/[^\w\d]/g, "")}`)!
            targetQuestion.style.color = 'red'
            targetQuestion.classList.add('incomplete')
        }
    })

    if(goodToGo){return true}
    else{
        alert('Unanswered questions detected, please fill to proceed.')
        return false
    }
  }

  return (
    <main className="relative w-full h-auto bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            QUESTIONNAIRE
          </span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">
            Please fill the form below
          </span>
        </h1>
      </section>


      {page === 0 ? (
        <PersonalSegment
          Questions={personalQuestions}
          setQuestions={setPersonalQuestions}
          storeResponse={storeResponse}
          checkForStoredResponse={checkForStoredResponse}
        />
      ) : (
        <ProjectSegment
          Questions={projectQuestions}
          setQuestions={setProjectQuestions}
          storeResponse={storeResponse}
          checkForStoredResponse={checkForStoredResponse}
        />
      )}

    </main>
  );
};

export default Questionnaire;
