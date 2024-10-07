import { services } from "@/constants";
import Image from "next/image";
import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";

const ServicePage = ({ params: { title } }: { params: { title: string } }) => {
  const currentService = services.filter(
    (service) => service.title === decodeURIComponent(title)
  )[0];
  return (
    <section className="text-black h-full md:h-screen  bg-gray-100/85 relative">
      <Image
        src={"/images/city-bg.png"}
        alt="city"
        width={400}
        height={200}
        className="absolute left-0 opacity-50  bottom-0 move-bg"
      />
      <div className="w-full h-full  max-w-screen-xl grid grid-cols-1 md:grid-cols-2 mx-5 lg:mx-auto">
        <div className=" flex items-center justify-center">
          <div className="w-full">
            <div className="group mt-40 mb:mt-32 ">
              <h3 className="font-semibold text-[26px]">
                {decodeURIComponent(title)}
              </h3>
              <hr className="w-8 rounded-r-md group-hover:w-20 transition-all duration-300 h-[5px] mt-2 bg-red-400" />
            </div>
            <p className="text-sm text-gray-600 max-w-[400px] mt-7 leading-6">
              {currentService?.desc}
            </p>
            <ul className="list-decimal text-sm text-gray-600 mt-5 flex flex-col pl-4 gap-3 leading-6">
              {currentService.content?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center  justify-center">
          <div className="w-full h-[400px] group mt-32 mb-10  mr-16 relative  ">
            <div className="absolute w-[50%] h-[80%] bg-gray-800  rounded-tr-md  -right-5 -top-5 z-0 "></div>
            <div
              className="absolute text-white group-hover:opacity-0 transition-all duration-500  min-w-[300px] h-[60px] bg-gray-800 z-20 top-16 shadow-lg rounded-lg  flex items-center justify-center 
              -right-20"
            >
              <p className="tracking-[18px] font-semibold">SERVICE</p>
              <ConstructionIcon className="ml-3" />
            </div>
            <Image
              src={`/images/services/${currentService.image}`}
              alt={currentService.title}
              width={500}
              height={400}
              className=" w-full h-full transition-all duration-700 relative z-10 group-hover:border-none group-hover:shadow-lg  border-gray-100 border-2 rounded-md object-cover overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
