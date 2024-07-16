import { FC } from "react";
import Image from "next/image";
import Hero from "../../assets/rasters/hamuj1.jpg";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <main className="page h-screen overflow-y-scroll">
      <section className="relative top-14 md:top-16 flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.3] z-[2]"
        />
        <h1 className="absolute z-[3] text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">ABOUT US</span>
          <span className="text-sm md:text-[20px]">Who we are</span>
        </h1>
      </section>
    </main>
  );
};

export default About;
