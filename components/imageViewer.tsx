"use client";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { urlFor } from "../sanityClient";
import AngledArrow from "../assets/vectors/acuteArrow.svg";

interface ImageViewerProps {
  images: {
    _key: string;
    asset: {
      _ref: string;
    };
    alt: string;
  }[];
  initialImage: number;
  setViewerIsActive: (viewerIsActive: boolean) => void;
}

const ImageViewer: FC<ImageViewerProps> = ({
  images,
  initialImage,
  setViewerIsActive,
}) => {

  const [activeImage, setActiveImage] = useState(initialImage);
  const [clickPermit, setClickPermit] = useState(true);
  const scrollBox = useRef<HTMLDivElement>(null)
  const left = useRef<HTMLButtonElement>(null)
  const right = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    handleScrolling(initialImage, "instant");
    checkScrollBox()
  }, []);

  function handleScrolling(index: number, scrollType: ScrollBehavior) {
    if (clickPermit) {
        scrollBox.current!.style.overflow = 'scroll'
      if (index < 0) index = 0;
      if (index >= images.length) index = images.length - 1;
      setActiveImage(index);
      const target: HTMLDivElement = document.querySelector(
        `.image-viewing-${index}`
      )!;
      target.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: scrollType,
      });
      setTimeout(() => {
        setClickPermit(true);
        scrollBox.current!.style.overflow = 'hidden'
      }, 500);
    }

    setClickPermit(false);
  }

  function checkScrollBox(){
    if(scrollBox.current!.scrollLeft === 0){
        left.current!.style.visibility = 'hidden'
    }else{
        left.current!.style.visibility = 'visible'
    }
    if(scrollBox.current!.scrollLeft === (scrollBox.current!.scrollWidth - scrollBox.current!.clientWidth)){
        right.current!.style.visibility = 'hidden'
    }else{
        right.current!.style.visibility = 'visible'
    }
  }

  return (
    <div ref={scrollBox} onScroll={checkScrollBox} className="fixed top-0 flex w-screen h-dvh z-[99] overflow-scroll snap-mandatory snap-x bg-[#0000007c]">
      <button
        className="fixed cursor-pointer top-1/2 -translate-y-1/2 left-0 z-30 px-2 py-5 lg:p-3 bg-[#00000040] backdrop-blur-sm group"
        ref={left}
        onClick={() => {
          handleScrolling(activeImage - 1, "smooth");
        }}
      >
        <Image src={AngledArrow} alt="arrow" className="w-7 lg:w-14 scale-50 lg:group-hover:scale-[0.55]" />
      </button>
      <button
        className="fixed cursor-pointer top-1/2 -translate-y-1/2 right-0 z-30 px-2 py-5 lg:p-3 rotate-180 bg-[#00000040] backdrop-blur-sm group"
        ref={right}
        onClick={() => {
          handleScrolling(activeImage + 1, "smooth");
        }}
      >
        <Image src={AngledArrow} alt="arrow" className="w-7 lg:w-14 scale-50 lg:group-hover:scale-[0.55]" />
      </button>
      {images.map((image, index) => {
        return (
          <div key={index}
            className={`image-viewing-${index} relative w-full h-full flex-shrink-0 flex snap-center touch-none`}
            onClick={() => {
              setViewerIsActive(false);
            }}
          >
            <Image
              src={urlFor(image.asset).url()}
              alt="showcase image"
              fill
              sizes="(max-width: 1023px) 95vw, (min-width: 1024px) 90vw"
              className="z-20 lg:max-w-[90%] max-h-[60%] lg:max-h-full object-contain m-auto"
            />
          </div>
        );
      })}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white z-40 backdrop-blur-sm font-medium px-8 py-3 bg-[#00000040] rounded-full">
        <span>{activeImage+1}/{images.length}</span>
      </div>
    </div>
  );
};

export default ImageViewer;
