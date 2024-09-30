import Image from "next/image";
import Hero from "../../../assets/rasters/hamuj1-2.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMO Tenants",
  description:
    "HMO Tenants options",
  icons: {
    icon: "/favicon.png",
  },
};

const TenantsPage = () => {
  return (
    <main className="relative w-full h-auto min-h-lvh">
      <section className="relative flex justify-center items-center h-[250px] md:h-[400px] aspect-video w-full overflow-hidden bg-[#303030]">
        <Image
          src={Hero}
          alt="hero section background"
          className="w-full h-full object-cover brightness-[0.7] z-[1]"
        />
        <div className="z-[2] absolute w-full h-full bg-gradient-to-tr from-[#061843ad] to-[#2a2a2a00]" />

        <h1 className="absolute z-[3] w-full text-center flex flex-col gap-y-1 md:gap-y-3 items-center text-white">
          <span className="text-[25px] md:text-[40px] font-medium">
            HMO TENANTS
          </span>
          
        </h1>
      </section>
        {/* <HMO /> */}
    </main>
  );
};

export default TenantsPage;
