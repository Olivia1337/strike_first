import React, { useState } from "react";
import IconCardExtended from "../components/IconCardExtended";
import { FaAddressCard } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function ContactPage() {
  return (
    <div className="relative w-full h-screen bg-stone-200 p-[10%] flex flex-col items-center">
      <div className="text-stone-900">
        <h1 className="text-[5em] font-header text-center">CONTACT US</h1>
      </div>
      <p className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-[30%]">
        At Strike First Muay Thai, we are committed to helping you achieve your
        fitness goals. Whether you're aiming to improve your technique, increase
        your strength, or enhance your overall fitness, we're here to support
        you every step of the way.
      </p>

      <div className="grid gap-4 w-[30%]">
        <IconCardExtended
          icon={FaAddressCard}
          title={"STRIKE FIRST"}
          text={"CentralSthlm 24 116 33 Stockholm"}
          text2={"info@strikefirst.com"}
          text3={"555-123-4567"}
        />
      </div>

      <p className="mt-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-[25%]">
        We always respond as quickly as possible, as we are daily instructing
        both private and scheduled classes.
      </p>

      <h2 className="text-[3em] font-header text-center mt-4">Follow Us</h2>
      <div className="flex gap-2 items-center">
        <AiFillInstagram size={50} />
        <FaFacebookSquare size={42} />
      </div>
    </div>
  );
}

export default ContactPage;
