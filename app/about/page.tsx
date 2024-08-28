import Image from "next/image";
import type { Metadata } from "next";
import Hero from "../../assets/rasters/hamuj1-2.jpg";
import Logo from "../../assets/rasters/Hamuj_homes_logo.png"
import CEO from "../../assets/rasters/Babatunde-Toheeb.jpg"
import COO from "../../assets/rasters/hamuj_COO.jpg"
import MD from "../../assets/rasters/hamuj_MD.jpg"
import GuidingPrinciples from "@/components/guidingPrinciples";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about us, who we are and what we do",
  icons: {
    icon: '/favicon.png'
  }
};

const About = () => {
  return (
    <main className="relative w-full h-auto bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden bg-[#303030]">
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

        <div className="mt-16 px-10 md:px-40 text-sm md:text-lg text-left relative text-grade-2">
          <p className="relative z-20 w-full md:w-3/4 mb-10">
            Hamuj Homes Ltd., established in 2017, we began as a wood exporting
            company, sourcing and delivering quality wood worldwide. We expanded into home furniture in 2020, offering TV units,
            wardrobes, closets, and kitchen cabinets. By 2021, we achieved N150
            million ($113,670) in revenue, allowing us to diversify into real
            estate and start acquiring properties from our profits.
          </p>
          <p className="relative z-20 w-full md:w-3/4">
            In 2022, we transitioned into a full-time interior design company, completing over
            3,000 homes across Nigeria and serving a diverse clientele, including
            celebrities, government officials, and private organization founders.
            By 2024, we acquired N400 million ($303,000) in real estate and other
            assets. Currently, we are constructing Terrace apartments, fully
            funded by our profits, as we progress toward evolving into a
            comprehensive group of companies under the Hamuj Group umbrella.
          </p>
          <Image src={Logo} alt="Hamuj logo" className="hidden lg:block absolute z-10 right-1/2 md:right-[8%] translate-x-1/2 md:translate-x-0 top-1/2 -translate-y-1/2 w-[250px] opacity-5 md:opacity-20"/>
        </div>
        
      </section>

      <section className="section w-full max-failsafe pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-2xl md:text-heading text-grade-3 pl-7 md:pl-20">
          <span className="relative font-bold">
            Our Guiding Principles
            <div className="h-[2px] w-[105%] md:w-[130%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>

        <GuidingPrinciples />
        
      </section>

      <section className="section w-full max-failsafe pt-10 md:pt-top-spacing">
        <h2 className="text-2xl md:text-heading text-grade-3 pl-7 md:pl-20">
          <span className="relative font-bold">
            Our Leads
            <div className="h-[2px] w-[150%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>

        <div className="mt-20 flex flex-col md:flex-row text-sm lg:text-base items-center md:justify-center gap-y-16 md:gap-x-10 mb-20">
            <div className="relative w-[250px] h-[250px]  md:h-[300px] bg-slate-300">
              <Image src={CEO} alt="" className="object-cover w-full h-full"/>
              <span className="absolute  top-[102%] w-full text-center font-bold text-grade-3 truncate">Idowu Babatunde Toheeb <br /><span className="text-xs lg:text-sm font-medium text-grade-1">Chief Executive Officer</span></span>
            </div>
            <div className="relative w-[250px] h-[250px]  md:h-[300px] bg-slate-300">
              <Image src={COO} alt="" className="object-cover w-full h-full"/>
              <span className="absolute  top-[102%] w-full text-center font-bold text-grade-3 truncate">Olawale Daminola Emmanuel<br /><span className="text-xs lg:text-sm font-medium text-grade-1">Chief Operating Officer</span></span>            </div>
            <div className="relative w-[250px] h-[250px]  md:h-[300px] bg-slate-300">
              <Image src={MD} alt="" className="object-cover w-full h-full"/>
              <span className="absolute  top-[102%] w-full text-center font-bold text-grade-3 truncate">Erohogo Petra Uchechukwu <br /><span className="text-xs lg:text-sm font-medium text-grade-1">Managing Director</span></span>            </div>
        </div>
      </section>
      
    </main>
  );
};

export default About;
