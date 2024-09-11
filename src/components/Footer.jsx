import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className="flex justify-between items-center bg-stone-900 text-white py-3 bottom-0 left-0 w-full px-6">
      <div className="flex w-1/3 ">
        <Link to="/">
          <img src={logo} className="object-contain h-20" />
        </Link>
      </div>
      <nav className="flex space-x-4 font-text text-[1.2rem] items-center justify-center w-1/3">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/prices" className="hover:text-gray-400">
          Prices
        </Link>
        <Link to="/schedule" className="hover:text-gray-400">
          Schedule
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contact/Find us
        </Link>
      </nav>
      <div className="flex text-sm font-text w-1/3 text-center gap-5 justify-end">
        <div>
          <p className="font-bold">Open Hours</p>
          <p>Monday - Friday: 6am - 9pm</p>
          <p>Saturday: 10am - 3pm</p>
          <p>Sunday: 10am - 3pm</p>
        </div>

        <div className="flex gap-2 items-center">
          <AiFillInstagram
            size={50}
            className="transition-colors duration-300 hover:text-orange-600 cursor-pointer"
          />
          <FaFacebookSquare
            size={42}
            className="transition-colors duration-300 hover:text-orange-600 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
