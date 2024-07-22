import Image from "next/image";
import LogoTitle from "@/assets/rasters/Hamuj_homes.png";
import HeroBg from "../assets/rasters/hamuj1.jpg";
import HeroBg2 from "../assets/rasters/hamuj2.jpg";
import HeroBg3 from "../assets/rasters/hamuj3.jpg";
import HeroBg4 from "../assets/rasters/hamuj4.jpg";
import HeroBg5 from "../assets/rasters/hamuj6.jpg";
import HeroBg6 from "../assets/rasters/hamuj7.jpg";
import GroupImage from "../assets/vectors/showcase-pc.svg";
import GroupImageMb from "../assets/rasters/showcase-mobile.png";
import Furniture from "../assets/vectors/furniture.svg";
import Interiors from "../assets/vectors/interiors.svg";
import RealEstate from "../assets/vectors/real-estate.svg";
import Quote from "../assets/vectors/quotes.svg";
import Check from "../assets/vectors/check.svg"
import Link from "next/link";
import Highlights from "@/components/projectHighlights";
import Hero from "@/components/heroSection";

const highlights = [
  {
    image: HeroBg,
    title: "5 Bedroom Duplex",
    location: "Osapa London, Lagos, Nigeria",
  },
  {
    image: HeroBg5,
    title: "Living Room Interior",
    location: "Ikoyi, Lagos, Nigeria",
  },
  {
    image: HeroBg6,
    title: "Living Room Interior",
    location: "Ikoyi, Lagos, Nigeria",
  },
  {
    image: HeroBg2,
    title: "Apartment at Victory Park Estate",
    location: "Lekki, Lagos Nigeria",
  },
  {
    image: HeroBg3,
    title: "Project 5",
    location: "Lagos, Nigeria",
  },
];

const heroImages = [HeroBg, HeroBg6, HeroBg3];

