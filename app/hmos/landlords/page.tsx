'use client'
import Image from "next/image";
import Hero from "../../../assets/rasters/hamuj1-2.jpg";
import Logo from "../../../assets/rasters/Hamuj_homes_logo.png";
import { Metadata } from "next";
import { Perks } from "./perks";
import { Check } from "@/assets/vectors/check";

// export const metadata: Metadata = {
//   title: "HMO Landlords",
//   description:
//     "HMO Landlords options",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

const LandlordsPage = () => {
  return (
    <main className="relative w-full h-auto min-h-lvh">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden bg-[#303030]">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            HMO LANDLORDS
          </span>
          
        </h1>
      </section>
        
      <section className="section w-full max-failsafe py-[5rem] md:pt-top-spacing pb-16 md:pb-32">
        <h2 className="text-grade-3 pl-7 md:pl-20 pr-5 ">
          <span className="relative text-[20px] md:text-[25px] leading-[1.15] text-grade-3 font-medium">
          This package is for you if you own a House of Multiple Occupation (HMO) and you're:
            <div className="h-[2px] w-[15rem] lg:w-[40rem] absolute bg-theme-2 -bottom-4 lg:-bottom-7 left-0" />
          </span>
        </h2>

        <div className="mt-12 lg:mt-16 pl-10 pr-5 md:px-40 text-sm md:text-lg text-left relative text-grade-2">
          <ul className="relative z-20 w-full md:w-3/4 lists flex flex-col gap-y-3">
         <li>Seeking efficient property management solutions.</li>
          <li>Looking to maximize rental income.</li>
          <li>Interested in minimizing vacancies.</li>
          <li>Focusing on enhancing tenant satisfaction.</li>
          <li>Committed to maintaining compliance with regulations.</li>
          </ul>
          
          <Image src={Logo} alt="Hamuj logo" className="hidden lg:block absolute z-10 right-1/2 md:right-[8%] translate-x-1/2 md:translate-x-0 top-1/2 -translate-y-1/2 w-[250px] opacity-5 md:opacity-20"/>
        </div>
      </section>

      <div className="w-full">
        <h2 className="w-full text-center">
          <span className="text-[20px] md:text-[30px] leading-[1.15] text-grade-3 font-medium px-5">
            <span className="text-[#c5c5c5] font-bold">~</span> Work with us <span className="text-[#c5c5c5] font-bold">~</span>
          </span>
        </h2>
      </div>

        <section className="max-failsafe grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-14 lg:gap-y-20 my-16 lg:my-32 pl-16 pr-7 lg:pl-28 lg:pr-20">
          {Perks.map((perk, index)=>{
            return(
              <div key={index} className="w-full flex">
                
                <div className="flex flex-col gap-y-5 text-sm md:text-lg text-grade-2">
                  <span className="relative font-medium text-[18px] lg:text-[22px] text-grade-3 pl-3">
                    {perk.heading}
                    <Check fill="#115faa" width="100" height="100" className="absolute top-1/2 -translate-y-1/2 right-full translate-x-5 lg:translate-x-0 flex-shrink-0 scale-[0.7] lg:scale-[1]"/>
                  </span>
                  {perk.paragraph && (<span className="pl-3">{perk.paragraph}</span>)}
                  {perk.list && (
                    <ul className="lists flex flex-col gap-y-3">
                      {perk.list.map((item, index)=>{
                        return(
                          <li key={index} className="max-h-fit">{item}</li>
                        )
                      })}
                    </ul>
                    )}
                </div>
              </div>
            )
          })}
        </section>
        
    </main>
  );
};

export default LandlordsPage;
