import React from "react";

function InfoText(props) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-[1.5em] font-bold font-text stone-800">
        {props.title}
      </h3>
      <p className="text-[1em] font-text stone-800 mb-[1rem]">{props.text}</p>
    </div>
  );
}

export default InfoText;
