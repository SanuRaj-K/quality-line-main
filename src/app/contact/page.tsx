import Header from "@/components/common/header";
import React from "react";
import Magnet from "@/components/common/magnet";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Branches } from "@/components/contact/Branches";
import { branches } from "@/constants";
const Contact = () => {
  return (
    <main className="min-h-screen">
      <Header
        title="CONTACT"
        desc="We are here to help you! Make your move.
"
        image="slider5.jpg"
      />
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
            <li className="font-semibold">Contact</li>
          </ul>
        </div>
      </nav>
      <div className="bg-gray-100/60 relative overflow-hidden ">
        <Image
          src={"/images/city-bg.png"}
          alt="city"
          width={400}
          height={200}
          className="absolute left-0 opacity-50  bottom-0 move-bg"
        />
        <div className="max-w-screen-xl w-full  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7  py-20 md:py-28  px-5 md:px-7 ">
          <Card title="Our Mails" id="01" Icon={MailIcon}>
            <p className="text-sm text-gray-600  leading-6 pr-2 mt-2  ">
              If you have any questions, requests, or feedback, please don't
              hesitate to contact us via email..
            </p>
            <a
              href="mailto:info@topsupportsa.com"
              className="flex items-center"
            >
              <p className="text-sm text-blue-400 hover:text-black transition-all duration-300 cursor-pointer font-medium  leading-6 pr-2 mt-2  ">
                info@qualitylineauto.com
              </p>
            </a>
            <a
              href="mailto:topsupksa24@gmail.com"
              className="flex items-center"
            >
              <p className="text-sm text-blue-400 hover:text-black transition-all duration-300 cursor-pointer font-medium  leading-6 pr-2 mt-2  ">
                qlas0009@eim.ae
              </p>
            </a>
          </Card>
          <Card title="Our Phones" id="02" Icon={CallIcon}>
            <p className="text-sm text-gray-600  leading-6 pr-2 mt-2  ">
              Give us a call
            </p>

            <h5 className="text-sm mt-3 ">UAE:</h5>
            <a
              href="tel:+9660503513353"
              className="text-sm text-blue-400 hover:text-black transition-all duration-300 cursor-pointer font-medium  leading-6 pr-2 mt-2  "
            >
              +971 4 3470009,
            </a>
            <a
              href="tel:+9660502664435"
              className="text-sm text-blue-400 hover:text-black transition-all duration-300 cursor-pointer font-medium  leading-6 pr-2 mt-2  "
            >
              +971 4 3411127
            </a>
          </Card>
          <Card title="Our Address" id="03" Icon={LocationOnIcon}>
            <p className="text-sm text-gray-600  leading-6 pr-2 mt-2  ">
              You can reach us through this direction
            </p>
            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/ceCdiJpeZvkfboAp6"
                className="text-sm text-blue-400 hover:text-black transition-all duration-300 cursor-pointer font-medium leading-6 pr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Al –Quoz Industrial Area-4 Near to Emirates Glass Factory Dubai,
                U.A.E
              </a>
            </div>
          </Card>
        </div>
        <div className="my-16">
        <h1 className=" text-[26px] uppercase font-semibold text-center my-8">
              Our Branches
            </h1>
          <ul className="  px-5 lg:px-0  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-5 place-items-center">

           
            {branches.map((item, index) => (
              <li className=" my-3 lg:m-0" key={index}>
                <Branches
                id={index+1}
                  title={item.title}
                  icon={item.logo}
                  fax={item.fax}
                  email={item.email}
                  phone={item.telephone}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Contact;

const Card = ({ title, id, Icon, children }: any) => {
  return (
    <div className="min-h-[140px]  shadow-md hover:shadow-lg bg-white group transition-all duration-300 border border-gray-100 relative flex py-[25px] px-[20px]">
      <div className="absolute top-0 right-0 py-2 px-3 text-xs border-l border-b font-semibold text-gray-700  bg-[#F9F9F9] group-hover:bg-gray-800 group-hover:text-white transition-all duration-500">
        {id}
      </div>
      <div
        className="min-w-[50px] min-h-[50px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] group-hover:shadow-none group-hover:bg-gray-800 transition-all duration-500
      rounded-md flex items-center group-hover:text-white justify-center h-fit bg-blue-500/80"
      >
        <Magnet>
          <Icon />
        </Magnet>
      </div>

      <div className="ml-5">
        <h5 className="font-semibold  text-gray-800">{title}</h5>
        {children}
      </div>
    </div>
  );
};

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