export default function Home() {
  return (
    <main className="page overflow-y-clip relative w-full h-auto overflow-x-hidden bg-slate-50">
      {/* Hero section */}
      <section className=" relative z-20 overflow-hidden h-[90svh] lg:h-screen max-h-[700px] w-full bg-[#101010] flex justify-center items-center overflow-x-hidden">
        <h1 className="absolute z-0 opacity-0">
          Hamuj Homes Ltd - Your go to option for interior renovations,
          furniture and construction
        </h1>

        <Hero images={heroImages} />

        <Image
          src={LogoTitle}
          alt="Hamuj Homes"
          className="relative top-5 lg:top-8 w-[80%] md:w-[400px] lg:w-[480px] z-20"
        />
      </section>

      <section className="relative z-20 pt-top-spacing-s lg:pt-top-spacing max-failsafe">
        <h2 className="text-center text-2xl lg:text-heading text-grade-3 font-extrabold px-5">
          Timely Luxurious Possibilities
        </h2>

        <div className="flex justify-center h-auto lg:h-[490px] flex-wrap lg:flex-nowrap gap-y-12 lg:gap-x-14 xl:gap-x-24 items-center mt-12 lg:mt-20">

          <div className="relative h-[280px] lg:h-full w-[300px] lg:w-[540px] drop-shadow-[12px_12px_0px_#E8E8E8] lg:drop-shadow-[15px_20px_0px_#E8E8E8]">
            <Image src={HeroBg5} alt="group image" className="absolute z-[3] left-0 bottom-11 rounded-3xl hover:scale-110 duration-300 border-[5px] lg:border-[10px] border-slate-50 w-[180px] lg:w-[330px] aspect-square object-cover"/>
            <Image src={HeroBg} alt="group image" className="absolute z-[2] top-0 right-10  rounded-3xl hover:scale-110 duration-300 border-[5px] lg:border-[10px] border-slate-50 w-[150px] lg:w-[280px] aspect-square object-cover"/>
            <Image src={HeroBg3} alt="group image" className="absolute z-[1] right-0 bottom-0 rounded-3xl hover:scale-110 duration-300 border-[5px] lg:border-[10px] border-slate-50 w-[100px] lg:w-[150px] aspect-square object-cover"/>
          </div>

          <p className="w-full lg:w-[500px] flex-shrink-0 rounded-none lg:rounded-lg bg-[#E8E8E8] lg:bg-theme-1 leading-7 h-auto lg:h-[370px] p-10 lg:p-5 text-black lg:text-white text-sm lg:text-lg text-center lg:text-left shadow-[20px_20px_0px_2px_#E8E8E8]">
            We are a Nigerian construction company aimed at bridging the gap
            between luxury and affordability.
            <br /> <br />
            We are dedicated to transforming your vision into reality, using the
            latest technology and sustainable practices.
            <br /> <br />
            We are{" "}
            <span className="font-bold underline underline-offset-[5px] decoration-[#F49D02] decoration-[3px]">
              Hamuj
            </span>
            . You can trust us for all your construction needs, from interior
            renovations to new builds, and experience how our expertise and
            dedication set us apart from the rest.
          </p>
        </div>
      </section>

      <section className="pt-top-spacing-s lg:pt-top-spacing relative z-20">
        <h2 className="text-center text-2xl lg:text-heading text-grade-3 font-bold px-5">
          Our Business Units
        </h2>

        <div className="mt-10 lg:mt-20 w-[80%] lg:w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-9 h-auto lg:h-96 px-0 lg:px-16 m-auto">
          <div className="h-auto bg-slate-50 py-7 lg:py-0 px-3 lg:px-0 lg:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image src={Furniture} height={50} alt="Furniture svg icon" />
            <span className="text-lg lg:text-2xl text-[#242424] font-bold">
              Furniture
            </span>
            <p className=" text-center text-sm lg:text-base text-grade-2 w-full lg:w-60 px-2 lg:px-0 h-28 lg:h-32 flex items-center">
              Design, manufacture, restoration, custom solutions, expert
              craftsmanship and delivery of high-quality furniture for
              residential and commercial spaces.
            </p>
          </div>
          <div className="h-auto bg-slate-50 py-7 lg:py-0 px-3 lg:px-0 lg:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image
              src={Interiors}
              height={50}
              alt="Interiors svg icon"
              className="scale-110"
            />
            <span className="text-lg lg:text-2xl text-[#242424] font-bold">
              Interiors
            </span>
            <p className=" text-center text-sm lg:text-base text-grade-2 w-full lg:w-60 px-2 lg:px-0 h-24 lg:h-32 flex items-center">
              Planning, and execution of stunning interiors for residential and
              commercial spaces, custom solutions, space optimization, etc.
            </p>
          </div>
          <div className="h-auto bg-slate-50 py-7 lg:py-0 px-3 lg:px-0 lg:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image src={RealEstate} height={50} alt="Real Estate svg icon" />
            <span className="text-lg lg:text-2xl text-[#242424] font-bold">
              Real Estate
            </span>
            <p className=" text-center text-sm lg:text-base text-grade-2 w-full lg:w-60 px-2 lg:px-0 h-24 lg:h-32 flex items-center">
              Property development, sales, maintenance and management for
              residential and commercial clients.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pt-top-spacing-s lg:pt-top-spacing z-20 lg:px-5 pb-[5rem] lg:pb-top-spacing bg-[#E8E8E8] mt-[10rem] lg:mt-[15rem]">
      <div className="hidden lg:block w-[12rem] h-[4rem] bg-[#E8E8E8] absolute bottom-full right-10" />
      <div className="hidden lg:block w-[10rem] h-[5rem] bg-[#E8E8E8] absolute bottom-[calc(100%+2rem)] right-3/4" />
        <h2 className="text-center text-2xl lg:text-heading text-grade-3 font-bold px-5 mb-10 lg:mb-0">
          Featured Projects
        </h2>
        <Highlights projectData={highlights} />
      </section>

      <section className="relative section w-full max-failsafe py-[5rem] lg:pt-28 lg:pb-[calc(7rem-40px)] overflow-hidden">
        {/* <div className="hidden lg:block w-[12rem] h-[4rem] bg-[#E8E8E8] absolute top-0 left-10 z-10" />
        <div className="hidden lg:block w-[10rem] h-[5rem] bg-[#E8E8E8] absolute top-[2rem] left-3/4 z-10" /> */}
        
        <Image src={Check} alt="check" className="absolute -bottom-[2.5rem] lg:-bottom-[2rem] left-1/2 -translate-x-1/2 scale-[0.3] lg:scale-[0.4]"/>

        <h2 className="relative text-center text-2xl lg:text-heading text-grade-3 z-20 font-bold px-5 mb-0">
          Client Testimonials
        </h2>

        <div className="flex h-[300px] overflow-x-scroll snap-mandatory snap-x text-base lg:text-xl pb-24 lg:pb-10">
          <div
            className="w-full h-full flex-shrink-0
            flex justify-center items-center snap-center"
          >
            <p className="flex text-center max-w-[80%] lg:max-w-[50%] relative text-grade-2">
              <Image src={Quote} alt="quotation" className="absolute w-7 lg:w-10 top-0 right-full -translate-y-1/4" />
              The experience of my space transformation is forever fresh, I
              wake up daily in my space forever thankful that I engaged Hamuj
              for the space design and finishing.
              <Image src={Quote} alt="quotation" className="absolute w-7 lg:w-10 bottom-0 left-full rotate-180 translate-y-1/4" />
              <span className="absolute w-full lg:w-auto top-[120%] lg:top-full right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 text-center text-sm">
                - <span className="text-grade-3 font-medium">Evelyn Edumoh</span><br />COO ARKLAND PROPERTIES
              </span>
            </p>
          </div>
          <div
            className="w-full h-full flex-shrink-0
            flex justify-center items-center snap-center"
          >
            <p className="flex text-center max-w-[80%] lg:max-w-[50%] relative text-grade-2">
              <Image src={Quote} alt="quotation" className="absolute w-7 lg:w-10 top-0 right-full -translate-y-1/4" />
              The experience of my space transformation is forever fresh, I
              wake up daily in my space forever thankful that I engaged Hamuj
              for the space design and finishing.
              <Image src={Quote} alt="quotation" className="absolute w-7 lg:w-10 bottom-0 left-full rotate-180 translate-y-1/4" />
              <span className="absolute w-full lg:w-auto top-[120%] lg:top-full right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 text-center text-sm">
                - <span className="text-grade-3 font-medium">Evelyn Edumoh</span><br />COO ARKLAND PROPERTIES
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-theme-1 z-20 flex flex-col gap-y-12 items-center justify-end h-64 lg:h-72">
        <h2 className="text-center text-[25px] lg:text-[32px] text-white font-bold">
          Let's create together
        </h2>
        <button className="text-white font-bold rounded-xl w-44 h-12 border-white duration-300 hover:shadow-[0px_0px_3px_3px_#ffffff50] border-2">
          Contact Us
        </button>
        <div className=" bg-white h-[2px] rounded-full w-full lg:w-1/2 opacity-70" />
      </section>
    </main>
  );
}
