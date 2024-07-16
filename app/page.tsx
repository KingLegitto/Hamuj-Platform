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

const heroImages = [HeroBg,HeroBg6,HeroBg3,]

export default function Home() {

  return (
    <main className="page overflow-y-clip relative w-full h-auto overflow-x-hidden bg-slate-50">
      {/* Hero section */}
      <section className=" relative z-20 overflow-hidden h-[90svh] md:h-screen max-h-[700px] w-full bg-[#101010] flex justify-center items-center overflow-x-hidden">
        <h1 className="absolute z-0 opacity-0">
          Hamuj Homes Ltd - Your go to option for interior renovations,
          furniture and construction
        </h1>

        <Hero images={heroImages} />
        
        <Image
          src={LogoTitle}
          alt="Hamuj Homes"
          className="relative top-8 w-[80%] md:w-[480px] z-20"
        />
      </section>

      <section className="relative z-20 pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-center text-2xl md:text-heading text-grade-3 font-extrabold px-5">
          Timely Luxurious Possibilities
        </h2>

        <div className="flex justify-center flex-wrap md:flex-nowrap gap-y-12 lg:gap-x-14 xl:gap-x-24 items-center mt-12 lg:mt-20">
          <Image
            src={GroupImage}
            alt="Interiors"
            className="w-[350px] xl:w-[550px] hidden md:block"
          />

          <Image
            src={GroupImageMb}
            alt="Interiors"
            className="w-[90%] block md:hidden"
          />

          <p className="w-full md:w-[500px] flex-shrink-0 rounded-none md:rounded-lg bg-[#E8E8E8] md:bg-theme-1 leading-7 h-auto md:h-[370px] p-10 md:p-5 text-black md:text-white text-sm md:text-lg text-center md:text-left shadow-[20px_20px_0px_2px_#E8E8E8]">
            We are a Nigerian construction company aimed at bridging the gap
            between luxury and affordability.
            <br /> <br />
            We are dedicated to transforming your vision into reality, using the
            latest technology and sustainable practices.
            <br /> <br />
            We are <span className="font-bold underline underline-offset-[5px] decoration-[#F49D02] decoration-[3px]">Hamuj</span>. You can trust us
            for all your construction needs, from interior renovations to new
            builds, and experience how our expertise and dedication set us apart
            from the rest.
          </p>
        </div>
      </section>

      <section className="pt-top-spacing-s md:pt-top-spacing relative z-20">
        <h2 className="text-center text-2xl md:text-heading text-grade-3 font-bold px-5">
          Our Business Units
        </h2>

        <div className="mt-10 md:mt-20 w-[80%] md:w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-9 h-auto md:h-96 px-0 md:px-16 m-auto">
          <div className="h-auto bg-slate-50 py-7 md:py-0 px-3 md:px-0 md:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image src={Furniture} height={50} alt="Furniture svg icon" />
            <span className="text-lg md:text-2xl text-[#242424] font-bold">
              Furniture
            </span>
            <p className=" text-center text-sm md:text-base text-grade-2 w-full md:w-60 px-2 md:px-0 h-28 md:h-32 flex items-center">
              Design, manufacture, restoration, custom solutions, expert
              craftsmanship and delivery of high-quality furniture for
              residential and commercial spaces.
            </p>
          </div>
          <div className="h-auto bg-slate-50 py-7 md:py-0 px-3 md:px-0 md:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image
              src={Interiors}
              height={50}
              alt="Interiors svg icon"
              className="scale-110"
            />
            <span className="text-lg md:text-2xl text-[#242424] font-bold">
              Interiors
            </span>
            <p className=" text-center text-sm md:text-base text-grade-2 w-full md:w-60 px-2 md:px-0 h-24 md:h-32 flex items-center">
              Planning, and execution of stunning interiors for residential and
              commercial spaces, custom solutions, space optimization, etc.
            </p>
          </div>
          <div className="h-auto bg-slate-50 py-7 md:py-0 px-3 md:px-0 md:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image src={RealEstate} height={50} alt="Real Estate svg icon" />
            <span className="text-lg md:text-2xl text-[#242424] font-bold">
              Real Estate
            </span>
            <p className=" text-center text-sm md:text-base text-grade-2 w-full md:w-60 px-2 md:px-0 h-24 md:h-32 flex items-center">
              Property development, sales, maintenance and management for
              residential and commercial clients.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-top-spacing-s md:pt-top-spacing z-20 lg:px-5 pb-[5rem] md:pb-top-spacing bg-[#E8E8E8] mt-[10rem] md:mt-[15rem]">
        <h2 className="text-center text-2xl md:text-heading text-grade-3 font-bold px-5 mb-10 md:mb-0">
          Featured Projects
        </h2>
        <Highlights projectData={highlights} />
      </section>

      <section className="bg-theme-1 z-20 flex flex-col gap-y-12 items-center justify-end h-64 md:h-72">
        <h2 className="text-center text-[25px] md:text-[32px] text-white font-bold">
          Let's create together
        </h2>
        <button className="text-white font-bold rounded-xl w-44 h-12 border-white duration-300 hover:shadow-[0px_0px_3px_3px_#ffffff50] border-2">
          Contact Us
        </button>
        <div className=" bg-white h-[2px] rounded-full w-3/4 md:w-1/2 opacity-70" />
      </section>
    </main>
  );
}
