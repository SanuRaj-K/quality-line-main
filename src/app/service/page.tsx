import Header from "@/components/common/header";
import ServiceCard from "@/components/service/ServiceCard";
import { service, services } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BannerSection from "./banner";

const Services = () => {
  return (
    <main className="min-h-screen">
      <Header
        title="OUR SERVICES"
        desc="At Quality Line, we're here to transform your aspirations into achievements."
        image="slider1.jpg"
      />
      <nav className="h-[70px] bg-white flex items-center max-w-screen-xl mx-auto px-5 md:px-7">
        <div className="flex items-center">
          <ul className="flex items-center text-xs gap-4">
            <Link href={"/"}>
              <li className="hover:text-blue-400 hover:font-semibold cursor-pointer relative">
                Home
              </li>
            </Link>
            <li>
              <hr className="w-[6px] h-[3px] bg-blue-400" />
            </li>
            <li className="font-semibold">Services</li>
          </ul>
        </div>
      </nav>
      <hr className="bg-gray-100/20" />
      <div className="relative">
        <div className="h-[27%] bg-gray-100/80 absolute w-full -z-30">
          <Image
            src={"/images/city-bg.png"}
            alt="city"
            width={400}
            height={200}
            className="absolute left-0 opacity-50  bottom-0 move-bg"
          />
        </div>
        {/* Banner section  */}
        <BannerSection />
        <div className="max-w-screen-xl mx-auto flex flex-col py-10 px-7">
          <div className="flex gap-7 md:gap-36 flex-col md:flex-row ">
            <div className="flex-1">
              {" "}
              <h6 className="font-semibold text-sm text-gray-700">
                What We Do
              </h6>
              <h4 className="mt-3 capitalize text-gray-800  font-bold text-xl">
                We Offer Smarter & More Affordable Access To Construction
                Services and Equipment. <br />
                We Are Top Support.
              </h4>
              <div className="text-gray-600 flex flex-col gap-5   leading-7 text-sm mt-4">
                <p>
                  At TOP SUPPORT, we are dedicated to offering a broad spectrum
                  of services tailored to your specific needs. Our skilled team
                  ensures excellence in every project we undertake. From initial
                  planning and design to the final touches, we deliver
                  high-quality results that meet your expectations.
                </p>
                <p>
                  We partner with you to achieve your objectives. Our
                  customer-centric approach means we listen to your needs and
                  work closely with you to bring your vision to life. Reach out
                  to us today to discover how we can help make your project a
                  success.
                </p>
              </div>
            </div>
            <div className="flex-initial md:w-[40%] pr-5 ">
              <h6 className="font-semibold text-sm text-gray-700">
                Here’s what we offer:
              </h6>
              <ul className="text-sm text-gray-500 mt-3 flex flex-col gap-5 list-decimal pl-6">
                <li>
                  <b>Construction Expertise:</b> From groundbreaking to
                  completion, our comprehensive construction services ensure
                  your project’s success.
                </li>
                <li>
                  <b> Waterproofing Solutions:</b> We specialize in top-notch
                  waterproofing systems to protect your structures from the
                  elements.
                </li>
                <li>
                  <b> Geosynthetic Products:</b> Discover our high-quality
                  geosynthetic materials, vital for various engineering
                  applications.
                </li>
                <li>
                  <b> Fiber Mesh Installation:</b> Enhance the durability and
                  strength of your construction with our fiber mesh solutions.
                </li>
                <li>
                  <b> PVC Solutions:</b> We provide a wide range of PVC
                  products, catering to your specific needs.
                </li>
                <li>
                  <b> Technical Support: </b> Our dedicated team offers valuable
                  technical support, ensuring your project’s seamless execution.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-10 lg:min-h-[300px]">
            {service.map((service) => (
              <ServiceCard
                path={service.path}
                title={service.title}
                desc={service.desc}
                Icon={service.icon}
                id={service.id}
              />
            ))}
          </div>
          <div className="w-fit mb-6 mt-20 ">
            <h5 className=" md:text-xl  font-semibold ">Our Services</h5>
            <hr className="w-full h-1 rounded-full mt-1 bg-blue-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 xl:gap-10 ">
            {services.map((service) => (
              <Link href={`/service/${service.title}`}>
                <div className="cursor-pointer border group max-h-[300px] h-full rounded-md overflow-hidden shadow-lg flex flex-col">
                  <div className="flex-1 flex items-center justify-center overflow-hidden">
                    <Image
                      src={`/images/services/${service.image}`}
                      alt={service.title}
                      width={300}
                      height={240}
                      className="w-full group-hover:scale-105 transition-all duration-300 h-full object-cover"
                    />
                  </div>
                  <div className="min-h-[70px] text-xs md:text-sm bg-gray-800 text-white flex items-center px-7 justify-between">
                    {service.title}
                    <button className=" text-xs md:text-sm whitespace-nowrap  text-blue-400 hover:underline   cursor-pointer">
                      Know more
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;

export const metadata: Metadata = {
  title: "Quality Line | Steel and Welding Workshop LLC ",
  description:
    "Explore Qulaity Line's wide range of Automobile services, including auto industry, and mobile workshop unit. Expert solutions for every project.",
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "Quality Line - Comprehensive automobile Services",
    description:
      "Explore Qulaity Line's wide range of Automobile services, including auto industry, and mobile workshop unit. Expert solutions for every project.",
  },
  keywords:
    "Automobile Body Fabrication, Vehicle Body Manufacturing, Steel Fabrication, Welding Workshop, Tank Fabrication, Tipper Manufacturing, Semi Trailer Fabrication, Cargo Bodies, Dry Box Bodies, Water Bottle Carrier Fabrication, Mobile Workshop Unit, Custom Vehicle Bodies, Al Quoz Industrial Area, Dubai Fabricators, Auto Industry Experts, Quality Line Steel & Welding Workshop",
};
