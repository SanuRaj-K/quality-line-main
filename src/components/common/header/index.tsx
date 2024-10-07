import Image from "next/image";
import React from "react";

const Header = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  return (
    <section className="h-[380px] bg-black relative">
      <Image
        src={`/images/${image}`}
        alt="header"
        fill
        quality={100}
        className="object-cover  opacity-65"
      />
      <div className="max-w-screen-xl relative   mx-auto h-full ">
        <div className="absolute  text-white h-fit left-0  bottom-12 m-auto  px-5 md:px-7">
          <h4 className="font-bold text-[26px] md:text-4xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-600 ">
            {title}
          </h4>
          <p className="mt-3   text-xs sm:text-sm md:text-base max-w-[450px] text-white/75">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
