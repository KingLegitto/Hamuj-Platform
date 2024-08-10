import { FC, useEffect, useState } from "react"

interface NextStepsProps{
    email: string
}
const NextSteps: FC<NextStepsProps> = ({email}) => {
    const [revealEmail, setRevealEmail] = useState(false)
    useEffect(()=>{
        let scrollAnchor: HTMLHeadingElement = document.querySelector('.target')!
        scrollAnchor.scrollIntoView({block: 'center', inline: 'nearest'})
      }, [])

    return ( 
        <section className="target mx-auto bg-white border-[3px] lg:border-[5px] border-white text-sm md:text-base flex flex-col justify-center items-center gap-y-12 rounded-3xl text-grade-3 p-7 py-20 lg:p-16 w-[97%] md:w-[70%] lg:h-[70vh] max-h-[500px] shadow-[inset_5px_5px_0px_6px_#f3f3f3] md:shadow-[inset_9px_9px_0px_10px_#f3f3f3] text-center my-[5rem] md:my-[10rem]">
        <h2 className="relative font-normal text-lg md:text-xl text-grade-3">
          Your request has been placed successfully
          <div className="h-[3px] lg:h-[5px] w-full lg:w-[150%] absolute bg-[#f3f3f3] -bottom-3 left-1/2 -translate-x-1/2" />
        </h2>

        <div className="flex flex-col gap-y-3 text-center hyphens-auto md:hyphens-none leading-[25px]">
          <span>
            To carry on with the consultations, follow the steps stated in the
            email sent to <span className={`font-medium rounded-lg p-1 cursor-pointer ${revealEmail? '':'border lg:hover:bg-[#e8e8e8]'}`} onClick={()=>{setRevealEmail(!revealEmail)}}>{revealEmail? email:'you'}</span>. If any issues, send an enquiry in the contact page or call +234
            8061999995.
          </span>

          <span className="w-full text-center">Thank you for choosing Hamuj Homes.</span>
        </div>
      </section>
     );
}
 
export default NextSteps;