import Image from "next/image";
import HeaderBg from "../../assets/rasters/hamuj1-2.jpg";
import { Metadata } from "next";
import Map from "./map";
import EnquiryForm from "./enquiryForm";
import Localisation from "./localisation";

export const metadata: Metadata = { 
  title: "Contact",
  description: "Make enquiries or endeavor to visit us at our main branch in Lagos, Nigeria.",
  icons: {
    icon: '/favicon.png'
  }
};

const Contact = () => {
  return (
    <main className="relative w-full h-auto min-h-lvh bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden bg-[#303030]">
        <Image
          src={HeaderBg}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            CONTACT
          </span>
          <span className="text-sm md:text-[20px] max-w-[90%] md:max-w-[70%] leading-[1.25]">
            Make enquiries or visit us at our main branch in Lagos, Nigeria.
          </span>
        </h1>
      </section>

      <section className="pt-[5rem] md:pt-top-spacing grid grid-cols-1 md:grid-cols-[42.5%_52.5%] gap-x-[5%] mb-[5rem]">
        <div className="flex flex-col gap-y-10 lg:gap-y-14 pl-7 pr-7 lg:pl-20 md:pr-0 text-base">
          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-grade-3 text-lg lg:text-xl">Whatsapp</span>
            <span className="text-grade-1 font-medium">
              <Localisation content="whatsapp"/>
            </span>
          </div>

          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-grade-3 text-lg lg:text-xl">Email</span>
            <span className="text-grade-1 font-medium">
              customerservice@hamujhomes.com
            </span>
          </div>

          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-grade-3 text-lg lg:text-xl">Location</span>
            <span className="text-grade-1 font-medium">
              <Localisation content="address"/>
            </span>
          </div>

          <Map />

        </div>

        <EnquiryForm />

      </section>
    </main>
  );
};

export default Contact;
