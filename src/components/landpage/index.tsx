"use client";
import SliderBanner from "@/app/service/banner/Slider";
import { artists } from "@/constants";
import React, { useEffect, useState } from "react";
import { LandingHeader } from "../common/header/LandingHeader";
const LandPage = () => {
  const [visibleImages, setVisibleImages] = useState(artists.length);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const updateVisibleImages = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleImages(artists.length);
      } else if (width >= 768) {
        setVisibleImages(4);
        setVisibleImages(3);
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    return () => window.removeEventListener("resize", updateVisibleImages);
  }, [artists.length]);

  return (
    <section className="min-h-screen   overflow-hidden">
      <div className=" pt-20  w-full h-full">
        <SliderBanner />
      </div>
      <div className="   pt-10 md:pt-28">
        <LandingHeader />
      </div>
      <ul className="flex  flex-col mt-36 lg:mt-0 lg:flex-row relative min-h-[750px] m-0 p-0 overflow-hidden list-none w-full">
        {artists.slice(0, visibleImages).map((artist, i) => (
          <li
            key={i}
            style={{
              backgroundImage: `url(assets/images/${artist.backgroundUrl})`,
            }}
            role="button"
            className={`flex flex-1 items-stretch cursor-pointer  transition-all duration-700 relative bg-cover bg-no-repeat bg-top overflow-hidden ${
              active === i ? "flex-[6] cursor-default" : ""
            }`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(0)}
          >
            <div
              className={` ${
                active === i ? "" : "bg-black/75"
              } absolute left-0 right-0 top-0 bottom-0 m-auto `}
            ></div>

            <h3
              className={`font-semibold text-white/70 lg:-right-[180px]  whitespace-nowrap absolute  top-7 lg:top-auto bottom-28 z-10 left-1/2 transition-all transform ${
                active === i
                  ? "opacity-0 top-[200%]"
                  : "-translate-x-1/2   -translate-y-1/2   text-start lg:-rotate-90 transition-all duration-500 text-xl lg:text-2xl uppercase"
              }`}
            >
              <span className=" mr-3 text-white lg:text-5xl   ">{i + 1}</span>

              {artist.name}
            </h3>
            <div
              className={`relative z-30 opacity-0  text-white  self-end lg:mb-[15%] w-full transition-opacity duration-350 ${
                active === i ? "opacity-100" : ""
              }`}
            >
              <div
                className={`"absolute grid grid-cols-1 gap-5  items-end left-0 bottom-0 p-5 ${
                  active === i ? "scale-100" : "scale-0"
                } transition-all duration-500 md:grid-cols-[calc(100%-340px)_300px] md:gap-10 md:p-10 lg:grid-cols-[460px_200px] lg:gap-10 lg:p-10`}
              >
                <div className={`${active === i ? "opacity-100" : "hidden "} `}>
                  <div className="grid grid-flow-row gap-6 ">
                    <h2 className="text-3xl font-semibold uppercase text-white bg-black/40 p-2   md:text-4xl lg:text-5xl">
                      {artist.name}
                    </h2>
                    <p className="bg-black/40   p-3">{artist.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LandPage;
