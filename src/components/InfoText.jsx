import React from "react";

function InfoText({ title, text }) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-[1.5em] font-bold font-text text-stone-800">
        {title}
      </h3>
      <p className="text-[1em] font-text text-stone-800 mb-[1rem]">{text}</p>
    </div>
  );
}

export default InfoText;
