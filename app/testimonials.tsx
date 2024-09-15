"use client";

import Quote from "../assets/vectors/quotes.svg";
import Check from "../assets/vectors/check.svg";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const reviews: { clientName: string; clientOrg?: string; review: string }[] = [
  {
    clientName: "Evelyn Edumoh",
    clientOrg: "COO ARKLAND PROPERTIES",
    review:
      "The experience of my space transformation is forever fresh, I wake up daily in my space forever thankful that I engaged Hamuj for the space design and finishing.",
  },
  {
    clientName: "Ismahil Omolara",
    review:
      "Honestly, Hamuj Homes is a game-changer! Their innovative vision, meticulous attention to detail, and exceptional professionalism resulted in a truly breathtaking space. Highly recommended for outstanding quality and service!",
  },
  {
    clientName: "Mary Onuche",
    review:
      "I had the best experience with Hamuj homes, they transformed my space into a cozy haven! Their attention to detail is impeccable, and the final result exceeded my expectations.",
  },
  {
    clientName: "Mayowa Lamusa",
    review:
      "From start to finish of the redesign of my home Hamuj team exhibited professionalism, creativity, and an impeccable attention to detail that truly brought my vision to life. I am beyond impressed, and I couldn't be happier with the outcome. You rock!",
  },
  {
    clientName: "Abiola Latifat",
    review:
      "Hamuj understood us and gave us our dream home. The journey with them has been an amazing and smooth one for sure.",
  },
];
const Testimonials = () => {
  const [activeReview, setActiveReview] = useState(0);
  let interval: any;

  useEffect(() => {
    scrollInterval();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target: HTMLDivElement = document.querySelector(
      `.review-${activeReview}`
    )!;
    let targetBottom = target.getBoundingClientRect().bottom;
    let targetTop = target.getBoundingClientRect().top;
    if (targetTop > 0 && targetBottom < innerHeight) {
      target.scrollIntoView({ inline: "center", block: "nearest" });
      const possibleErrorCorrection = setTimeout(() => {
        target.scrollIntoView({ inline: "center", block: "nearest" });
      }, 2000);
      return () => clearTimeout(possibleErrorCorrection);
    }
  }, [activeReview]);

  const scrollInterval = useCallback(() => {
    clearInterval(interval);
    const target: HTMLDivElement = document.querySelector(
      `.review-${activeReview}`
    )!;

    interval = setInterval(() => {
      let targetBottom = target.getBoundingClientRect().bottom;
      let targetTop = target.getBoundingClientRect().top;
      if (targetTop > 0 && targetBottom < innerHeight) {
        // Scroll into view only when...well...in view
        setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      }
    }, 10000);
  }, []);

  return (
    <section className="relative w-full max-failsafe pt-16 pb-10 lg:pt-28 lg:pb-10 overflow-hidden">
      <h2 className="relative text-center md:text-3xl text-2xl lg:text-heading text-grade-3 z-20 font-bold px-5 mb-0">
        Client Testimonials
      </h2>

      <div className="scroller flex mt-9 mb-7 items-center overflow-hidden snap-mandatory snap-x text-base lg:text-xl">
        {reviews.map((entry, index) => {
          return (
            <div
              key={index}
              className={`review-${index} w-full flex-shrink-0
            flex justify-center items-center snap-center`}
            >
              <p className="flex flex-col text-center max-w-[80%] lg:max-w-[50%] relative text-grade-1 hyphens-auto">
                <span className="relative">
                  <Image
                    src={Quote}
                    alt="quotation"
                    className="absolute w-7 lg:w-10 top-0 right-full -translate-y-1/4"
                  />

                  {entry.review}
                  <Image
                    src={Quote}
                    alt="quotation"
                    className="absolute w-7 lg:w-10 bottom-0 left-full rotate-180 translate-y-1/4"
                  />
                </span>

                <span className="mt-7 w-fit ml-auto mr-auto lg:mr-0 text-center text-sm font-medium">
                  -{" "}
                  <span className="text-grade-3 font-bold">
                    {entry.clientName}
                  </span>
                  <br />
                  {entry.clientOrg}
                </span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="mx-auto w-fit flex gap-x-5 mb-7">
        {reviews.map((entry, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setActiveReview(index), scrollInterval();
              }}
              className={`w-3 aspect-square rounded-full ${activeReview === index ? "bg-[#404040]" : "bg-[#e8e8e8]"}`}
            ></button>
          );
        })}
      </div>

      <Image src={Check} height={100} alt="check" className="mx-auto" />
    </section>
  );
};

export default Testimonials;
