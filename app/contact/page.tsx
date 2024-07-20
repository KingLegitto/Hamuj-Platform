"use client"
import { FC } from "react";
import Image from "next/image";
import Hero from "../../assets/rasters/hamuj1-2.jpg";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <main className="relative w-full h-auto bg-slate-50">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden">
        <Image
          src={Hero}
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

      <section className="pt-top-spacing-s md:pt-top-spacing grid grid-cols-1 md:grid-cols-[42.5%_52.5%] gap-x-[5%] mb-[5rem]">
        <div className="flex flex-col gap-y-14 pl-7 pr-7 md:pl-20 md:pr-0">
          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-grade-3 text-xl">Whatsapp</span>
            <span className="text-grade-1 font-medium text-base">
              +234 8061999995
            </span>
          </div>

          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-grade-3 text-xl">Email</span>
            <span className="text-grade-1 font-medium text-base">
              hamujhomesltd.1@gmail.com
            </span>
          </div>

          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-grade-3 text-xl">Location</span>
            <span className="text-grade-1 font-medium text-base">
              1637, Ibukun House Ademola <br /> Adetokunbo, Opposite Eko Hotel,
              <br /> Victoria Island, Lagos, Nigeria
            </span>
          </div>

          <div className="w-full flex-grow bg-[#E8E8E8] p-1 rounded-2xl">
            <iframe
              className="border-none w-full h-60 md:h-full rounded-2xl"
              id="gmap_canvas"
              allow="geolocation"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ibukun%20house,%20victoria%20island%20Lagos+(Hamuj%20Homes%20Ltd)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>

        <form className="hidden md:flex flex-col gap-y-20 text-lg font-normal pr-20">
          <input
            type="text"
            placeholder="Name"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="email"
            placeholder="Email"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="text"
            placeholder="Phone"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <textarea
            rows={4}
            placeholder="Enquiry"
            className="py-4 px-6 border-[1px] border-[#8C8C8C]"
          />
          <input
            type="submit"
            value={"Send Enquiry"}
            className="bg-theme-1 text-white py-3 w-1/3 font-medium"
          />
        </form>
      </section>
    </main>
  );
};

export default Contact;
