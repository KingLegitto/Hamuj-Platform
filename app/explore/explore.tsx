"use client";
import TransitionLink from "@/components/pageTransitions/transitionLink";
import { hyphenate } from "@/utils/hyphenationForRoutes";
import Filter from "../../assets/vectors/filter.svg";
import Arrow from "../../assets/vectors/lineArrow.svg";
import { client, urlFor } from "../../sanityClient";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductsDataProps {
  tag: string;
  description: string;
  images: {
    _key: string;
    asset: {
      _ref: string;
    };
    alt: string;
  }[];
}

const Explore = () => {
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
    productsData.forEach((product) => states.push(product.tag));
    let filteredStates = states.filter(
      (state, index, arr) => index === arr.indexOf(state)
    );
    setFilters([...filteredStates]);
  }, [productsData]);

  return (
    <section className="max-failsafe w-full py-top-spacing-s lg:py-top-spacing overflow-x-hidden">
      <div className="w-[90%] lg:w-[700px] flex border-2 border-[#e8e8e8] rounded-xl h-12 px-4 mx-auto overflow-hidden">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search products..."
          className="h-full flex-grow focus:outline-none"
        />
      </div>

      <section className="w-full pb-top-spacing-s lg:pb-top-spacing px-7 lg:px-10 overflow-x-hidden grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-14">
        <div className="lg:col-span-3 bg-slate-50 sticky -translate-x-1 top-14 lg:top-16 py-5 z-20 w-[110%] mb-2">
          <button
            className="relative flex gap-x-2 items-center"
            onClick={() => {
              setFilterBox({
                isOpen: !filterBox.isOpen,
                filter: filterBox.filter,
              });
            }}
          >
            <Image src={Filter} alt="filter" />
            <span className="text-sm lg:text-base">Filters</span>
            <span className="absolute left-0 top-[110%] w-[150%] h-[2px] rounded-full bg-theme-2"></span>
          </button>
          {/* filter Container */}
          {filterBox.isOpen && (
            <div
              className="absolute left-0 top-full -translate-y-1 rounded-2xl grid grid-cols-3 
        gap-x-2 gap-y-4 px-5 py-5 min-h-[200px] border border-[#e8e8e8] shadow-lg bg-slate-50 w-[calc(100vw-24px-14px)] lg:w-[350px]"
            >
              <button
                onClick={() => {
                  setFilterBox({ isOpen: false, filter: null });
                }}
                className={`w-full rounded-full text-center h-fit py-1 bg-[#e8e8e8] text-xs lg:text-sm
              ${filterBox.filter === null ? "bg-theme-1 text-white font-medium" : "text-grade-3"}`}
              >
                All
              </button>
              {filters.map((state) => {
                return (
                  <button
                    onClick={() => {
                      setFilterBox({ isOpen: false, filter: state });
                    }}
                    className={`w-full rounded-full h-fit text-center py-1 bg-[#e8e8e8] text-xs lg:text-sm text-grade-3
                  ${filterBox.filter === state ? "bg-theme-1 text-white font-medium" : "text-grade-3"}`}
                  >
                    {state}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {productsData.map((product, index) => {
          if (filterBox.filter && product.tag != filterBox.filter) return;
          return (
            <div
              key={index}
              className={`w-full h-[300px] group flex-shrink-0 rounded-xl shadow-[15px_15px_0px_2px_#0000001A] lg:shadow-[17px_17px_0px_2px_#0000001A] 
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
                className={`text-white bg-gradient-to-t from-[#080808a8] to-[#08080800] h-1/3 absolute bottom-0 px-5 w-full flex flex-col gap-y-3 justify-center
                `}
              >
                <span className="font-bold text-base lg:text-lg truncate max-w-[90%]">
                  #{product.tag}
                </span>
                {/* <span className="text-xs md:text-base truncate max-w-[90%]">
                  {product.area}, {product.state}
                </span> */}
                <Image
                  src={Arrow}
                  alt="arrow icon"
                  className="absolute top-1/2 -translate-y-1/2 right-5 w-7 md:w-10 scale-[0.7]"
                />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Explore;
