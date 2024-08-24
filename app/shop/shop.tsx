"use client";
import TransitionLink from "@/components/pageTransitions/transitionLink";
import { hyphenate } from "@/utils/hyphenationForRoutes";
import Filter from "../../assets/vectors/filter.svg";
import Arrow from "../../assets/vectors/lineArrow.svg";
import { client, urlFor } from "../../sanityClient";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductDetails from "./productDetails";
import { AnimatePresence } from "framer-motion";

interface ProductsDataProps {
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
}

const Shop = () => {
  const [productsData, setProductsData] = useState<ProductsDataProps[]>([]);
  const [details, setDetails] = useState<ProductsDataProps | null>(null)
  const [filters, setFilters] = useState<string[]>([]);
  const [filterBox, setFilterBox] = useState<{
    isOpen: boolean;
    filter: string | null;
  }>({ isOpen: false, filter: null });

  useEffect(() => {
    const productsInMemory = sessionStorage.getItem("products");
    if (productsInMemory) {
      setProductsData(JSON.parse(productsInMemory));
    } else {
      const fetchProjects = async () => {
        const query = '*[_type == "productListing"]';
        const data = await client.fetch(query);
        setProductsData(data);
        sessionStorage.setItem("products", JSON.stringify(data));
        // setLoading(false);
      };
      fetchProjects();
    }
  }, []);

  useEffect(() => {
    let categories: string[] = [];
    productsData.forEach((product) => categories.push(product.category));
    let filteredStates = categories.filter(
      (category, index, arr) => index === arr.indexOf(category)
    );
    setFilters([...filteredStates]);
  }, [productsData]);

  return (
    <section className="max-failsafe w-full flex flex-col gap-y-10 py-16 lg:py-top-spacing overflow-x-hidden">
      <div className="w-[90%] lg:w-[700px] flex border-2 border-[#e8e8e8] rounded-xl h-9 lg:h-12 px-4 mx-auto overflow-hidden
      hover:border-[#aaaaaa]">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search products..."
          className="h-full flex-grow focus:outline-none bg-slate-50 text-sm lg:text-base"
        />
      </div>

      <div className="text-xs md:text-base">
        <div className="text-center mb-2 uppercase text-grade-2">Categories</div>

        <div className="flex justify-center items-center gap-x-3 text-grade-3">
        <button className="w-14 lg:w-16 py-1 hover:bg-[#e8e8e8] font-normal rounded-full border">All</button>
        <button className="w-14 lg:w-16 py-1 hover:bg-[#e8e8e8] font-normal rounded-full border">New</button>
          {filters.map((category)=>{
            return(
              <button className="w-14 lg:w-16 py-1 hover:bg-[#e8e8e8] font-normal rounded-full border">{category}</button>
            )
          })}
        </div>
      </div>

      <section className="w-full pb-7 px-5 lg:px-10 overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-8 gap-y-10 lg:gap-y-14">

        {productsData.map((product, index) => {
          if (filterBox.filter && product.title != filterBox.filter) return;
          return (
            <div
              key={index} onClick={()=>{setDetails(product)}}
              className={`w-full p-2 md:p-4 border-[#0000001A] border-[1px] hover:lg:border-[#b5b5b5] group flex-shrink-0 rounded-lg lg:rounded-xl shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[17px_17px_0px_2px_#0000001A] 
               hover:lg:shadow-[17px_17px_0px_2px_#b5b5b5] overflow-hidden duration-300 cursor-pointer`}
            >

              <div className="w-full aspect-[1/0.8] mx-auto relative rounded-lg lg:rounded-xl overflow-hidden mb-2 md:mb-4">
                <Image
                  src={urlFor(product.images[0].asset).url()}
                  alt={product.images[0].alt}
                  fill
                  sizes="(max-width: 1023px) 95vw, (min-width: 1024px) 33vw"
                  className={`object-cover group-hover:lg:scale-[1.05] duration-500`}
                />
              </div>
              
              <div
                className={`w-full flex flex-col  gap-y-1 justify-center text-xs md:text-base min-h-14
                `}
              >
                <span className="font-medium uppercase text-grade-3">
                  {product.title}
                </span>
                <span className="font-bold text-theme-1">
                  ₦ {parseInt(product.price.toFixed(2)).toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </section>
      <AnimatePresence>
        {details && <ProductDetails product={details} setDetails={setDetails}/>}
      </AnimatePresence>
    </section>
  );
};

export default Shop;
