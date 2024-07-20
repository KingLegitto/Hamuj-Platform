import { FC } from "react";
import Image from "next/image";
import Hero from "../../assets/rasters/hamuj1-2.jpg";
import Logo from "../../assets/rasters/Hamuj_homes_logo.png"
import Slider from "@/components/principles-section-slider";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <main className="relative w-full h-auto bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />
        <h1 className="absolute z-[3] text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            ABOUT US
          </span>
          <span className="text-sm md:text-[20px]">Who we are</span>
        </h1>
      </section>

      <section className="section w-full max-failsafe pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-2xl md:text-heading text-grade-3 pl-7 md:pl-20">
          <span className="relative font-bold">
            Our History
            <div className="h-[2px] w-[150%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>

        <div className="mt-16 px-7 md:px-40 text-base md:text-lg text-justify md:text-left relative text-grade-2">
          <p className="w-full md:w-3/4 mb-10">
            Hamuj Homes Ltd., established in 2017, we began as a wood exporting
            company, sourcing and delivering quality wood worldwide. We expanded into home furniture in 2020, offering TV units,
            wardrobes, closets, and kitchen cabinets. By 2021, we achieved N150
            million ($113,670) in revenue, allowing us to diversify into real
            estate and start acquiring properties from our profits.
          </p>
          <p className="w-full md:w-3/4">
            In 2022, we transitioned into a full-time interior design company, completing over
            3,000 homes across Nigeria and serving a diverse clientele, including
            celebrities, government officials, and private organization founders.
            By 2024, we acquired N400 million ($303,000) in real estate and other
            assets. Currently, we are constructing Terrace apartments, fully
            funded by our profits, as we progress toward evolving into a
            comprehensive group of companies under the Hamuj Group umbrella.
          </p>
          <Image src={Logo} alt="Hamuj logo" className="absolute right-1/2 md:right-[8%] translate-x-1/2 md:translate-x-0 top-1/2 -translate-y-1/2 w-[250px] opacity-5 md:opacity-20"/>
        </div>
        
      </section>

      <section className="section w-full max-failsafe pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-2xl md:text-heading text-grade-3 pl-7 md:pl-20">
          <span className="relative font-bold">
            Our Guiding Principles
            <div className="h-[2px] w-[105%] md:w-[130%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>

        <Slider />
        
      </section>

      <section className="section w-full max-failsafe pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-2xl md:text-heading text-grade-3 pl-7 md:pl-20">
          <span className="relative font-bold">
            Our Leads
            <div className="h-[2px] w-[150%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>

        <div className="mt-20 flex flex-col md:flex-row items-center md:justify-center gap-y-8 md:gap-x-10 mb-20">
            <div className="w-[250px] h-[270px]  md:h-[350px] bg-slate-300">

            </div>
            <div className="w-[250px] h-[270px]  md:h-[350px] bg-slate-300">

            </div>
            <div className="w-[250px] h-[270px]  md:h-[350px] bg-slate-300">

            </div>
        </div>
      </section>
      
    </main>
  );
};

export default About;
