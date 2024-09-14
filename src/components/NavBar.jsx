import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaBars, FaX } from "react-icons/fa6"; // Add the icons here
import logo2 from "../assets/images/logo2.png";

function NavBar() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [smallScreenMenu, setSmallScreenMenu] = useState(false); // For hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleMenuClick = () => {
    setSmallScreenMenu(!smallScreenMenu); // Toggle menu
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSmallScreenMenu(false); // Close menu when resizing to a larger screen
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-6 z-10 flex justify-center transition-transform duration-300 ${
        scrollingUp
          ? "translate-y-0 bg-stone-900/70"
          : "-translate-y-full bg-stone-900/70"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo2}
            alt="Company logo"
            className="object-contain h-[4rem]"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <FaBars
          size={40}
          className={`text-stone-200 lg:hidden cursor-pointer ${
            smallScreenMenu ? "hidden" : "block"
          }`}
          aria-label="Open menu"
          onClick={handleMenuClick}
        />

        {/* Close Icon */}
        <FaX
          size={40}
          className={`text-stone-200 lg:hidden cursor-pointer absolute right-10 ${
            smallScreenMenu ? "block" : "hidden"
          }`}
          aria-label="Close menu"
          onClick={handleMenuClick}
        />

        {/* Menu */}
        <div
          className={`flex flex-col lg:flex-row flex-1 justify-center items-center space-y-5 lg:space-y-0 lg:space-x-10 font-text text-stone-200 text-[1.2em] font-bold ${
            smallScreenMenu ? "block" : "hidden lg:flex"
          }`}
        >
          <Link
            to="/"
            className="hover:text-gray-400"
            aria-label="Navigate to home page"
          >
            Home
          </Link>
          <Link
            to="/prices"
            className="hover:text-gray-400"
            aria-label="Navigate to prices page"
          >
            Prices
          </Link>
          <Link
            to="/schedule"
            className="hover:text-gray-400"
            aria-label="Navigate to schedule page"
          >
            Schedule
          </Link>
          <Link
            to="/member"
            className="hover:text-gray-400"
            aria-label="Navigate to sign up page"
          >
            Sign Up
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400"
            aria-label="Navigate to contact us page"
          >
            Contact Us
          </Link>
          <Popover>
            <PopoverButton className="hover:text-gray-400">Other</PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="mt-5 divide-y font-text divide-white/5 rounded-xl bg-stone-900/70 text-[1em] transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="p-3">
                <Link
                  to="/shop"
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  aria-label="Navigate to shop page"
                >
                  <p className="font-semibold text-stone-200">Equipment</p>
                </Link>

                <Link
                  to="/faq"
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                  aria-label="Navigate to FAQ page"
                >
                  <p className="font-semibold text-stone-200">FAQ</p>
                </Link>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
