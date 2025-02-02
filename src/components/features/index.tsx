"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion, useInView } from "framer-motion";
import { statsCount } from "@/constants";

const Features = () => {
  const featureContainer = useRef<HTMLDivElement>(null);
  const isInView= useInView(featureContainer,{ once: true })
  const { scrollYProgress } = useScroll({
    target: featureContainer,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -630]);
 
  const [counts, setCounts] = useState<number[]>(statsCount.map(() => 0)); 

  useEffect(() => {
    const intervals = statsCount.map((item, index) => {
      const targetCount = parseInt(item.count);  
      let currentCount = 0;

      return setInterval(() => {
        if (currentCount < targetCount) {
          currentCount += 1;
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = currentCount;  
            return newCounts;
          });
        } else {
          clearInterval(intervals[index]);  
        }
      }, 10);
    });

     return () => intervals.forEach(clearInterval);
  }, [isInView]);  

  return (
    <section
      ref={featureContainer}
      className=" h-[180vh] md:h-[160vh] relative"
    >
      <div className="h-10 "></div>
      <div className="flex h-[50vh] overflow-hidden relative">
        <motion.div
          style={{ y }}
          className="relative  w-full h-screen bg-black/50"
        >
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-black/30"></div>
          <Image
            src={"/assets/images/slider5.jpg"}
            alt="features"
            layout="fill"
            className="object-cover relative -z-40"
          />
        </motion.div>
        <div className="h-10 "></div>
      </div>
      <div className="absolute h-fit lg:h-screen w-full px-5 lg:px-16 top-[120px] lg:top-[200px] left-0 right-0 z-20 max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between text-white gap-x-[15%] items-start">
          <h4 className="font-bold text-[34px] whitespace-nowrap drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">
            Some Facts About Us
          </h4>
          <div className="flex flex-col gap-y-7">
            <p>
              Here at Quality Line, we are showcasing our long-standing
              presence, commitment to quality, dedication to customer
              satisfaction, and adaptability to industry changes.
            </p>
            <hr className="opacity-30" />
          </div>
        </div>
        <div className="mt-0 rounded-lg overflow-hidden shadow-xl h-full lg:h-[100vh] flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="flex-initial w-full py-7 lg:py-0 lg:w-[45%] bg-blue-400 relative flex items-center justify-center">
              <div className="w-full px-8">
                <h6 className="font-semibold text-gray-600 text-sm">
                  MORE ABOUT US
                </h6>
                <h4 className="text-2xl font-bold my-3">
                  30 years of quality and <br /> successful projects
                </h4>
                <p className="mt-4 text-gray-800 leading-7 text-sm font-medium">
                  We have more than 30 years Experience in the auto industry and
                  during this long "innings" We must admit that we have been
                  exposed to all the intricate areas of expertise where an
                  automobile is concerned.
                </p>
                <button className="mt-10 inline-block rounded hover:bg-white hover:text-black btn px-12 py-3 text-sm font-medium text-blue-400 bg-gray-800">
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="flex-1 hidden lg:flex bg-black items-center justify-center overflow-hidden">
              <Image
                src={"/assets/images/slider9.jpg"}
                alt="feature card "
                width={600}
                height={700}
                className="object-cover object-center opacity-65 w-full h-full"
              />
            </div>
          </div>
          <div className="lg:min-h-[130px] bg-gray-800 grid grid-cols-1 lg:grid-cols-4 text-black">
            {statsCount?.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-20 lg:px-0 lg:justify-center border-r border-gray-50/20 py-6 lg:py-0"
              >
                <div className="flex flex-col relative">
                  <Image
                    src={"/plus.svg"}
                    alt="plus"
                    width={10}
                    height={10}
                    className="absolute top-4 -left-10"
                  />
                  <h6 className="text-white/60 font-bold text-[26px]">
                    {counts[index]} 
                  </h6>
                  <span className="uppercase text-blue-400 text-xs mt-1 font-medium tracking-wide">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
