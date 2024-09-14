import React from "react";

function EquipmentCard({ img, text, title }) {
  return (
    <div
      className="relative flex-col flex justify-center items-center"
      aria-labelledby="equipment-title"
    >
      <p
        id="equipment-title"
        className="font-text text-[1em] text-stone-900 font-bold text-center w-2/3 mb-2"
      >
        {title}
      </p>
      <div className="relative flex justify-center items-center mb-2 group">
        <div className="absolute bg-blue-400 rounded-full h-40 w-40 transition-all duration-300 group-hover:h-32 group-hover:w-32"></div>
        <img
          src={img}
          className="object-cover h-40 w-auto relative z-10"
          alt={title}
        />
      </div>
      <p className="font-text text-[1em] text-stone-900 italic text-center w-2/3">
        {text}
      </p>
    </div>
  );
}

export default EquipmentCard;
