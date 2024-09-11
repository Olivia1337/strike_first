import React from "react";

function TrainerCard({ image, title, text }) {
  return (
    <div className="font-text relative bg-stone-200 p-6 rounded-lg shadow-lg flex flex-col items-center w-80">
      <img src={image} className="h-40 w-full object-cover rounded-lg" />{" "}
      <h2 className="my-[1rem] font-header text-[2em]">{title}</h2>
      <p className="font-text text-[1em] text-center">{text}</p>
    </div>
  );
}

export default TrainerCard;
