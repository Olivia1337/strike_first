import React from "react";
import { Link } from "react-router-dom";

function ClassesCard({ icon: Icon, title, text }) {
  return (
    <Link to="/schedule">
      <div className="h-[20rem] cursor-pointer font-text relative bg-stone-200 p-6 rounded-lg shadow-lg flex flex-col items-center w-80 transition-transform duration-300 transform hover:scale-95">
        <Icon size={50} className="mb-[1rem]" />
        <h2 className="mb-[1rem] font-header text-[1.5em]">{title}</h2>
        <p className="font-text text-[1em] text-center">{text}</p>
      </div>
    </Link>
  );
}

export default ClassesCard;
