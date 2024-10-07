import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const WhatsappIcon = () => {
  return (
    <div className="fixed z-50 bottom-6 my-auto text-4xl hover:text-[42px] cursor-pointer transition-all duration-300 right-6 w-14 aspect-square flex items-center justify-center  rounded-full bg-green-500 text-white">
      <a href="https://wa.me/+966502664435?text=Hello Top support">
        <WhatsAppIcon fontSize="inherit" />
      </a>
    </div>
  );
};

export default WhatsappIcon;
