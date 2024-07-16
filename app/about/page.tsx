import { FC } from "react";
import Image from "next/image";
import Hero from "../../assets/rasters/hamuj1-2.jpg";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <main className="overflow-y-clip relative w-full h-auto">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-t from-[#00000052] to-[#00000000]" />
        <h1 className="absolute z-[3] text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            ABOUT US
          </span>
          <span className="text-sm md:text-[20px]">Who we are</span>
        </h1>
      </section>

      <section className="h-screen w-full"></section>
    </main>
  );
};

export default About;
