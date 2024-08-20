"use client";
import TransitionLink from "@/components/pageTransitions/transitionLink";
import { hyphenate } from "@/utils/hyphenationForRoutes";
import Filter from "../../assets/vectors/filter.svg";
import Arrow from "../../assets/vectors/lineArrow.svg";
import { client, urlFor } from "../../sanityClient";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductsDataProps {
  category: string;
  title: string;
  price: string;
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
    let states: string[] = [];
    productsData.forEach((product) => states.push(product.title));
    let filteredStates = states.filter(
      (state, index, arr) => index === arr.indexOf(state)
    );
    setFilters([...filteredStates]);
  }, [productsData]);

  return (
    <section className="max-failsafe w-full flex flex-col gap-y-10 py-16 lg:py-top-spacing overflow-x-hidden">
      <div className="w-[90%] lg:w-[700px] flex border-2 border-[#e8e8e8] rounded-xl h-12 px-4 mx-auto overflow-hidden">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search products..."
          className="h-full flex-grow focus:outline-none"
        />
      </div>

      <section className="w-full lg:pb-top-spacing px-5 lg:px-10 overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-8 gap-y-10 lg:gap-y-14">
        

        {productsData.map((product, index) => {
          if (filterBox.filter && product.title != filterBox.filter) return;
          return (
            <div
              key={index}
              className={`w-full aspect-square group flex-shrink-0 rounded-xl shadow-[10px_10px_0px_2px_#0000001A] lg:shadow-[17px_17px_0px_2px_#0000001A] 
               hover:lg:shadow-[17px_17px_0px_2px_#b5b5b5] relative overflow-hidden duration-300 cursor-pointer bg-[#e8e8e8]`}
            >
              <Image
                src={urlFor(product.images[0].asset).url()}
                alt={product.images[0].alt}
                fill
                sizes="(max-width: 1023px) 95vw, (min-width: 1024px) 33vw"
                className={`object-cover group-hover:lg:scale-[1.1] duration-500`}
              />
              <div
                className={`text-white bg-gradient-to-t from-[#080808bd] to-[#08080800] h-1/3 absolute bottom-0 px-2 lg:px-5 w-full flex flex-col justify-center
                `}
              >
                <span className="font-medium text-base lg:text-lg truncate">
                  {product.title}
                </span>
                <span className="font-normal text-xs md:text-base truncate max-w-[90%]">
                  ₦ {product.price}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Shop;
