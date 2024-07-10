import Image from "next/image";
import LogoTitle from "@/assets/rasters/Hamuj_homes.png";
import HeroBg from "../assets/rasters/hamuj1.jpg";
import HeroBg2 from "../assets/rasters/hamuj3.jpg";
import GroupImage from "../assets/rasters/ImageShapes.png";
import GroupImageMb from "../assets/vectors/groupImage.svg";
import Furniture from "../assets/vectors/furniture.svg";
import Interiors from "../assets/vectors/interiors.svg";
import RealEstate from "../assets/vectors/real-estate.svg";
import Link from "next/link";
import Highlights from "@/components/projectHighlights";
import { title } from "process";


const highlights = [
  {
    image: HeroBg,
    title: 'Project 1',
    location: 'Lagos, Nigeria'
  },
  {
    image: HeroBg2,
    title: 'Project 2',
    location: 'Lagos, Nigeria'
  },
  {
    image: HeroBg,
    title: 'Project 3',
    location: 'Lagos, Nigeria'
  },
  {
    image: HeroBg2,
    title: 'Project 4',
    location: 'Lagos, Nigeria'
  },
  {
    image: HeroBg,
    title: 'Project 5',
    location: 'Lagos, Nigeria'
  },
  {
    image: HeroBg2,
    title: 'Project 6',
    location: 'Lagos, Nigeria'
  }
]

export default function Home() {
  return (
    <main className="page w-full h-auto overflow-x-hidden bg-slate-100">
      {/* Hero section */}
      <section className=" relative overflow-hidden h-screen max-h-[700px] w-full bg-[#021322e5] flex justify-center items-center overflow-x-hidden">
        <h1 className="absolute z-0 opacity-0">
          Hamuj Homes Ltd - Your go to option for interior renovations,
          furniture and construction
        </h1>
        <Image
          src={HeroBg2}
          alt="Hero section"
          className="hero1 h-full w-full object-cover absolute left-0 z-10"
        />
        <Image
          src={HeroBg}
          alt="Hero section"
          className="hero2 h-full w-full object-cover absolute left-0 z-[9]"
        />
        <Image
          src={LogoTitle}
          alt="Hamuj Homes"
          className="relative top-8 w-[90%] md:w-[480px] z-20"
        />
      </section>

      <section className="relative pt-top-spacing">
        <h2 className="text-center text-2xl md:text-heading text-grade-3 font-extrabold">
          Timely Luxurious Possibilities
        </h2>

        <div className="flex justify-center flex-wrap md:flex-nowrap gap-y-12 lg:gap-x-14 xl:gap-x-24 items-center mt-20">
          <Image
            src={GroupImage}
            alt="Interiors"
            className="w-[400px] xl:w-[600px] hidden md:block"
          />

          <Image
            src={GroupImageMb}
            alt="Interiors"
            className="w-full block md:hidden"
          />
          
          <p className="w-full md:w-[500px] flex-shrink-0 rounded-none md:rounded-lg bg-[#E8E8E8] md:bg-theme-1 leading-7 h-auto md:h-[370px] p-10 md:p-5 text-black md:text-white text-sm md:text-lg text-center md:text-left shadow-[20px_20px_0px_2px_#E8E8E8]">
            We are a Nigerian construction company aimed at bridging the gap
            between luxury and affordability.
            <br /> <br />
            We are dedicated to transforming your vision into reality, using the
            latest technology and sustainable practices.
            <br /> <br />
            We are <span className="font-bold">Hamuj</span>. You can trust us
            for all your construction needs, from interior renovations to new
            builds, and experience how our expertise and dedication set us apart
            from the rest.
          </p>
        </div>
      </section>

      <section className="pt-top-spacing">
        <h2 className="text-center text-2xl md:text-heading text-grade-3 font-bold">
          Our Business Units
        </h2>

        <div className="mt-20 max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-9 h-auto md:h-96 px-16 m-auto">
          <div className="h-auto py-7 md:py-0 md:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image src={Furniture} height={50} alt="Furniture svg icon" />
            <span className="text-2xl text-[#242424] font-bold">Furniture</span>
            <p className=" text-center text-grade-2 w-full md:w-60 px-2 md:px-0 h-32 flex items-center">
              Design, manufacture, restoration, custom solutions, expert
              craftsmanship and delivery of high-quality furniture for
              residential and commercial spaces.
            </p>
          </div>
          <div className="h-auto py-7 md:py-0 md:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image
              src={Interiors}
              height={50}
              alt="Interiors svg icon"
              className="scale-110"
            />
            <span className="text-2xl text-[#242424] font-bold">Interiors</span>
            <p className=" text-center text-grade-2 w-full md:w-60 px-2 md:px-0 h-32 flex items-center">
              Planning, and execution of stunning interiors for residential and
              commercial spaces, custom solutions, space optimization, etc.
            </p>
          </div>
          <div className="h-auto py-7 md:py-0 md:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
            <Image src={RealEstate} height={50} alt="Real Estate svg icon" />
            <span className="text-2xl text-[#242424] font-bold">
              Real Estate
            </span>
            <p className=" text-center text-grade-2 w-full md:w-60 px-2 md:px-0 h-32 flex items-center">
              Property development, sales, maintenance and management for
              residential and commercial clients.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-top-spacing px-5 pb-top-spacing bg-[#E8E8E8] mt-[10rem] md:mt-[15rem]">
        <h2 className="text-center text-2xl md:text-heading text-grade-3 font-bold">
          Featured Projects
        </h2>

        <Highlights projectData={highlights}/>
      </section>

      <section className="bg-theme-1 flex flex-col gap-y-10 items-center justify-end h-64">
        <h2 className="text-center text-[32px] text-white font-bold">
          Let's create together
        </h2>
        <button className="text-white font-bold rounded-xl w-44 h-12 border-white duration-300 hover:shadow-[0px_0px_3px_3px_#ffffff50] border-2">
          Contact Us
        </button>
        <div className=" bg-white h-[2px] rounded-full w-1/2 opacity-70" />
      </section>
    </main>
  );
}
