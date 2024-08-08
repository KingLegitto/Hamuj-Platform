"use client"
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import Compose from "../../assets/vectors/compose.svg"
import Image from "next/image";
import emailjs from '@emailjs/browser';

const EnquiryForm = () => {
  const [formIsVisible, setFormIsVisible] = useState(false)
  const laptopForm = useRef<HTMLFormElement>(null)
  const mobileForm = useRef<HTMLFormElement>(null)

  function handleDragEnd(distance:number){
    if(distance > 150){
      setFormIsVisible(false)
    }
  }

  function sendEmail(type: string, e: FormEvent){
    e.preventDefault();
    const form = type==='laptop'? laptopForm: mobileForm
    emailjs
      .sendForm('service_ewdkhrh', 'template_dkj2xz8', form.current!, {
        publicKey: 'ypM9qCA_5t-lUOOdw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
    return ( 
      <>
        <form ref={laptopForm} onSubmit={(e)=>{sendEmail('laptop', e)}} className="hidden md:flex flex-col gap-y-20 text-lg font-normal pr-20">
          <input
            type="text"
            placeholder="Name" required name="from_name"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="email"
            placeholder="Email" required name="email"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="text"
            placeholder="Phone" required name="phone"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <textarea
            rows={4}
            placeholder="Enquiry" required name="message"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="submit"
            value={"Send Enquiry"}
            className="bg-theme-1 text-white cursor-pointer hover:scale-[1.05] duration-100 py-3 w-1/3 font-medium"
          />
        </form>
        
        {/* Mobile form elements*/}

        {/* Trigger button */}
        <motion.div initial={{y: '50%', opacity: 0}} animate={{y:0,opacity:1,transition:{delay:1, duration:0.3}}} whileTap={{scale: 0.5}} onTap={()=>{setFormIsVisible(true)}} 
        className="lg:hidden fixed bottom-7 right-3 z-20 text-white bg-theme-1 rounded-full aspect-square px-4 py-3 flex justify-center items-center gap-x-2 shadow-[0px_0px_10px_-2px_rgba(255,255,255,0.5)] border-white border-[2px]">
          <Image src={Compose} alt="Compose" className="scale-[0.8]"/>
        </motion.div>

        {/* Form */}
        <AnimatePresence>
        {formIsVisible && (
        
        <motion.div initial={{backgroundColor: '#00000000'}} animate={{backgroundColor: '#0000007d', transition:{duration: 0.5}}} exit={{backgroundColor: '#00000000', transition: {delay: 0.3,duration: 0.5}}}
        className="lg:hidden fixed top-0 z-[100] h-dvh overflow-clip w-full touch-none"
        onClick={()=>{setFormIsVisible(false)}}
        >
        
        <motion.form ref={mobileForm} onSubmit={(e)=>{sendEmail('mobile', e)}} drag='y' dragConstraints={{top: 0}} dragElastic={{top: 0, bottom: 0.5}} dragSnapToOrigin onDragEnd={(e,info)=>(handleDragEnd(info.offset.y))} 
        onClick={(e)=>{e.stopPropagation()}} initial={{y: '100%'}} animate={{y:0, transition:{delay: 0.2, duration:0.5}}} exit={{y: '100%', transition:{duration:0.5}}}
        className="absolute bottom-0 flex flex-col touch-none h-auto w-full gap-y-10 text-sm font-normal px-7 pt-10 pb-9 rounded-t-2xl bg-slate-50">
          
          <div className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full w-1/5 h-1 bg-[#8c8c8c]"/>
          
          <input
            type="text"
            placeholder="Name" required
            className="py-4 px-6 border-[1px] flex-shrink-0 border-[#8C8C8C] rounded-lg touch-none"
          />
          <input
            type="email"
            placeholder="Email" required
            className="py-4 px-6 border-[1px] flex-shrink-0 border-[#8C8C8C] rounded-lg touch-none"
          />
          <input
            type="text"
            placeholder="Phone" required
            className="py-4 px-6 border-[1px] flex-shrink-0 border-[#8C8C8C] rounded-lg touch-none"
          />
          <textarea
            rows={4}
            placeholder="Enquiry" required
            className="py-4 px-6 border-[1px] flex-shrink-0 border-[#8C8C8C] rounded-lg touch-none"
          />
          <input
            type="submit"
            value={"Send Enquiry"}
            className="bg-theme-1 text-white cursor-pointer rounded-lg duration-100 py-3 w-1/2 mx-auto font-medium touch-none"
          />
        </motion.form>
        </motion.div>)}
        </AnimatePresence>
      </>
     );
}
 
export default EnquiryForm;