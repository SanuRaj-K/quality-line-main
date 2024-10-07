"use client";
import React, { useEffect, useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controllBanner = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controllBanner);
    return () => {
      window.removeEventListener("scroll", controllBanner);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`${
        isVisible ? `h-[70px] ` : `h-0  -translate-y-6 overflow-hidden`
      } transition-all duration-300 bg-gray-800`}
    >
      <div className=" max-w-screen-xl mx-auto px-5 md:px-7 flex h-full text-white font-light text-xs items-center justify-between">
        <Link href={"/contact"} className="flex items-center  md:hidden  ">
          <MailIcon />
          <p className=" ml-2 font-medium text-xs  tracking-wider">
            OUR CONTACTS
          </p>
        </Link>
        <ul className=" hidden md:flex items-center  font-medium gap-4">
          <li className="flex items-center group cursor-pointer ">
            <a
              href="mailto:info@topsupportsa.com"
              className="flex items-center"
            >
              <MailIcon className="text-sm group-hover:text-red-500" />
              <h5 className="ml-2">info@qualitylineauto.com</h5>
            </a>
          </li>
          <li className="flex items-center group cursor-pointer">
            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <LocationOnIcon className="text-sm  group-hover:text-red-500" />
              <h5 className="ml-2 ">
                Al –Quoz Industrial Area-4 Near to Emirates Glass Factory Dubai,
                U.A.E
              </h5>
            </a>
          </li>
          <li className="flex items-center group cursor-pointer">
            <a href="tel:+9660503513353" className="flex items-center">
              <CallIcon className="text-sm group-hover:text-red-500 " />
              <h5 className="ml-2 "> +971 4 3470009</h5>
            </a>
          </li>
          <li className="flex items-center group cursor-pointer">
            <a href="tel:+9660502664435" className="flex items-center">
              <CallIcon className="text-sm  group-hover:text-red-500" />
              <h5 className="ml-2 ">+971 4 3411127
              </h5>
            </a>
          </li>
        </ul>
        <ul className="hidden md:flex items-center gap-[5px]">
          <li className="flex  hover:-translate-y-1 hover:text-blue-400 transition-all duration-300  cursor-pointer items-center justify-center  w-7 h-7 border border-gray-600 rounded-md bg-gray-700">
            <FacebookIcon  className="text-[18px]" />
          </li>
          <li className="flex hover:-translate-y-1 hover:text-blue-500 transition-all duration-300  cursor-pointer  items-center justify-center  w-7 h-7 border border-gray-600 rounded-md bg-gray-700">
            <TwitterIcon className="text-[18px]" />
          </li>
          <li className="flex  hover:-translate-y-1 hover:text-red-500 transition-all duration-300 cursor-pointer  items-center justify-center  w-7 h-7 border border-gray-600 rounded-md bg-gray-700">
            <InstagramIcon className="text-[18px]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
