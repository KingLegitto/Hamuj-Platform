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
        <section className="target mx-auto bg-white text-sm md:text-base flex flex-col justify-center items-center gap-y-10 rounded-lg lg:rounded-3xl border md:border-[3px] text-grade-3 border-[#e8e8e8] p-7 lg:p-16 w-[97%] md:w-[70%] h-[55vh] lg:h-[70vh] max-h-[500px] shadow-lg text-center my-[5rem] md:my-[10rem]">
        <h2 className="font-normal text-lg md:text-xl text-grade-3">
          Your request has been placed successfully
        </h2>

        <div className="flex flex-col gap-y-3 text-center hyphens-auto md:hyphens-none leading-[25px]">
          <span>
            To carry on with the consultations, follow the steps stated in the
            email sent to <span className={`font-medium rounded-lg p-1 cursor-pointer ${revealEmail? '':'border lg:hover:bg-[#e8e8e8]'}`} onClick={()=>{setRevealEmail(!revealEmail)}}>{revealEmail? email:'you'}</span>. If any issues send an enquiry in the contact page or call +234
            8061999995.
          </span>

          <span className="w-full text-center">Thank you for choosing Hamuj Homes.</span>
        </div>
      </section>
     );
}
 
export default NextSteps;