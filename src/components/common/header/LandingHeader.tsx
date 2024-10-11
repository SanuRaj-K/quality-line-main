import React from "react";

export const LandingHeader = () => {
  return (
    <section className="   bg-white w-full ">
      <div className="  py-16   ">
        <div className=" px-5 lg:px-0 lg:pl-96">
          <div>
            <h4 className="uppercase lg:text-[30px] text-[20px] underline ">Our Business</h4>
            <h1 className=" my-3 md:text-[50px] lg:text-[70px] text-[23px] leading-normal lg:leading-[90px] font-medium uppercase">
              Driving Excellence in <br /> Auto Solutions
            </h1>
          </div>

          <p className="max-w-[850px] lg:pl-52 ">
            With over three decades of expertise, we deliver unmatched
            fabrication and repair services, ensuring innovation, quality, and
            customer satisfaction at every turn.
          </p>
        </div>
      </div>
    </section>
  );
};
