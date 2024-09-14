import React from "react";
import { GiBoxingGlove, GiBoxingGloveSurprise } from "react-icons/gi";
import ClassesCard from "./ClassesCard";
import { FaChild } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Classes() {
  return (
    <section className="relative w-full p-[5%] bg-stone-200">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <ClassesCard
          icon={GiBoxingGlove}
          title={"Mixed Classes"}
          text={
            "Whether you're a beginner or a seasoned fighter, our Mixed Muay Thai class offers an inclusive and challenging environment for all skill levels."
          }
        />
        <ClassesCard
          icon={GiBoxingGloveSurprise}
          title={"Advanced Classes"}
          text={
            "Designed for experienced fighters, these sessions focus on advanced techniques, conditioning, and sparring strategies to refine your abilities and prepare you for competition."
          }
        />
        <ClassesCard
          icon={FaChild}
          title={"Children's Classes"}
          text={
            "Our Children's Muay Thai classes offer a fun and safe environment for kids to learn the fundamentals of the sport. Through engaging drills and games, young fighters build discipline, confidence, and fitness while developing essential skills."
          }
        />
      </div>

      <div className="flex justify-center">
        <Link to="/schedule" aria-label="View our full class schedule">
          <button className="text-[1.2em] bg-stone-900 text-stone-200 font-text font-semibold py-2 px-4 rounded mt-5 transition-colors duration-300 hover:bg-orange-600">
            See all our classes
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Classes;
