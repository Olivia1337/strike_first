import React from "react";
import hero from "../assets/images/hero.jpg";
import logo from "../assets/images/logo.png";
function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-stone-200 p-4">
        <div className="flex gap-2 items-center justify-center">
          <img src={logo} className="object-contain  w-[20rem]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
