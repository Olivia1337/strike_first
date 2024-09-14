import React from "react";
import IconCardExtended from "../components/IconCardExtended";
import { FaAddressCard } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function ContactPage() {
  return (
    <main className="relative w-full h-screen bg-stone-200 p-[5%] flex flex-col items-center justify-center">
      <section className="text-stone-900">
        <h1 className="text-[3em] md:text-[5em] font-header text-center">
          CONTACT US
        </h1>
      </section>
      <p
        className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-[80%] lg:w-[30%]"
        aria-labelledby="contact-info"
      >
        At Strike First Muay Thai, we are committed to helping you achieve your
        fitness goals. Whether you're aiming to improve your technique, increase
        your strength, or enhance your overall fitness, we're here to support
        you every step of the way.
      </p>

      <section className="grid gap-4 w-[90%] lg:w-[60%] lg:w-[25%]">
        <IconCardExtended
          icon={FaAddressCard}
          title={"STRIKE FIRST"}
          text={"CentralSthlm 24 116 33 Stockholm"}
          text2={"info@strikefirst.com"}
          text3={"555-123-4567"}
          aria-label="Contact information for Strike First"
        />
      </section>

      <p
        className="mt-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-[80%] lg:w-[25%]"
        aria-labelledby="response-time"
      >
        We always respond as quickly as possible, as we are daily instructing
        both private and scheduled classes.
      </p>

      <section className="text-center mt-4">
        <h2 className="text-[2em] font-header" role="heading" bg-stone-900="2">
          Follow Us
        </h2>
        <div
          className="flex gap-2 items-center"
          aria-labelledby="social-media-links"
        >
          <a
            href="https://www.instagram.com/strikefirst"
            aria-label="Follow us on Instagram"
          >
            <AiFillInstagram size={50} />
          </a>
          <a
            href="https://www.facebook.com/strikefirst"
            aria-label="Follow us on Facebook"
          >
            <FaFacebookSquare size={42} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
