import React from "react";
import hero from "../assets/images/hero.jpg";
import logo from "../assets/images/logo.png";

function Hero() {
  return (
    <section
      className="h-screen bg-red-200 flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={logo}
        className="object-contain w-[15rem] z-10"
        alt="Company Logo"
      />
      <div
        className="absolute inset-0 bg-black opacity-30 z-5"
        aria-hidden="true"
      ></div>
    </section>
  );
}

export default Hero;
