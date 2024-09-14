import React from "react";

function PriceCard(props) {
  return (
    <div
      className="font-text relative bg-stone-200 p-6 rounded-lg shadow-lg w-60 flex flex-col transition-transform duration-300 hover:scale-95"
      aria-labelledby={`${props.title}-heading`}
    >
      <div className="flex flex-col items-center mb-6">
        <h3
          className="text-[1.2em] font-bold text-center text-orange-600"
          aria-label={`Title: ${props.title}`}
        >
          {props.title}
        </h3>
        <p
          className="text-[3rem] text-stone-900 font-bold my-2"
          aria-label={`Price: ${props.classes}`}
        >
          {props.classes}
        </p>
        <p
          className="text-[1.2rem] text-stone-900"
          aria-label={`Original price: ${props.original_price}`}
        >
          {props.original_price}
        </p>
      </div>
      <div className="flex-grow flex items-end justify-center mt-5">
        <p
          className="text-[1em] text-gray-500 text-center"
          aria-label={`Details: ${props.text}`}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default PriceCard;
