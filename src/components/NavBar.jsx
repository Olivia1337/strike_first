import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import logo2 from "../assets/images/logo2.png";
function NavBar() {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-6 z-10 flex justify-center transition-transform duration-300 ${
        scrollingUp
          ? "translate-y-0 bg-stone-900/70"
          : "-translate-y-full bg-stone-900/70"
      }`}
    >
      <div className="flex items-center justify-start w-full max-w-screen-xl ">
        {/* Logo */}
        <Link
          to="/"
          className="text-stone-200  hover:text-gray-400  absolute left-4 "
        >
          <img src={logo2} className="object-contain h-[4rem]" />
        </Link>

        {/* Navigation items */}
        <div className=" flex flex-1 justify-center space-x-10 font-text text-stone-200 text-[1.2em] font-bold">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/prices" className="hover:text-gray-400">
            Prices
          </Link>
          <Link to="/schedule" className="hover:text-gray-400">
            Schedule
          </Link>
          <Link to="/member" className="hover:text-gray-400">
            Sign Up
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
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
                >
                  <p className="font-semibold text-stone-200">Equipment</p>
                </Link>

                <Link
                  to="/faq"
                  className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
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
