import React from "react";
import PriceCard from "../components/PriceCard";

function PricesPage() {
  return (
    <main className="relative w-full h-full bg-stone-200 pt-[30%] md:pt-[20%] lg:pt-[10%] pb-[5%] flex flex-col items-center">
      <header className="text-stone-900 text-center mb-10">
        <h1 className="text-[3em] md:text-[5em] font-header">PRICES</h1>
      </header>

      <section aria-labelledby="pricing-overview">
        <p
          id="pricing-overview"
          className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-[80%] lg:w-[50%]"
        >
          At Strike First Muay Thai, we offer competitive pricing to make our
          world-class training accessible to everyone. Whether you're a beginner
          or a seasoned fighter, we have a membership plan that fits your needs.
        </p>
      </section>

      <section aria-labelledby="popular-picks">
        <h2
          id="popular-picks"
          className="text-[3em] md:text-[5em] font-header text-center text-stone-900 mt-[4rem]"
        >
          Popular Picks
        </h2>
        <p className="text-[1em] font-text mx-auto text-center text-stone-900 mb-[1rem]">
          Cards are personal and require personal ID; visit our shop to buy gift
          cards.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-[1rem]">
          <PriceCard
            title={"Flexible"}
            classes={"$100"}
            original_price={"10-class pass"}
            text={"/per pass"}
            aria-label="Flexible Membership"
          />
          <PriceCard
            title={"Dedicated"}
            classes={"$80"}
            original_price={"3 classes/week"}
            text={"/per month"}
            aria-label="Dedicated Membership"
          />
          <PriceCard
            title={"Pro"}
            classes={"$850"}
            original_price={"Unlimited classes"}
            text={"/1 year"}
            aria-label="Pro Membership"
          />
        </div>
      </section>

      <section aria-labelledby="student-discount">
        <p
          id="student-discount"
          className="text-[1.2em] mt-[1rem] italic font-text mx-auto text-center text-stone-900"
        >
          We offer a 10% discount for all students; proof of validity required.
        </p>
      </section>

      <section aria-labelledby="other-memberships">
        <h2
          id="other-memberships"
          className="text-[3em] md:text-[5em] font-header text-center text-stone-900 mt-[4rem]"
        >
          Other Memberships
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-[1rem]">
          <PriceCard
            title={"Children"}
            classes={"$90"}
            original_price={"10-class pass"}
            text={"/per month"}
            aria-label="Children's Membership"
          />
          <PriceCard
            title={"Women only"}
            classes={"$50"}
            original_price={"All women's classes"}
            text={"/per month"}
            aria-label="Women Only Membership"
          />
          <PriceCard
            title={"Pro-monthly"}
            classes={"$100"}
            original_price={"Unlimited classes"}
            text={"/1 month"}
            aria-label="Pro Monthly Membership"
          />
        </div>
      </section>
    </main>
  );
}

export default PricesPage;
