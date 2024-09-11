import React from "react";
import PriceCard from "../components/PriceCard";

function PricesPage() {
  return (
    <div className="relative w-full h-full bg-stone-200 p-[10%] flex flex-col items-center">
      <div className="text-stone-900 ">
        <h1 className="text-[5em] font-header text-center">PRICES</h1>
      </div>
      <p className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-[30%]">
        At Strike First Muay Thai, we offer competitive pricing to make our
        world-class training accessible to everyone. Whether you're a beginner
        or a seasoned fighter, we have a membership plan that fits your needs.
      </p>

      <h1 className="text-[5em] font-header text-center text-stone-900 mt-[4rem]">
        Popular picks
      </h1>
      <p className="text-[1em] font-text mx-auto text-center text-stone-900 mb-[1rem]">
        Cards are personal and require personal ID, visit our shop to buy gift
        cards.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-[1rem]">
        <PriceCard
          title={"Flexible"}
          classes={"$100"}
          original_price={"10-class pass"}
          text={"/per pass"}
        />
        <PriceCard
          title={"Dedicated"}
          classes={"$80"}
          original_price={"3 classes/week"}
          text={"/per month"}
        />
        <PriceCard
          title={"Pro"}
          classes={"$850"}
          original_price={"Unlimited classes"}
          text={"/1 year"}
        />
      </div>
      <p className="text-[1.2em] mt-[1rem] italic font-text mx-auto text-center text-stone-900">
        We offer a 10% discount for all students, proof of validity required.
      </p>

      <h1 className="text-[5em] font-header text-center text-stone-900 mt-[4rem]">
        Other memberships
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-[1rem]">
        <PriceCard
          title={"Children"}
          classes={"$90"}
          original_price={"10-class pass"}
          text={"/per month"}
        />
        <PriceCard
          title={"Women only"}
          classes={"$50"}
          original_price={"All women's classes"}
          text={"/per month"}
        />
        <PriceCard
          title={"Pro-monthly"}
          classes={"$100"}
          original_price={"Unlimited classes"}
          text={"/1 month"}
        />
      </div>
    </div>
  );
}

export default PricesPage;
