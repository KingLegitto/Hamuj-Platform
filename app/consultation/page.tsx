import Image from "next/image";
import type { Metadata } from "next";
import Hero from "../../assets/rasters/hamuj1-2.jpg";
import Doc from "../../assets/vectors/document.svg";
import Link from "next/link";
import TransitionLink from "@/components/pageTransitions/transitionLink";

export const metadata: Metadata = {
  title: "Consultation",
  description: "Request professional consultation from the our team of experts",
  icons: {
    icon: "/favicon.png",
  },
};

const Consultation = () => {
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
            CONSULTATION
          </span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">
            Request professional consultation on your next project
          </span>
        </h1>
      </section>

      <section className=" py-top-spacing-s lg:py-top-spacing flex flex-col items-center gap-y-24 text-lg lg:text-xl">
        <div className="flex flex-col gap-y-7 items-center">
          <span className=" font-medium text-grade-2">
            *Click below to read the terms
          </span>
          <Link href="" className="relative">
            <Image
              src={Doc}
              alt="Document"
              className="scale-[0.7] lg:scale-[0.8]"
            />
            <span className="absolute top-[105%] left-1/2 -translate-x-1/2 text-xs lg:text-sm font-bold text-grade-2">
              Consult_T&Cs.pdf
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-y-3 lg:gap-y-7 font-medium text-grade-2 items-center">
          <span className="font-medium text-sm lg:text-base">Proceed?</span>
          <div className="flex gap-x-5 lg:gap-x-10 justify-center">
            <button className="w-16 lg:w-20 p-2 rounded-full text-center text-base lg:text-lg shadow-lg bg-white border hover:text-red-400 hover:font-medium hover:border-red-400">
              No
            </button>
            <TransitionLink href="/consultation/questionnaire" styles="w-16 lg:w-20 p-2 rounded-full text-center text-base lg:text-lg shadow-lg bg-white border hover:text-green-400 hover:font-medium hover:border-green-400">
              Yes
            </TransitionLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Consultation;
