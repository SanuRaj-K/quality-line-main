import React from "react";
import Magnet from "@/components/common/magnet";
type cardProps = {
  card: {
    title: string;
    id: number;
    desc: string;
    icon: any;
  };
};
const WhyChooseUsCard = ({ card }: cardProps) => {
  return (
    <div className="min-h-[140px] h-fit shadow-md hover:shadow-lg bg-white group transition-all duration-300 border border-gray-100 relative flex py-[25px] px-[20px]">
      <div className="absolute top-0 right-0 py-2 px-3 text-xs border-l border-b font-semibold text-gray-700  bg-[#F9F9F9] group-hover:bg-gray-800 group-hover:text-white transition-all duration-500">
        0{card.id}
      </div>
      <div
        className="min-w-[50px] min-h-[50px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] group-hover:shadow-none group-hover:bg-gray-800 transition-all duration-500
          rounded-md flex items-center group-hover:text-white justify-center h-fit bg-blue-500/80"
      >
        <Magnet>
          <card.icon />
        </Magnet>
      </div>

      <div className="ml-5">
        <h5 className="font-semibold  text-gray-800">{card.title}</h5>
        <p className="text-sm text-gray-600  leading-6 pr-2 mt-2  ">
          {card.desc}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
