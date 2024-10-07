"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import Magnet from "@/components/common/magnet";
import { navabar } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsappIcon from "../whatssap";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 m-auto bg-white    text-black  z-40">
      <Banner />
      <section className="h-[70px] w-full flex items-center justify-between max-w-screen-xl mx-auto px-5 md:px-7 ">
        <Link href={"/"}>
          <div>
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={30}
              quality={100}
              height={70}
            />
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-10 font-semibold text-xs">
          {navabar.map((item) => (
            <Link href={item.path}>
              <Magnet>
                <li
                  key={item.id}
                  className={` ${
                    pathname === item.path && `text-blue-500 font-bold`
                  } cursor-pointer  hover:text-blue-500`}
                >
                  {item.title}
                </li>
              </Magnet>
            </Link>
          ))}
        </ul>
        <div onClick={() => setMenuOpen((prev) => !prev)}>
          <MenuIcon className="flex md:hidden  cursor-pointer hover:text-blue-400" />
        </div>
      </section>
      <div
        className={`h-fit w-[200px] bg-gray-800 absolute p-3 py-5 ${
          menuOpen ? `right-0` : `-right-[100%]`
        }  transition-all duration-500`}
      >
        <ul className="w-full  text-white text-xs">
          {navabar.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <li className="py-2 pl-3">{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
