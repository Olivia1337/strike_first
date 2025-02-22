import React from "react";
import PriceCard from "./PriceCard";
import img from "../assets/images/sal2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      className="p-[5%] relative w-full h-auto bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>
      <div className="relative z-10 text-center">
        <h1 className="text-[3em] md:text-[5em] font-header mb-4 text-stone-200">
          Popular memberships
        </h1>
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          aria-label="Available membership options"
        >
          <PriceCard
            title={"Flexible"}
            classes={"$100"}
            original_price={"10-class pass"}
            text={"/per pass"}
            aria-label="Flexible membership option with 10-class pass"
          />
          <PriceCard
            title={"Dedicated"}
            classes={"$80"}
            original_price={"3 classes/week"}
            text={"/per month"}
            aria-label="Dedicated membership option with 3 classes per week"
          />
          <PriceCard
            title={"Pro"}
            classes={"$850"}
            original_price={"Unlimited classes"}
            text={"/1 year"}
            aria-label="Pro membership option with unlimited classes for one year"
          />
        </div>
        <Link to="/prices">
          <button
            className="mt-10 bg-stone-900 text-stone-200 font-text py-2 px-4 rounded text-[1.2em] transition-colors duration-300 hover:bg-orange-600"
            aria-label="View all membership options"
          >
            All memberships
          </button>
        </Link>
      </div>
    </section>
  );
}

export default About;
