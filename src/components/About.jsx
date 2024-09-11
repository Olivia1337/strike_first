import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full h-auto bg-stone-900 flex items-center justify-center p-[5%]">
      <div className="flex flex-col items-center justify-center text-white w-full md:w-1/2 text-center">
        <h1 className="text-[5em] text-stone-200 font-header">
          Strike First Muay Thai
        </h1>
        <p className="text-[1.2em] font-text text-stone-200 w-2/3 mx-auto">
          Welcome to Strike First, Central Stockholm's premier Muay Thai gym.
          Whether you're a beginner or an experienced fighter, our expert
          trainers will guide you through intense, authentic Muay Thai training
          in a supportive and empowering environment.
          <br /> Join us to build strength, improve technique, and unleash your
          full potential.
        </p>{" "}
        <Link to="/contact">
          <button className="text-[1.2em] bg-stone-200 text-stone-900 font-text font-semibold py-2 px-4 rounded mt-5 transition-colors duration-300 hover:bg-orange-600 hover:text-stone-900">
            Find us here
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default About;
