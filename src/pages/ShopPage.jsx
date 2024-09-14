import React from "react";
import EquipmentCard from "../components/EquipmentCard";
import gloves from "../assets/images/gloves.png";
import shorts from "../assets/images/shorts.png";
import wraps from "../assets/images/wraps.png";
import mouthguard from "../assets/images/mouthguard.png";
import chinguard from "../assets/images/chinguard.png";
import ankleguard from "../assets/images/ankleguard.png";

function ShopPage() {
  return (
    <main className="relative w-full h-full bg-stone-200 pt-[30%] md:pt-[10%] pb-[5%] flex flex-col items-center justify-center">
      <section aria-labelledby="equipment-heading" className="text-stone-900">
        <h1
          id="equipment-heading"
          className="text-[3em] md:text-[5em] font-header text-center"
        >
          EQUIPMENT
        </h1>
      </section>

      <section
        aria-labelledby="practice-equipment-heading"
        className="flex flex-col items-center my-5"
      >
        <h2
          id="practice-equipment-heading"
          className="text-[2em] md:text-[3em] font-header text-center"
        >
          Equipment needed during practice
        </h2>
        <p className="text-[1em] font-text text-center text-stone-900">
          - Shorts/light, flexible pants and a t-shirt/tank top.
          <strong> We always train barefoot!</strong>
        </p>
        <p className="text-[1em] font-text text-center text-stone-900">
          - Gloves <em>(available to borrow during trial practice)</em>
        </p>
        <p className="text-[1em] font-text text-center text-stone-900">
          - Shin guards
        </p>
        <p className="text-[1em] font-text text-center text-stone-900">
          - Mouth guard
        </p>
        <p className="text-[1em] font-text text-center text-stone-900">
          - Groin protector
        </p>
        <p className="my-2 text-[1em] style-bold font-text text-center text-stone-900 italic">
          Feel free to add other protective gear and accessories to take your
          training to the next level.
        </p>
      </section>

      <section aria-labelledby="shop-heading">
        <h2
          id="shop-heading"
          className="text-[2em] md:text-[3em] font-header text-center"
        >
          Visit our shop
        </h2>
        <p className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-1/3">
          Visit our shop located by the reception in our venue. Only top-quality
          products.
        </p>
        <div className="grid md:grid-cols-2 md:grid-cols-3 gap-10 mt-[2%]">
          <EquipmentCard
            img={gloves}
            title={"Gloves"}
            text={"Fairtex, Top King, Twin Special"}
            aria-label="Gloves - Fairtex, Top King, Twin Special"
          />
          <EquipmentCard
            img={shorts}
            title={"Shorts/Clothes"}
            text={"Fairtex customized with name"}
            aria-label="Shorts/Clothes - Fairtex customized with name"
          />
          <EquipmentCard
            img={wraps}
            title={"Wraps"}
            text={"Windy, Fairtex, YOKKAO"}
            aria-label="Wraps - Windy, Fairtex, YOKKAO"
          />
          <EquipmentCard
            img={mouthguard}
            title={"Mouth Guards"}
            text={"Top King, Fairtex, YOKKAO"}
            aria-label="Mouth Guards - Top King, Fairtex, YOKKAO"
          />
          <EquipmentCard
            img={chinguard}
            title={"Chin guards"}
            text={"Windy, Fairtex, YOKKAO"}
            aria-label="Chin guards - Windy, Fairtex, YOKKAO"
          />
          <EquipmentCard
            img={ankleguard}
            title={"Ankle guards"}
            text={"Venum, Fairtex, YOKKAO"}
            aria-label="Ankle guards - Venum, Fairtex, YOKKAO"
          />
        </div>
      </section>
    </main>
  );
}

export default ShopPage;
