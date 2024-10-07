import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className=" h-fit lg:h-screen  lg:mb-48 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen  lg:grid-cols-2">
          <div className="relative z-10 lg:py-16 ">
            <div className="relative h-64 sm:h-80 group lg:h-full">
              <Image
                width={1200}
                height={1200}
                quality={100}
                alt=""
                src="/images/about.jpg"
                className="absolute inset-0 h-full w-full object-cover rounded-r-lg"
              />
              <Image
                width={1200}
                height={1200}
                quality={100}
                alt=""
                src="/images/about2.jpg"
                className="absolute inset-0 h-full group-hover:opacity-0 transition-all duration-700  opacity-100  w-full object-cover rounded-r-lg"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100 ">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h5 className="my-4 text-base md:text-lg font-semibold text-gray-600 ">
                About Us
              </h5>
              <h2 className="text-2xl capitalize  sm:leading-[42px] font-semibold md:text-2xl">
                Who we are
              </h2>

              <p className="mt-4 text-gray-600 leading-7 text-sm">
                Quality Line is established by Indian Entrepreneur who is
                holding more than 3 decades of experience in the automobile
                Industry. By applying this outstanding experience in the
                industry to the satisfaction of our valuable customers ,We have
                grown immensely and our achievements and performances have been
                particularly outstanding in UAE, where our list of satisfied
                clients is growing tremendously long and impressive .
              </p>
              <p className="mt-4 text-gray-600 leading-7 text-sm ">
                Our best credentials are the our clients for whom we have served
                their organizations in a very professional and timely manner. We
                believe that ”Time is Money” and we make sure that our client’s
                money is in best use by optimizing all the available resources
                effectively and efficiently.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded border  btn px-12 py-3 text-sm font-medium text-white  bg-red-400"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
