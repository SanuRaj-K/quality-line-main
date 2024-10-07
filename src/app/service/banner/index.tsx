import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 mb-6  max-w-screen-xl mx-auto   md:py-10 md:px-7  ">
      <div>
        <Image
          src={"/images/services/banner/fosroc.jpeg"}
          alt="fosroc"
          width={600}
          height={600}
          className=""
        />
      </div>
      <div>
        <Image
          src={"/images/services/banner/cmci.jpeg"}
          alt="fosroc"
          width={600}
          height={600}
          className=""
        />
      </div>
      <div>
        <Image
          src={"/images/services/banner/bostik.jpeg"}
          alt="fosroc"
          width={600}
          height={600}
          className="overflow-hidden lg:h-[270px]"
        />
      </div>
      <div>
        <Image
          src={"/images/services/banner/weber.jpeg"}
          alt="fosroc"
          width={600}
          height={600}
          className=""
        />
      </div>
      <div>
        <div className="grid  grid-cols-3 ">
          <Image
            src={"/images/services/banner/anqa.jpeg"}
            alt="anqa"
            width={600}
            height={600}
            className=""
          />
          <Image
            src={"/images/services/banner/bitumat.jpeg"}
            alt="bitumat"
            width={600}
            height={600}
            className=""
          />
          <Image
            src={"/images/services/banner/dcp.jpeg"}
            alt="dcp"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
      <div>
        <div className="grid  grid-cols-3">
          <Image
            src={"/images/services/banner/faidmate.jpeg"}
            alt="faidmate"
            width={600}
            height={600}
            className=""
          />
          <Image
            src={"/images/services/banner/sika.jpeg"}
            alt="sika"
            width={600}
            height={600}
            className=""
          />
          <Image
            src={"/images/services/banner/saveto.jpeg"}
            alt="saveto"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
