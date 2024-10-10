import About from "@/components/about";
import Header from "@/components/common/header";
import WhyChoose from "@/components/whychoose";
import { Metadata } from "next";
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
      <div>
      </div>
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
