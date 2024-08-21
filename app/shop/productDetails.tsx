import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../sanityClient";

interface ProductDetailsProps {
  product: {
    category: string;
    title: string;
    price: number;
    description: string;
    images: {
      _key: string;
      asset: {
        _ref: string;
      };
      alt: string;
    }[];
  };
  setDetails: (details: any)=>void
}

const ProductDetails: FC<ProductDetailsProps> = ({product, setDetails}) => {
  return (
    <motion.section onClick={()=>{setDetails(null)}}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      exit={{ backgroundColor: "rgba(0,0,0,0)" }}
      className="fixed z-[89] w-screen h-dvh top-0 left-0 overflow-y-scroll touch-none text-grade-3 text-sm lg:text-base"
    >
      <motion.div onClick={(e)=>{e.stopPropagation()}}
        initial={{ y: "100%", x: '-50%'}}
        animate={{ y: 0, transition:{delay: 0.3, duration:0.5}}}
        exit={{ y: "100%", transition:{duration:0.5}}}
        className="absolute w-full lg:w-[1000px] bottom-0 left-1/2 rounded-t-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-x-5 bg-[#e8e8e8] p-7"
      >

        <div className="lg:hidden absolute top-4 left-1/2 -translate-x-1/2 rounded-full w-1/5 lg:w-16 h-1 bg-[#8c8c8c]"/>

        <div className="relative w-full aspect-square overflow-hidden border-x-[10px] lg:border-x-[0px] border-t-[10px] lg:border-t-[10px] lg:border-l-[10px] border-[#e8e8e8]">
            <Image src={urlFor(product.images[0].asset).url()} 
                alt={product.images[0].alt}
                fill
                sizes="(max-width: 1023px) 95vw, (min-width: 1024px) 33vw"
                className={`object-cover group-hover:lg:scale-[1.05] duration-500 rounded-tl-3xl rounded-3xl rounded-tr-3xl lg:rounded-tl-3xl`}/>
        </div>
        
        <div className="w-full pt-10 flex flex-col gap-y-3">
            <div className="uppercase text-lg lg:text-xl font-medium text-center lg:text-left">
                {product.title}
            </div>

            <div className="flex gap-x-7 items-center justify-center lg:justify-start ">
                <span className="font-bold text-base lg:text-lg text-theme-1">₦ {parseInt(product.price.toFixed(2)).toLocaleString()}</span>
                <button className="py-3 px-4 rounded-md bg-green-500 text-white font-normal">Enquire now</button>
            </div>

            
        </div>

      </motion.div>
    </motion.section>
  );
};

export default ProductDetails;
