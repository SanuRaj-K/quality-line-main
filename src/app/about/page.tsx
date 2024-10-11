import About from "@/components/about";
import Header from "@/components/common/header";
import WhyChoose from "@/components/whychoose";
import { vissionAndMission } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen  ">
      <Header
        title="ABOUT"
        desc=" Building Strength, Precision, and Quality – Your Trusted Partner in Steel Fabrication and Welding Solutions"
        image="slider1.jpg"
      />
      <div></div>
      <nav className="h-[70px] bg-white flex items-center max-w-screen-xl mx-auto px-5 md:px-7">
        <div className="flex items-center">
          <ul className="flex items-center text-xs gap-4">
            <Link href={"/"}>
              <li className="hover:text-blue-400 hover:font-semibold cursor-pointer relative">
                Home
              </li>
            </Link>
            <li>
              <hr className="w-[6px] h-[3px] bg-blue-400" />
            </li>
            <li className="font-semibold">About</li>
          </ul>
        </div>
      </nav>
      <hr className="bg-gray-50/20" />
      <div className=" ">
        <About />
      </div>

      {/* <WhyChoose /> */}

      <div className=" pb-9 mt-8 lg:mt-0">
        <h1 className=" text-center uppercase lg:text-[30px]  text-[24px]  font-bold">
          Vission and Mission
        </h1>

        <ul className=" flex     my-10 items-center content-center  flex-col md:flex-row   justify-center">
          {vissionAndMission.map((item, index) => (
            <li className="   " key={index}>
              <div className=" inline-flex mt-8 lg:mt-0  md:mx-8  cursor-pointer flex-col hover:bg-black group mr-5  transition-all duration-700 items-center rounded-md p-5 bg-[#f9fafb] w-[250px] h-[220px] ">
                <Image className="  group-hover:bg-white  rounded-full p-2" quality={100} width={50} src={item.icon} alt={item.title} />
                <h1 className=" my-3 group-hover:text-white text-[26px] font-semibold uppercase">{item.title}</h1>
                 <p className="  group-hover:text-white  text-center">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: "Quality Line | Steel and Welding Workshop LLC ",
  description:
    "Explore Qulaity Line's wide range of Automobile services, including auto industry, and mobile workshop unit. Expert solutions for every project.",
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "Quality Line - Comprehensive automobile Services",
    description:
      "Explore Qulaity Line's wide range of Automobile services, including auto industry, and mobile workshop unit. Expert solutions for every project.",
  },
  keywords:
    "Automobile Body Fabrication, Vehicle Body Manufacturing, Steel Fabrication, Welding Workshop, Tank Fabrication, Tipper Manufacturing, Semi Trailer Fabrication, Cargo Bodies, Dry Box Bodies, Water Bottle Carrier Fabrication, Mobile Workshop Unit, Custom Vehicle Bodies, Al Quoz Industrial Area, Dubai Fabricators, Auto Industry Experts, Quality Line Steel & Welding Workshop",
};
