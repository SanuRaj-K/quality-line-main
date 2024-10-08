import React, { useEffect, useState } from "react";
import Image from "next/image"
 import { motion } from "framer-motion";
import { bannerImgeData, bannerMobileSlider } from "@/constants";

function SliderBanner() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 540);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => {
        if (isMobile) {
          return prevIndex === bannerMobileSlider.length - 1
            ? 0
            : prevIndex + 1;
        } else {
          return prevIndex === bannerImgeData.length - 1 ? 0 : prevIndex + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const sliderImg = isMobile
    ? bannerMobileSlider[sliderIndex]
    : bannerImgeData[sliderIndex];

  const headingVariants = {
    hidden: { opacity: 0, y: -20 }, 
    visible: { opacity: 1, y: 0 }, 
  };
  return (
    <div className="w-full   mb-40  h-full lg:h-[550px] bg-white relative">
      <Image
        className="  w-full h-[500px] "
        src={sliderImg}
        alt="sliderimage"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="lg:pl-20 text-center lg:text-start px-5 md:px-0  text-white absolute top-[200px]      lg:top-[150px] ">
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headingVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold  transition-all duration-1000  text-[22px] lg:text-[30px] lg:max-w-[500px] uppercase"
        >
          {sliderIndex === 1
            ? " Where Steel Meets Strength and Precision"
            : "Shaping the Future of Automotive Fabrication"}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headingVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:mt-1 transition-all duration-1000 mt-3 max-w-[600px]"
        >
          {sliderIndex === 1
            ? "From custom designs to large-scale industrial projects, we specialize in durable steel solutions tailored to meet your unique needs."
            : "With state-of-the-art technology and unmatched expertise, we provide top-notch automobile body fabrication services. From design to assembly, we ensure that each vehicle is crafted to perfection, delivering strength, safety, and style."}{" "}
        </motion.p>
      </div>
       
      <div>
        <div className=" w-full sm:flex hidden  justify-center">
          <ul className=" grid   grid-cols-3    place-items-center     z-20 absolute top-[440px]">
            {bannerImgeData.map((item, index) => (
              <li key={index}>
                <div className="w-full mx-6 ">
                  <div
                    onClick={() => setSliderIndex(index)}
                    className="relative cursor-pointer w-[200px] h-[150px] lg:w-[300px] lg:h-[200px]"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src={item}
                      alt="Service"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                      <div className="bg-blue-700 text-xs p-1 px-3 mb-2">
                        BEST
                      </div>
                      <h1 className="text-center text-2xl font-bold">
                        FLEXIBLE
                        <br />
                        SERVICE REGIME
                      </h1>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SliderBanner;
