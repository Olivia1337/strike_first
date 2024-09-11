import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

function IconCardExtended({ icon: Icon, title, text, text2, text3 }) {
  return (
    <div className=" items-center bg-stone-100 text-stone-900 py-6 rounded-lg shadow-sm flex flex-col ">
      <Icon size={40} />
      <p className="text-[1.5em] font-bold font-text mb-[1rem]">{title}</p>

      <div>
        <div className="flex justify-center mb-[1rem]">
          <div className="w-[80%] h-[2px] bg-stone-300"></div>
        </div>
        <div className="flex gap-1  my-1">
          <FaLocationDot size={25} />
          <p className="font-bold font-text ">{text}</p>
        </div>{" "}
        <div className="flex gap-1   my-2">
          <MdEmail size={25} />
          <p className="font-bold font-text ">{text2}</p>
        </div>{" "}
        <div className="flex gap-1  my-2">
          <FaPhoneVolume size={25} />
          <p className="font-bold font-text ">{text3}</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default IconCardExtended;
