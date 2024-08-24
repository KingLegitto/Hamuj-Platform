import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../sanityClient";
import Toast from "@/components/toast";

interface ProductDetailsProps {
  product: {
    category: string;
    title: string;
    price: number;
    colors: string[];
    description: string;
    images: {
      _key: string;
      asset: {
        _ref: string;
      };
      alt: string;
    }[];
  };
  setDetails: (details: any) => void;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product, setDetails }) => {
  const main = useRef<HTMLDivElement>(null);
  const [mainHeight, setMainHeight] = useState(0);
  const [initialTop, setInitialTop] = useState(0);
  const [toast, setToast] = useState(false);
  const [toastDetails, setToastDetails] = useState<any>({
    title: "",
    result: false,
    message: "",
  });

  useEffect(() => {
    if (main.current) {
      setMainHeight(main.current.clientHeight);
      setTimeout(() => {
        setInitialTop(main.current!.getBoundingClientRect().top);
      }, 550);
    }
  }, [main.current]);

  function handleDragEnd() {
    if (main.current && main.current.getBoundingClientRect().top > initialTop) {
      setDetails(null);
    }
  }

  return (
    <>
      <AnimatePresence>
        {toast && <Toast setToast={setToast} toastDetails={toastDetails} />}
      </AnimatePresence>
      {/* Dark translucent background */}
      <motion.section
        onClick={() => {
          setDetails(null);
        }}
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        exit={{ backgroundColor: "rgba(0,0,0,0)" }}
        className="fixed z-[88] w-screen h-dvh top-0 left-0 text-grade-3 text-sm lg:text-base"
      >
        {/* Main content */}
        <motion.div
          ref={main}
          onClick={(e) => {
            e.stopPropagation();
          }}
          initial={{ y: "100%", x: "-50%" }}
          animate={{ y: 0, transition: { duration: 0.5 } }}
          exit={{ y: "100%", transition: { duration: 0.5 } }}
          drag="y"
          dragConstraints={{ top: -(mainHeight - 525) }}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={() => handleDragEnd()}
          className="absolute w-full lg:w-[1000px] top-[calc(100dvh-525px)] lg:top-[calc(100vh-505px)] left-1/2 rounded-t-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-x-10 bg-[#e8e8e8] p-7"
        >
          <div className="lg:hidden absolute top-4 left-1/2 -translate-x-1/2 rounded-full w-1/5 lg:w-16 h-1 bg-[#8c8c8c]" />

          <div className="relative w-full aspect-square overflow-hidden border-x-[10px] lg:border-x-[0px] border-t-[10px] lg:border-t-[10px] lg:border-l-[10px] border-[#e8e8e8]">
            <Image
              src={urlFor(product.images[0].asset).url()}
              alt={product.images[0].alt}
              fill
              sizes="(max-width: 1023px) 95vw, (min-width: 1024px) 33vw"
              className={`object-cover group-hover:lg:scale-[1.05] duration-500 rounded-tl-3xl rounded-3xl rounded-tr-3xl lg:rounded-tl-3xl`}
            />
          </div>

          <div className="w-full pt-6 lg:pt-10 flex flex-col gap-y-4 lg:gap-y-5">
            <div className="uppercase text-base lg:text-xl font-medium text-grade-3 text-center lg:text-left">
              {product.title}
            </div>

            <div
              className="w-3/4 h-[1px] mx-auto rounded-full translate-y-1"
              style={{
                background:
                  "linear-gradient(to right, #d0d0d0, #c5c5c5 ,#d0d0d0",
              }}
            />
            <div className="flex gap-x-7 items-center justify-center">
              <span className="font-bold text-base lg:text-lg text-theme-1">
                ₦ {parseInt(product.price.toFixed(2)).toLocaleString()}
              </span>
              <button className="py-3 px-4 rounded-md bg-green-500 text-white font-normal"
              onClick={()=>{
                setToast(true);
                setToastDetails({title: 'Feature in development', result: 'deny', message: 'This feature is unavailable at the moment'})
              }}>
                Enquire now
              </button>
            </div>
            <div
              className="w-3/4 h-[1px] mx-auto rounded-full -translate-y-1"
              style={{
                background:
                  "linear-gradient(to right, #d0d0d0, #c5c5c5 ,#d0d0d0",
              }}
            />

            {product.colors && (
              <div className="flex flex-col gap-y-1 text-grade-2">
                <span className="font-medium w-full text-sm text-grade-3">
                  COLOURS
                </span>
                {product.colors.map((color, index) => {
                  return (
                    <button key={index} className="capitalize px-2 border border-[#d8d8d8] hover:bg-[#d8d8d8] w-fit rounded-full">
                      {color}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="flex flex-col gap-y-1 text-grade-2">
              <span className="font-medium w-full text-sm text-grade-3">
                DESCRIPTION
              </span>
              <p className=" hyphens-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                repellat, illum possimus harum, nam ullam quasi culpa hic,
                libero quisquam minima modi doloremque magni atque iure
                reprehenderit praesentium necessitatibus. Iste.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ProductDetails;
