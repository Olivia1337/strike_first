import React from "react";
import { Link } from "react-router-dom";

function ClassesCard({ icon: Icon, title, text }) {
  return (
    <Link to="/schedule" aria-label={`Go to the schedule for ${title}`}>
      <div
        className="h-[20rem] cursor-pointer font-text relative bg-stone-200 p-6 rounded-lg shadow-lg flex flex-col items-center w-80 transition-transform duration-300 transform hover:scale-95"
        aria-labelledby="classes-title"
      >
        <Icon
          size={50}
          className="mb-[1rem]"
          aria-label={`Icon representing ${title}`}
        />
        <h2 id="classes-title" className="mb-[1rem] font-header text-[1.5em]">
          {title}
        </h2>
        <p className="font-text text-[1em] text-center">{text}</p>
      </div>
    </Link>
  );
}

export default ClassesCard;
