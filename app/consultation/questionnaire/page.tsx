"use client";
import Image from "next/image";
import Hero from "../../../assets/rasters/hamuj1-2.jpg";
import PersonalSegment from "./personalSegment";
import { useEffect, useState } from "react";
import ProjectSegment from "./projectSegment";
import { personalDetails } from "./questions";
import { projectDetails } from "./questions";
import emailjs from '@emailjs/browser';
import Toast from "@/components/toast";
import { AnimatePresence } from "framer-motion";
import NextSteps from "./nextSteps";
import { uploadResponse } from "@/firebaseConfig";
import dynamic from "next/dynamic";
const Payment = dynamic(() => import('./payment'), {
  ssr: false,
});

interface StoredResponse {
  personalResponses: any;
  projectResponses: any;
}

const Questionnaire = () => {
  const [page, setPage] = useState<number | 'payment' | 'sending' | 'complete'>(0);
  const [personalQuestions, setPersonalQuestions] = useState(personalDetails);
  const [projectQuestions, setProjectQuestions] = useState(projectDetails);
  const [storedResponse, setStoredResponse] = useState<StoredResponse>({
    personalResponses: null,
    projectResponses: null,
  });
  const [disableForm, setDisableForm] = useState<boolean>(false)
  const [easyAccess, setEasyAccess] = useState({lastname: '', otherNames: '', email: ''})
  const [toast, setToast] = useState<boolean>(false)
  const [toastDetails, setToastDetails] = useState({title: '', result: false, message: ''})
  const [link, setLink] = useState<string>('')


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

      const lastname: HTMLInputElement = document.querySelector('.lastname')!
      const otherNames: HTMLInputElement = document.querySelector('.otherNames')!
      const email: HTMLInputElement = document.querySelector('.email')!
      setEasyAccess({lastname: lastname.value, otherNames: otherNames.value, email: email.value})

          if(doNotValidate){
          } 
          else{
            validateForm(responseObj)? setPage(1)
            : document.querySelector('.heading')!.scrollIntoView({block: 'center', inline: 'nearest'})
        }
    }

    if (segment === "project" && !disableForm) {
        setDisableForm(true) //Prevent multiple invokes at once
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
        setPage(0)
      } 
      else{
        validateForm(responseObj)? (setPage('payment'))
        : document.querySelector('.heading')!.scrollIntoView({block: 'center', inline: 'nearest'})
    }
    setDisableForm(false)
    }
  }

  useEffect(()=>{
    if(typeof window !== "undefined"){
      setLink(window.location.href)
    }
    if(page === 'sending'){
        initiateUpload()
    }
  }, [storedResponse, page])

  async function initiateUpload(){
    let stringifiedResponse = JSON.stringify(storedResponse)
    try{
        const id = uploadResponse(stringifiedResponse, easyAccess.lastname)
        sendConfirmationEmail(id)
    }
    catch (error){
        setToast(true)
        setToastDetails({title: 'Error', result: false, message: 'An error occurred, try again later' })
    }
  }

  function sendConfirmationEmail(ID: string){
    const templateParams = {
        from_name: `${easyAccess.otherNames} ${easyAccess.lastname}`,
        email: easyAccess.email,
        subject: `Hamuj Homes Consultation`,
        link: `${link}/review?response=${ID}`,
        content: `This is a confirmation that we have received your consultation request and will respond to within 2-4 business days.\n
        You can review your choices by clicking the link below.\n
        ${link}/review?response=${ID}`
    }
    emailjs
      .send('service_ewdkhrh', 'template_7idchr2', templateParams, {
        publicKey: 'ypM9qCA_5t-lUOOdw',
      })
      .then(
        () => {
            setToast(true)
            setToastDetails({title: 'Success', result: true, message: 'Completed successfully' })
            setPage('complete')
        },
        (error) => {
            setToast(true)
            setToastDetails({title: 'Error', result: false, message: 'An error occurred.' })
        },
      );
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
        setToast(true)
        setToastDetails({title: 'Incomplete', result: false, message: 'Please fill the form' })
        return false
    }
  }

  return (
    <main className="relative w-full h-auto bg-slate-50">
        <AnimatePresence>
            {toast && <Toast setToast={setToast} toastDetails={toastDetails}/>}
        </AnimatePresence>
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


      
        {page === 0 && 
        <PersonalSegment
          Questions={personalQuestions}
          setQuestions={setPersonalQuestions}
          storeResponse={storeResponse}
          checkForStoredResponse={checkForStoredResponse}
        />}

        {(page === 1) && 
        <ProjectSegment
          Questions={projectQuestions}
          setQuestions={setProjectQuestions}
          storeResponse={storeResponse}
          checkForStoredResponse={checkForStoredResponse}
        />}

        {/* {(page === 'payment' || page === 'sending') && 
        <Payment email={easyAccess.email} setPage={setPage}/>
        } */}

        {page === 'payment' && 
        <NextSteps email={easyAccess.email}/>
        }
      

    </main>
  );
};

export default Questionnaire;
