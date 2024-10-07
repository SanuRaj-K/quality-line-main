import Link from "next/link";
import React from "react";
import Magnet from "@/components/common/magnet";
const ServiceCard = ({
  title,
  desc,
  Icon,
  id,
  path,
}: {
  title: string;
  desc: string;
  Icon: any;
  id: number;
  path: string;
}) => {
  return (
    <Magnet>
      <Link href={path}>
        <div className="border bg-white rounded-md shadow-md relative p-7 group">
          <div className="absolute top-0 right-0 py-5 px-6 text-xs border-l border-b font-semibold text-red-500  bg-[#F9F9F9] group-hover:bg-gray-800 group-hover:text-white transition-all duration-500">
            0{id}
          </div>
          <div>
            <Icon className="text-red-500 group-hover:text-gray-800 text-4xl transition-all duration-500" />
            <div className="mt-4">
              <h5 className="font-semibold text-xl">{title} </h5>
              <p className="text-sm text-gray-600  leading-6 pr-2 mt-2">
                {desc}
              </p>
              <button className="px-4 py-2 bg-red-400 group-hover:bg-gray-800 text-white hover:text-red-400 transition-all duration-300 rounded-md text-sm mt-5">
                Know More
              </button>
            </div>
          </div>
        </div>
      </Link>
    </Magnet>
  );
};

export default ServiceCard;
