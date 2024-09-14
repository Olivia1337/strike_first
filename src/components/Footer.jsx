import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-stone-900 text-white py-3 px-6">
      {/* Logo */}
      <div className="flex justify-center md:justify-start w-full md:w-1/3 mb-4 md:mb-0">
        <Link to="/" aria-label="Go to homepage">
          <img src={logo} className="object-contain h-16 md:h-20" alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav
        className="flex flex-col md:flex-row items-center justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-1/3 mb-4 md:mb-0"
        aria-label="Footer navigation"
      >
        <Link to="/" className="hover:text-gray-400" aria-label="Home page">
          Home
        </Link>
        <Link
          to="/prices"
          className="hover:text-gray-400"
          aria-label="Prices page"
        >
          Prices
        </Link>
        <Link
          to="/schedule"
          className="hover:text-gray-400"
          aria-label="Schedule page"
        >
          Schedule
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-400"
          aria-label="Contact page"
        >
          Contact/Find us
        </Link>
      </nav>

      {/* Open Hours and Social Media */}
      <div className="flex flex-col md:flex-row w-full md:w-1/3 items-center md:items-end justify-center md:justify-end gap-4">
        {/* Open Hours */}
        <div className="text-center md:text-right">
          <p className="font-bold mb-1" aria-label="Open hours">
            Open Hours
          </p>
          <p>Monday - Friday: 6am - 9pm</p>
          <p>Saturday: 10am - 3pm</p>
          <p>Sunday: 10am - 3pm</p>
        </div>

        {/* Social Media */}
        <div className="flex gap-3 md:gap-4 items-center">
          <a href="https://instagram.com" aria-label="Instagram">
            <AiFillInstagram
              size={40}
              className="transition-colors duration-300 hover:text-orange-600 cursor-pointer"
              aria-label="Instagram icon"
            />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebookSquare
              size={36}
              className="transition-colors duration-300 hover:text-orange-600 cursor-pointer"
              aria-label="Facebook icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
