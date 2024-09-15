"use client";
import { client, urlFor } from "../../sanityClient";
import Image from "next/image";
import TestImg from "../../assets/rasters/hamuj6.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ImageViewer from "@/components/imageViewer";
import ExpandIcon from "@/assets/vectors/Expand";

interface PropertiesProps {
  address: string;
  description: string;
  value: number;
  tenure: string;
  records: {value: number, date: string}[];
  images: {
    _key: string;
    asset: {
      _ref: string;
    };
    alt: string;
  }[];
}

const Properties = () => {
  const [properties, setProperties] = useState<PropertiesProps[]>([]);
  const [viewerIsActive, setViewerIsActive] = useState(false);
  const [viewerData, setViewerData] = useState({
    images: properties[0]?.images,
    initialImgIndex: 0,
  });

  useEffect(() => {
    const propertiesInMemory = sessionStorage.getItem("properties");
    if (propertiesInMemory) {
      setProperties(JSON.parse(propertiesInMemory));
    } else {
      const fetchProjects = async () => {
        const query = '*[_type == "properties"]';
        const data = await client.fetch(query);
        setProperties(data);
        sessionStorage.setItem("properties", JSON.stringify(data));
      };
      fetchProjects();
    }
  }, []);

  function handleImageViewing(index: number) {
    setViewerData({ images: properties[index]?.images, initialImgIndex: 0 });
    setViewerIsActive(true);
  }

  return (
    <section className="max-failsafe py-16 lg:py-20">
      <div className="text-xs md:text-base mb-10">
        <div className="text-center mb-3 uppercase text-grade-2">
          Apply filters
        </div>
        <select
          className="w-[90%] md:w-[500px] lg:w-[700px] flex border-2 border-[#e8e8e8] rounded-xl h-9 lg:h-12 px-4 mx-auto overflow-hidden
      hover:border-[#aaaaaa] focus:outline-none"
        >
          <option value="">All</option>
          <option value="">Freehold tenure</option>
          <option value="">Leasehold tenure</option>
        </select>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2">
        {properties.map((property, index) => {
          return (
            <div key={index} className="w-full border-t-[2px] border-dashed md:border-none group flex gap-x-5 lg:gap-x-10 py-5 px-5 lg:odd:px-14 lg:even:pl-10 lg:even:pr-16">
              <div className="relative w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px] bg-[#e8e8e8] flex-shrink-0 overflow-hidden rounded-xl lg:rounded-2xl cursor-pointer"
              onClick={()=>{handleImageViewing(index)}}>
                <Image src={urlFor(property.images[0].asset).url()} alt="test" fill className="object-cover lg:group-hover:scale-[1.1] duration-500" />
                <div className="bg-[#0000002a] rounded-sm absolute right-2 bottom-2 lg:right-5 lg:bottom-5 lg:scale-[1.7]">
                    <ExpandIcon />
                </div>
              </div>
              <div className="flex flex-col text-xs md:text-sm gap-y-3 capitalize">
                <h2 className="text-sm md:text-base lg:text-lg font-medium">
                  {property.address}
                </h2>
                <div className="grid grid-cols-[minmax(0px,min-content)_minmax(0,max-content)]">
                  <span className="border-r-[2px] py-1 pr-3">
                    Description
                  </span>
                  <span className="flex items-center pl-3 font-normal">
                    {property.description}
                  </span>
                  <span className="border-r-[2px] py-1 pr-3">
                    Tenure
                  </span>
                  <span className="flex items-center pl-3 font-normal">
                    {property.tenure? property.tenure:'---'}
                  </span>
                  <span className="border-r-[2px] py-1 pr-3">
                    Historical records
                  </span>
                  <div className="flex justify-center flex-col py-1 pl-3 gap-y-2 font-normal" style={{textTransform:'none'}}>
                    {property.records && property.records.map((record, index) => {
                        if(index > 1) return null
                        return(
                            <span key={index} className="flex flex-col font-normal capitalize">
                                <span className="font-normal">₦{record.value.toLocaleString()}</span>
                                <span className="text-grade-1">{record.date}</span>
                            </span>
                        )
                    })}
                    {!property.records && (<span className="font-normal">No history yet</span>)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {viewerIsActive && (
        <ImageViewer
          initialImage={viewerData.initialImgIndex}
          images={viewerData.images!}
          setViewerIsActive={setViewerIsActive}
        />
      )}
    </section>
  );
};

export default Properties;
