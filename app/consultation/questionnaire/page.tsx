import Image from "next/image";
import Hero from "../../../assets/rasters/hamuj1-2.jpg";

const Questionnaire = () => {
  return (
    <main className="relative w-full h-auto bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            QUESTIONNAIRE
          </span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">
            Please fill the form below
          </span>
        </h1>
      </section>

      <section className="w-full max-failsafe pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-lg md:text-2xl text-grade-3 pl-5 md:pl-20">
          <span className="relative font-bold">
            PERSONAL DETAILS
            <div className="h-[2px] w-[120%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>
      </section>

      <section className="mb-10 w-full max-failsafe pt-top-spacing-s md:pt-top-spacing">
        <h2 className="text-lg md:text-2xl text-grade-3 pl-5 md:pl-20">
          <span className="relative font-bold">
            PROJECT DETAILS
            <div className="h-[2px] w-[120%] absolute bg-theme-2 -bottom-3 left-0" />
          </span>
        </h2>
      </section>
    </main>
  );
};

export default Questionnaire;
