import TransitionLink from "@/components/pageTransitions/transitionLink"
import {useEffect} from "react"


const NotFound = () => {
    useEffect(()=>{
        let scrollAnchor: HTMLHeadingElement = document.querySelector('.target')!
        scrollAnchor.scrollIntoView({block: 'center', inline: 'nearest'})
      }, [])

    return (
        <section className="target mx-auto bg-white border-[5px] border-white text-sm md:text-base flex flex-col justify-center items-center gap-y-7 lg:gap-y-10 rounded-3xl text-grade-3 p-7 py-20 lg:p-16 w-[97%] md:w-[70%] lg:h-[70vh] max-h-[500px] shadow-[inset_5px_5px_0px_6px_#f3f3f3] md:shadow-[inset_9px_9px_0px_10px_#f3f3f3] text-center my-[5rem] md:my-[10rem]">
        <h2 className="relative font-normal text-lg md:text-xl text-grade-3">
          This request does not exists
          <div className="h-[3px] lg:h-[5px] w-full lg:w-[150%] absolute bg-[#f3f3f3] -bottom-2 lg:-bottom-3 left-1/2 -translate-x-1/2" />
        </h2>

        <div className="flex flex-col gap-y-5 text-center hyphens-auto md:hyphens-none leading-[25px]">
        <span>
          You either have a wrong URL or the request has been terminated.
        </span>
          <span className="w-full text-center">Return to <TransitionLink href="/" styles="border p-1 rounded-md hover:bg-[#e8e8e8]">Home page</TransitionLink></span>
        </div>
      </section>
     );
}
 
export default NotFound;