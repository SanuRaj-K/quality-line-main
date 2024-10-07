import React from "react";
import WhyChooseUsCard from "./Card";
import { whychoosesData } from "@/constants";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className=" py-16 relative bg-gray-100/70 overflow-hidden">
      <Image
        src={"/images/city-bg.png"}
        alt="city"
        width={400}
        height={200}
        className="absolute left-0 opacity-50  bottom-0 move-bg"
      />
      <div className="max-w-screen-xl flex flex-col mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        <h5 className="font-semibold text-gray-600 ">What said about us</h5>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-initial  lg:w-[35%] w-full ">
            <div className="group  ">
              <h4 className="capitalize relative pointer-events-none  font-bold mt-5 text-2xl">
                WHY CHOOSE US
              </h4>
              <hr className="w-8 h-1 group-hover:w-32 transition-all hover:w-32  duration-500 bg-blue-600 mt-2" />
            </div>
            <p className="mt-7 text-gray-800  leading-7 text-sm">
              Clients choose TOP SUPPORT for our unwavering commitment to
              excellence and decades of expertise in the construction and
              contracting industry. With over 25 years of proven experience, our
              seasoned professionals bring a wealth of knowledge to every
              project, ensuring the highest quality of work. We offer a
              comprehensive suite of solutions, from construction chemicals and
              waterproofing to geosynthetic products, fiber mesh, and PVC
              materials, all designed to meet your unique construction needs
              with precision.
            </p>
          </div>
          <div className="flex-1 grid  grid-cols-1 h-fit   md:grid-cols-2 mt-8 lg:mt-0   gap-5 ml-3">
            {whychoosesData.map((item) => (
              <WhyChooseUsCard card={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
