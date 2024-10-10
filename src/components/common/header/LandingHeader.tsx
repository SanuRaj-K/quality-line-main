import React from "react";

export const LandingHeader = () => {
  return (
    <section className="   bg-white">
      <div className="  px-9 xl:px-0  lg:py-16 py-32  2xl:pl-[500px]">
        <div className=" text-center xl:text-start   ">
          <h4 className=" md:text-xl  uppercase font-semibold">Our Business</h4>
          <h1 className=" my-3 md:text-3xl text-xl font-bold  uppercase ">
            Driving Excellence in <br /> Auto Solutions
          </h1>
        </div>
        <div className="  mx-auto max-w-[600px]  mt-10    xl:pl-[150px]">
          <p className="  text-center xl:text-start  ">
            With over three decades of expertise, we deliver unmatched
            fabrication and repair services, ensuring innovation, quality, and
            customer satisfaction at every turn.
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
};
