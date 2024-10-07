"use client";
import { navabar } from "@/constants";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Magnet from "@/components/common/magnet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Map from "../map";
const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className=" h-fit py-6 md:h-fit bg-gray-800 w-full text-white">
      <div className="w-full  flex items-center flex-col justify-center ">
        <Image
          src={"/images/2030.png"}
          alt="vision 2023"
          width={250}
          height={250}
          className=" w-[170px] md:w-[250px]  "
        />
        <div className="w-full h-[250px] mt-6 flexCenter">
          <Map />
        </div>
      </div>
      <div className="flex flex-col mt-10 md:flex-row items-center justify-between text-xs px-5 max-w-screen-xl mx-auto h-full">
        <div className="w-[150px] h-fit overflow-hidden rounded-md  flex items-center">
          {" "}
          <Image
            src={"/images/logowhite.jpeg"}
            alt="logo"
            width={160}
            quality={100}
            height={70}
          />
        </div>
        <ul className="flex py-6 md:py-0 items-center gap-7 ">
          {navabar.map((item) => (
            <Magnet>
              <Link href={item.path} key={item.id}>
                <li
                  key={item.id}
                  className={` ${
                    pathname === item.path && `text-red-500 font-bold`
                  } cursor-pointer hover:text-red-500 transition-all duration-300`}
                >
                  {item.title}
                </li>
              </Link>
            </Magnet>
          ))}
        </ul>
        <ul className="flex items-center gap-[5px]">
          <li className="flex  hover:-translate-y-1 hover:text-blue-400 transition-all duration-300  cursor-pointer items-center justify-center  w-7 h-7 border border-gray-600 rounded-md bg-gray-700">
            <FacebookIcon className="text-[18px]" />
          </li>
          <li className="flex hover:-translate-y-1 hover:text-blue-500 transition-all duration-300  cursor-pointer  items-center justify-center  w-7 h-7 border border-gray-600 rounded-md bg-gray-700">
            <TwitterIcon className="text-[18px]" />
          </li>
          <li className="flex  hover:-translate-y-1 hover:text-red-500 transition-all duration-300 cursor-pointer  items-center justify-center  w-7 h-7 border border-gray-600 rounded-md bg-gray-700">
            <InstagramIcon className="text-[18px]" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
