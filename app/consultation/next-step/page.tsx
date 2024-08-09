"use client";
import Image from "next/image";
import Hero from "../../../assets/rasters/hamuj1-2.jpg";

const NextStep = () => {
  return (
    <main className="relative w-full h-auto min-h-lvh">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            NEXT STEPS
          </span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">Carry on with the consultation</span>
        </h1>
      </section>

      <section className="mx-auto bg-white text-sm md:text-base flex flex-col justify-center items-center gap-y-10 rounded-[70px] lg:rounded-3xl border-[3px] text-grade-3 border-[#e8e8e8] p-5 lg:p-16 w-[95%] md:w-[70%] h-[55vh] lg:h-[70vh] max-h-[500px] shadow-lg text-center my-[10rem]">
        <h2 className="font-normal text-lg md:text-xl text-grade-3">
          Your request has been placed successfully
        </h2>

        <div className="flex flex-col gap-y-3 text-center">
          <span>
            To carry on with the consultations, follow the steps stated in the
            email sent to you.
          </span>

          <span>
            If any issues send an enquiry in the contact page or call +234
            8061999995.
          </span>

          <span className="w-full text-center">Thank you for choosing Hamuj Homes.</span>
        </div>
      </section>
    </main>
  );
};

export default NextStep;
