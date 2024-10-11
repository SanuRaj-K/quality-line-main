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
        src={`/assets/images/${image}`}
        alt="header"
        fill
        quality={100}
        className="object-cover opacity-65"
      />

      {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}

      <div className="max-w-screen-xl relative z-20 mx-auto h-full">
        <div className="absolute text-white h-fit left-0 bottom-12 m-auto px-5 md:px-7">
          <h4 className="font-bold  text-[26px] md:text-4xl drop-shadow-[2px_2px_var(--tw-shadow-color)]  bg-black/20 inline px-3">
            {title}
          </h4>
          <p className="mt-3 bg-black/20   px-3 text-xs sm:text-sm md:text-base max-w-[450px] text-white">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
