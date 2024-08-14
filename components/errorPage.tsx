import { FC, useEffect, useState } from "react"

interface ErrorPageProps{
    error: Error;
    reset: () => void;
}
const ErrorPage: FC<ErrorPageProps> = ({error, reset}) => {

    return ( 
        <div className="h-dvh">        
        <section className="mx-auto bg-white border-[1px] lg:border-[3px] border-white text-sm md:text-base flex flex-col justify-center items-center gap-y-12 rounded-3xl text-grade-3 p-7 py-20 lg:p-16 w-[97%] md:w-[70%] lg:h-[70vh] max-h-[500px] shadow-[inset_5px_5px_0px_6px_#f3f3f3] md:shadow-[inset_9px_9px_0px_10px_#f3f3f3] text-center my-[5rem] md:my-[10rem]">
        <h2 className="relative font-normal text-lg md:text-xl text-grade-3">
          An <span className="text-red-500 font-normal">error</span> just occurred...
          <div className="h-[3px] lg:h-[5px] w-full lg:w-[150%] absolute bg-[#f3f3f3] -bottom-3 left-1/2 -translate-x-1/2" />
        </h2>

        <div className="flex flex-col gap-y-3 text-center hyphens-auto md:hyphens-none leading-[25px]">
          <span>
            Possible issues include,
            <ul>
                <li>Poor connection</li>
                <li>Outdated browser</li>
            </ul>
          </span>

          <span className="w-full text-center">Click <button className="p-2 rounded-md border" onClick={reset}>Here</button> to try again</span>
        </div>
      </section>

      </div>
     );
}
 
export default ErrorPage;