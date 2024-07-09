import Image from "next/image";
import LogoTitle from "@/assets/images/Hamuj_homes_title.png"
import HeroBg from "../assets/images/hamuj1.jpg"
import HeroBg2 from "../assets/images/hamuj3.jpg"
import GroupImage from "../assets/images/ImageShapes.png"

export default function Home() {
  return (
    <main className="page w-full h-auto overflow-x-hidden">
      {/* Hero section */}
      <section className=" relative overflow-hidden h-screen w-full bg-[#021322e5] flex justify-center items-center overflow-x-hidden">
        <h1 className="absolute z-0 opacity-0">Hamuj Homes Ltd - Your go to option for interior renovations, furniture and construction</h1>
        <Image src={HeroBg2} alt="Hero section" className="hero1 h-full w-full object-cover absolute left-0 z-10" />
        <Image src={HeroBg} alt="Hero section" className="hero2 h-full w-full object-cover absolute left-0 z-[9]" />
        <Image src={LogoTitle} alt="Hamuj Homes" className="relative top-8 w-[480px] z-20"/>
      </section>

      <section className="relative pt-top-spacing">
        <h2 className="text-center text-heading text-grade-3 font-extrabold">Timely Luxurious Possibilities</h2>

        <div className="flex justify-center gap-x-24 items-center mt-20">
          <Image src={GroupImage} alt="Interiors" />
          <div className="w-[500px] rounded-lg bg-theme-1 leading-7 h-[370px] p-5 text-white text-lg shadow-[20px_20px_0px_2px_#E8E8E8]">
          We are a Nigerian construction company aimed at bridging the gap between luxury and affordability. 
          <br /> <br />
          We are dedicated to transforming your vision into reality, using the latest technology and sustainable practices.
          <br /> <br />
          We are <span className="font-bold">Hamuj</span>. You can trust us for all your construction needs, from interior renovations to new builds, and experience how our expertise and dedication set us apart from the rest.

          </div>
        </div>
        
      </section>

      <section className="pt-top-spacing">
        <h2 className="text-center text-heading text-grade-3 font-bold">Our Business Units</h2>

        <div className="mt-20 max-w-[1400px] grid grid-cols-3 gap-x-9 h-96 px-16 m-auto">
          <div className="h-full shadow-[15px_15px_0px_2px_#E8E8E8]">

          </div>
          <div className="h-full shadow-[15px_15px_0px_2px_#E8E8E8]">

          </div>
          <div className="h-full shadow-[15px_15px_0px_2px_#E8E8E8]">

          </div>
        </div>
      </section>

      <section className="pt-top-spacing bg-[#E8E8E8] mt-[20rem]">
        <h2 className="text-center text-heading text-grade-3 font-bold">Featured Projects</h2>
      </section>

      <section className="bg-theme-1 flex flex-col gap-y-10 items-center justify-end h-64 translate-y-[1px]">
        <h2 className="text-center text-[32px] text-white font-bold">Let's create together</h2>
        <button className="text-white">Contact Us</button>
        <hr className=" border-white w-1/2 opacity-50"/>
      </section>

      <footer className="bg-theme-1 h-40">

      </footer>
      
    </main>
  );
}
