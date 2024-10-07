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
        image="IMG-20240812-WA0052.jpg"
      />
      <nav className="h-[70px] bg-white flex items-center max-w-screen-xl mx-auto px-5 md:px-7">
        <div className="flex items-center">
          <ul className="flex items-center text-xs gap-4">
            <Link href={"/"}>
              <li className="hover:text-red-400 hover:font-semibold cursor-pointer relative">
                Home
              </li>
            </Link>
            <li>
              <hr className="w-[6px] h-[3px] bg-red-400" />
            </li>
            <li className="font-semibold">About</li>
          </ul>
        </div>
      </nav>
      <hr className="bg-gray-50/20" />
      <div className=" ">
        <About />
      </div>

      <WhyChoose />
    </main>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: "Top Support - Excellence in Construction Solutions | About Us",
  description:
    "Discover Top Support's 25-year journey of innovation and excellence in construction. Learn about our collaborative approach and commitment to quality.",
  alternates: {
    canonical: "https://www.topsupportsa.com/about",
  },
  openGraph: {
    title: "Top Support - Leading Construction Solutions Provider",
    description:
      "Join Top Support's journey of innovation and excellence in construction. Learn how our expertise transforms projects and delivers lasting results.",
  },
  keywords:
    "Construction Solutions, Top Support, Industry Expertise, Collaborative Approach, Construction Innovation, Quality Construction",
};
