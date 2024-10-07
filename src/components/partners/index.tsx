import { partners } from "@/constants";
import Image from "next/image";
import React from "react";

const Partneres = () => {
  return (
    <section className="my-20 ">
      <div className="max-w-screen-xl mx-5 md:mx-auto grid-cols-2 gap-10  grid md:grid-cols-4">
        {partners.map((partner) => (
          <div className="flex items-center justify-center w-full  h-[100px]">
            <Image
              src={`/images/partners/${partner.logo}`}
              alt={partner.title}
              width={200}
              height={70}
              className=" object-contain w-full md:w-[80%]  h-full  overflow-hidden"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partneres;
