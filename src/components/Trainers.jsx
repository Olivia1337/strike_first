import React from "react";
import TrainerCard from "./TrainerCard";
import carl from "../assets/images/Carl.jpg";
import ellie from "../assets/images/Ellie.jpg";
import mike from "../assets/images/Mike.jpg";
import sponsor1 from "../assets/images/sponsor1.png";
import sponsor2 from "../assets/images/sponsor2.png";
import sponsor3 from "../assets/images/sponsor3.png";
import gloves from "../assets/images/gloves.png";
import shorts from "../assets/images/shorts.png";
import wraps from "../assets/images/wraps.png";
import { Link } from "react-router-dom";
import EquipmentCard from "./EquipmentCard";

function Trainers() {
  const sponsors = [sponsor1, sponsor2, sponsor3];

  return (
    <section className="relative w-full py-[5%] bg-stone-200 flex flex-col items-center">
      <section className="text-center">
        <h1 className="text-[3em] md:text-[5em] font-header text-stone-900">
          We've got you
        </h1>
        <p className="text-[1.2rem] font-text text-stone-900 mb-6">
          And aim to see you develop and find your own pace
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-4">
        <TrainerCard
          image={carl}
          title={"Carl"}
          text={
            "With years of competitive Muay Thai experience, Carl specializes in advanced training techniques to help fighters reach their peak performance. His rigorous and precise approach ensures that each student hones their skills and excels in the ring."
          }
          aria-label="Trainer Carl - Advanced training specialist"
        />
        <TrainerCard
          image={ellie}
          title={"Ellie"}
          text={
            "Ellie brings a dynamic energy to the gym, focusing on both girls' and mixed classes. Her training sessions emphasize technique, fitness, and confidence, creating a supportive environment for all levels of fighters."
          }
          aria-label="Trainer Ellie - Dynamic energy and technique focus"
        />
        <TrainerCard
          image={mike}
          title={"Mike"}
          text={
            "Mike excels in teaching both mixed and children's classes with a focus on fundamental skills and fun. His engaging methods help young fighters develop discipline and technique while ensuring a positive and energetic atmosphere."
          }
          aria-label="Trainer Mike - Fundamental skills and fun for children and mixed classes"
        />
      </section>

      <section className="flex justify-center mt-10">
        <Link to="/contact">
          <button
            className="bg-stone-900 text-stone-200 font-text py-2 px-4 rounded text-[1.2em] transition-colors duration-300 hover:bg-orange-600"
            aria-label="Contact us"
          >
            Contact us
          </button>
        </Link>
      </section>

      <section className="flex flex-col items-center mt-[5%]">
        <h2 className="text-[3em] md:text-[5em] font-header text-stone-900 text-center">
          All the equipment you need
        </h2>
        <p className="text-[1.2rem] font-text text-stone-900 mb-6 text-center">
          From gloves to shorts - handmade in Thailand
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <EquipmentCard
            img={gloves}
            title={"Gloves"}
            text={"Fairtex, Top King, Twin Special"}
            aria-label="Equipment - Gloves"
          />
          <EquipmentCard
            img={shorts}
            title={"Shorts/Clothes"}
            text={"Fairtex customized with name"}
            aria-label="Equipment - Shorts and Clothes"
          />
          <EquipmentCard
            img={wraps}
            title={"Wraps"}
            text={"Windy, Fairtex, YOKKAO"}
            aria-label="Equipment - Wraps"
          />
        </div>
        <section className="mt-10">
          <Link to="/shop">
            <button
              className="bg-stone-900 text-stone-200 font-text py-2 px-4 rounded text-[1.2em] transition-colors duration-300 hover:bg-orange-600"
              aria-label="Find more equipment"
            >
              Find more here
            </button>
          </Link>
        </section>
      </section>

      <section className="flex flex-col items-center mt-[5%]">
        <div className="w-[60%] h-[2px] bg-stone-400" aria-hidden="true"></div>
        <p className="text-[1.2rem] italic font-text text-stone-400 mt-6 text-center">
          We are proud of our sponsors
        </p>
        <div className="flex justify-center gap-10 mt-6">
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="object-cover h-20 md:h-40 w-auto"
              aria-label={`Sponsor ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Trainers;
