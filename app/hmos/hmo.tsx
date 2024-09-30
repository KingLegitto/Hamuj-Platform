'use client'

import Image from "next/image";
import Landlord from "../../assets/rasters/HmoPage/70ff581a80bf5ad481b911914df74419298f0db7-1308x872.webp";
import Investors from "../../assets/rasters/HmoPage/800a09457bb0826c25ce39f1afaa51033fef665b-1382x922.webp";
import COR from "../../assets/rasters/HmoPage/9979a255d80b99fcfd1d003c1ee1fc81654d3b85-1253x835.webp";
import HM from "../../assets/rasters/HmoPage/d833401447bdd0977a3b00ac233cad9a3c8ca49e-1370x914.webp";
import TransitionLink from "@/components/pageTransitions/transitionLink";


const HMO = () => {
    return ( 
        <div className="mt-0 mb-20 lg:mb-40 w-[90%] md:w-[60%] lg:w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(auto-fit,minmax(0px,min-content))] gap-y-10 lg:gap-y-20 gap-x-9 h-auto px-0 lg:px-16 m-auto">
            
            <div className="relative px-4 lg:px-20 text-white text-sm lg:text-base group shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[15px_15px_0px_2px_#E8E8E8] w-full aspect-[1.5/1] lg:aspect-[1.7/1] rounded-lg flex flex-col justify-center items-center gap-2 lg:gap-y-3 overflow-hidden">
                <Image src={Landlord} alt="img" fill className=" object-cover brightness-50 lg:group-hover:scale-110 duration-500"/>
                <span className="relative font-medium text-xl lg:text-3xl z-10">LANDLORDS</span>
                <p className="relative z-10 text-center font-normal lg:font-medium leading-[1.3]">HMO owner looking to transform and maximize your propery's value and potential? We have you covered.</p>
                <TransitionLink href="/hmos/landlords"><button className=" mt-3 bg-theme-1 relative z-10 w-[200px] lg:w-[300px] py-1 lg:py-2 outline outline-1 outline-white hover:outline-2">Explore</button></TransitionLink>
            </div>
            <div className="relative px-4 lg:px-20 text-white text-sm lg:text-base group shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[15px_15px_0px_2px_#E8E8E8] w-full aspect-[1.5/1] lg:aspect-[1.7/1] rounded-lg flex flex-col justify-center items-center gap-2 lg:gap-y-3 overflow-hidden">
                <Image src={Investors} alt="img" fill className=" object-cover brightness-50 lg:group-hover:scale-110 duration-500"/>
                <span className="relative font-medium text-xl lg:text-3xl z-10">TENANTS</span>
                <p className="relative z-10 text-center font-normal lg:font-medium leading-[1.3]">Seeking quality HMO living with trusted management, this is for you. </p>
                <TransitionLink href="/hmos/tenants"><button className=" mt-3 bg-theme-1 relative z-10 w-[200px] lg:w-[300px] py-1 lg:py-2 outline outline-1 outline-white hover:outline-2">Explore</button></TransitionLink>            
            </div>
            
        </div>
     );
}
 
export default HMO;