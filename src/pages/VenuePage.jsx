import React from "react";

import sal1 from "../assets/images/sal1.jpg";
import sal2 from "../assets/images/sal2.jpg";
function VenuePage() {
  return (
    <div className="relative w-full h-full bg-stone-200 p-[10%] flex flex-col items-center">
      <div className="text-stone-900 ">
        <h1 className="text-[5em] font-header text-center">BOKA/HYRA LOKAL</h1>
      </div>
      <p className=" mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-2/3">
        Är du, din förening/företag i behov av lokal? <br />
        Med det perfekta läget: lättillgängligt, centralt och mitt i hjärtat på
        Södermalm: Bondegatan 24, finner ni lokaler som bla. andas äkta
        traditionell thaiboxning.
      </p>
      <p className="font-bold mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-2/3">
        Kontakta lokalansvariga Svea Knuckle, via mail för mer info:
        sveaknuckle@sveamuaythai.com
      </p>
      <div className="flex flex-col items-center my-5">
        <h2 className="text-[3em] font-header text-center">
          Sal 1 - ca 200kvm
        </h2>
        <p className=" text-[1em] font-text  text-center text-stone-900 ">
          - Golvyta med mjuk matta och god takhöjd <br /> - Stort spegelparti{" "}
          <br />
          - Boxningssäckar och boxningsring mm. <br />
          - Egen entré från receptionen <br /> - Tillgång till
          omklädningsrum/dusch/toalett
        </p>
        <img src={sal1} className="mt-4" />
      </div>
      <div className="flex flex-col items-center my-5">
        <h2 className="text-[3em] font-header text-center">Sal 2 - ca 50kvm</h2>
        <p className=" text-[1em] font-text  text-center text-stone-900 ">
          - Laminatgolv under mjuka mattan <br /> - Stort spegelpari <br /> -
          Egen entré från receptionen <br />- Tillgång till
          omklädningsrum/dusch/toalett
        </p>
        <img src={sal2} className="mt-4" />
      </div>
    </div>
  );
}

export default VenuePage;
