import Image from "next/image";
import Logo from '../assets/rasters/Hamuj_homes_logo.png'
import LogoTitle from "../public/rasters/Hamuj_homes.png";
import HeroBg from "../public/rasters/hero1.webp";
import HeroBg_2 from "../public/rasters/hero2.webp";
import HeroBg_3 from "../public/rasters/hero3.webp";
import Furniture from "../public/vectors/furniture.svg";
import Interiors from "../public/vectors/interiors.svg";
import Construction from "../assets/vectors/construction.svg"
import Shortlets from "../public/vectors/real-estate.svg";
import DecorImages from "./decorImages";
import Hero from "./landingHero";
import Highlights from "./projectHighlights";
import Testimonials from "./testimonials";

const heroImages = [HeroBg, HeroBg_2, HeroBg_3];

export default function Home() {
  
  return (
    <main className="page relative w-full h-auto overflow-x-hidden bg-slate-50">
      {/* Hero section */}
      <section className=" relative z-20 overflow-hidden h-[90svh] lg:h-screen max-h-[700px] w-full bg-gradient-to-tr from-[#000000] to-[#011c2a] flex justify-center items-center overflow-x-hidden">
        <h1 className="absolute z-0 opacity-0">
          Hamuj Homes Ltd - Your go to option for interior renovations,
          furniture and construction
        </h1>

        <Hero images={heroImages}/>

        <Image
          src={LogoTitle}
          alt="Hamuj Homes"
          className="relative top-5 lg:top-8 w-[80%] md:w-[400px] lg:w-[480px] z-20"
        />
      </section>

      <section className="relative z-20 pt-top-spacing-s lg:pt-top-spacing max-failsafe">
        <h2 className="text-center text-2xl md:text-3xl lg:text-heading text-grade-3 font-extrabold px-5">
          Timely Luxurious Possibilities
        </h2>

        <div className="flex justify-center h-auto lg:h-[490px] lg:px-5 flex-wrap lg:flex-nowrap gap-y-12 lg:gap-x-10 xl:gap-x-24 items-center mt-12 lg:mt-20">

          <DecorImages />

          <p className="w-full lg:w-[550px] flex-shrink-0 rounded-none lg:rounded-lg bg-[#E8E8E8] lg:bg-theme-1 leading-7 h-auto lg:h-[370px] p-10 md:px-40 lg:p-7 text-black lg:text-white text-sm md:text-lg text-center lg:text-left shadow-[20px_20px_0px_2px_#E8E8E8]">
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
        <h2 className="text-center text-2xl md:text-3xl lg:text-heading text-grade-3 font-bold px-5">
          Our Business Units
        </h2>

        <div className="mt-10 lg:mt-20 w-[80%] md:w-[60%] lg:w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 grid-rows-[repeat(auto-fit,minmax(0px,min-content))] gap-y-10 gap-x-9 h-auto px-0 lg:px-16 m-auto">
          <a href="/shop">
            <div className="h-auto bg-slate-50 py-7 px-3 lg:px-0 shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
              <Image src={Furniture} height={50} alt="Furniture" />
              <span className="text-lg lg:text-2xl text-[#242424] font-bold">
                Furniture
              </span>
              <p className=" text-center text-sm lg:text-base text-grade-2 w-full lg:w-60 px-2 lg:px-0 h-28 lg:h-32 flex items-center">
                Design, manufacture, restoration, custom solutions, expert
                craftsmanship and delivery of high-quality furniture for
                residential and commercial spaces.
              </p>
            </div>
          </a>

          <a href="/portfolio">
            <div className="h-auto bg-slate-50 py-7 px-3 lg:px-0 lg:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
              <Image
                src={Interiors}
                height={50}
                alt="Interiors"
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
          </a>
          
          <a href="/portfolio?type=construction">
            <div className="h-auto bg-slate-50 py-7 lg:py-0 px-3 lg:px-0 lg:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
              <Image src={Construction} height={50} alt="construction" className="scale-110"/>
              <span className="text-lg lg:text-2xl text-[#242424] font-bold">
                Construction
              </span>
              <p className=" text-center text-sm lg:text-base text-grade-2 w-full lg:w-60 px-2 lg:px-0 h-24 lg:h-32 flex items-center">
                Property development, repair, and renovations for
                residential and commercial structures.
              </p>
            </div>
          </a>

            <a href="/properties">
              <div className="h-auto bg-slate-50 py-7 px-3 lg:px-0 lg:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
                <Image src={Logo} height={50} alt="Furniture" className="scale-[1.2]"/>
                <span className="text-lg lg:text-2xl text-[#242424] font-bold">
                  Properties
                </span>
                <p className=" text-center text-sm lg:text-base text-grade-2 w-full lg:w-60 px-2 lg:px-0 h-28 lg:h-32 flex items-center">
                  Aside development of properties for individuals (residential & commercial), we also have numbers of our own residential development across Nigeria. 
                </p>
              </div>
            </a>
          

            <div className="h-auto bg-slate-50 py-7 px-3 lg:px-0 lg:h-full shadow-[15px_15px_0px_2px_#E8E8E8] flex flex-col justify-center items-center gap-y-5">
              <Image src={Shortlets} height={50} alt="Furniture svg icon" />
              <span className="text-lg lg:text-2xl text-[#242424] font-bold">
                Shortlets
              </span>
              <p className=" text-center text-sm lg:text-base text-grade-2 w-full lg:w-60 px-2 lg:px-0 h-28 lg:h-32 flex items-center">
                We have created magical spaces to spark love, joy, happiness and reunion between you and your loved ones. We would love to host you.
              </p>
            </div>
          
        </div>
      </section>

      <section className="relative pt-top-spacing-s lg:pt-top-spacing z-20 lg:px-5 pb-[5rem] lg:pb-top-spacing bg-[#E8E8E8] mt-[10rem] lg:mt-[15rem]">
      <div className="hidden lg:block w-[12rem] h-[4rem] bg-[#E8E8E8] absolute bottom-full right-10" />
      <div className="hidden lg:block w-[10rem] h-[5rem] bg-[#E8E8E8] absolute bottom-[calc(100%+2rem)] right-3/4" />
        <h2 className="text-center text-2xl md:text-3xl lg:text-heading text-grade-3 font-bold px-5 mb-10 lg:mb-0">
          Featured Projects
        </h2>
        <Highlights />
      </section>

      <Testimonials />

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
