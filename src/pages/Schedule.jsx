import React, { useState } from "react";
import InfoText from "../components/InfoText";

const classes = {
  Monday: [
    { id: 1, title: "Morning Muay Thai", time: "07:00-08:00", trainer: "John" },
    {
      id: 2,
      title: "Lunch Class (Mixed)",
      time: "12:00-13:00",
      trainer: "Alex/Chris",
    },
    { id: 3, title: "Beginner Class", time: "16:00-17:15", trainer: "Emma" },
    { id: 4, title: "Advanced", time: "17:30-18:45", trainer: "Michael/Sam" },
    { id: 5, title: "Mixed Class", time: "19:00-20:15", trainer: "Olivia" },
  ],
  Tuesday: [
    { id: 6, title: "Beginner Class", time: "16:00-17:15", trainer: "Taylor" },
    { id: 7, title: "Advanced", time: "17:30-18:45", trainer: "Jordan/Avery" },
    { id: 8, title: "Women's Class", time: "19:00-20:15", trainer: "Mia" },
  ],
  Wednesday: [
    { id: 9, title: "Morning Muay Thai", time: "07:00-08:00", trainer: "John" },
    {
      id: 10,
      title: "Lunch Class (Mixed)",
      time: "12:00-13:00",
      trainer: "Alex",
    },
    { id: 11, title: "Intermediate", time: "16:00-17:15", trainer: "Emma" },
    { id: 12, title: "Advanced", time: "17:30-18:45", trainer: "Michael" },
    { id: 13, title: "Mixed Class", time: "19:00-20:15", trainer: "Olivia" },
  ],
  Thursday: [
    { id: 14, title: "Beginner Class", time: "16:00-17:15", trainer: "Chris" },
    { id: 15, title: "Women's Class", time: "17:30-18:45", trainer: "Jordan" },
  ],
  Friday: [
    {
      id: 16,
      title: "Morning Muay Thai",
      time: "07:00-08:00",
      trainer: "Alex",
    },
    { id: 17, title: "Mixed Class", time: "12:00-13:00", trainer: "Chris" },
    { id: 18, title: "Childrens Class", time: "13:00-13:45", trainer: "Chris" },
  ],
  Saturday: [
    { id: 19, title: "Mixed Class", time: "10:00-11:30", trainer: "Emma" },
    { id: 20, title: "Childrens Class", time: "13:00-13:45", trainer: "Chris" },
  ],
  Sunday: [
    { id: 12, title: "Advanced", time: "12:30-13:45", trainer: "Michael" },
    { id: 13, title: "Mixed Class", time: "14:00-15:15", trainer: "Olivia" },
  ],
};

function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const currentClasses = classes[selectedDay] || [];

  return (
    <main className="relative w-full min-h-screen bg-stone-200 pt-[25%] md:pt-[15%] lg:pt-[0%] md:p-8 flex flex-col items-center justify-center">
      <header className="text-stone-800 mb-10 text-center pt-[10%]">
        <h1 className="text-[3em] md:text-[5em] font-header text-center">
          SCHEDULE
        </h1>
      </header>

      {/* Schedule grid for larger screens */}
      <nav className="hidden md:grid grid-cols-1 md:grid-cols-7 gap-2 w-8/10 text-center text-bg-stone-800">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            aria-label={`Select ${day}`}
            className={`font-bold p-2 rounded-lg transition-all duration-300 ease-in-out ${
              selectedDay === day
                ? "bg-orange-500 text-white"
                : "bg-stone-800 text-stone-200"
            }`}
          >
            {day}
          </button>
        ))}
      </nav>

      {/* Classes for the selected day */}
      <section className="hidden md:flex flex-col justify-center items-center gap-2 p-2 rounded-lg mb-5 w-full">
        {currentClasses.length > 0 ? (
          currentClasses.map(({ id, title, time, trainer }) => (
            <article
              key={id}
              className="bg-white shadow-lg p-2 rounded-lg text-sm md:w-[20rem] flex flex-col justify-center items-center"
            >
              <h2 className="font-bold text-lg text-stone-800">{title}</h2>
              <p className="text-base my-2 text-stone-800">{time}</p>
              <p className="text-sm italic text-stone-800">{trainer}</p>
            </article>
          ))
        ) : (
          <p className="text-stone-800">
            No classes available for {selectedDay}
          </p>
        )}
      </section>

      {/* Dropdown for mobile view */}
      <section className="md:hidden w-full mb-2">
        <label htmlFor="day-selector" className="sr-only">
          Select a day
        </label>
        <select
          id="day-selector"
          onChange={(e) => setSelectedDay(e.target.value)}
          value={selectedDay}
          className="w-full p-2 rounded-lg bg-stone-800 text-stone-200 font-bold"
        >
          {Object.keys(classes).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        {/* Classes for selected day in mobile */}
        <div className="flex flex-col gap-2 p-2 rounded-lg mb-5 w-full">
          {currentClasses.length > 0 ? (
            currentClasses.map(({ id, title, time, trainer }) => (
              <article
                key={id}
                className="bg-white shadow-lg p-2 rounded-lg text-sm flex flex-col justify-center items-center"
              >
                <h2 className="font-bold text-lg text-stone-800">{title}</h2>
                <p className="text-base my-2 text-stone-800">{time}</p>
                <p className="text-sm italic text-stone-800">{trainer}</p>
              </article>
            ))
          ) : (
            <p className="text-stone-800">
              No classes available for {selectedDay}
            </p>
          )}
        </div>
      </section>

      <p className="text-[1em] font-text text-stone-800 mb-[2rem] mt-[1rem]">
        Subject to change for certain times & instructors. Information is
        continuously updated here on our website and on our social media.
      </p>

      {/* InfoText components */}
      <section aria-labelledby="info-texts">
        <h2 id="info-texts" className="sr-only">
          Class Descriptions
        </h2>
        <InfoText
          title={"Beginner Class"}
          text={
            "For those who want to learn the basics or are new to Muay Thai."
          }
        />
        <InfoText
          title={"Mixed Class"}
          text={
            "A class for everyone! - Beginners, Intermediate, and Advanced. Tailored based on participation."
          }
        />
        <InfoText
          title={"Advanced"}
          text={
            "For those who have been training for a while or want to develop further = advanced group. Sparring often occurs in these classes, so prior knowledge and experience are required."
          }
        />
        <InfoText
          title={"Women's Class"}
          text={
            "For everyone who identifies as a woman! - Beginners, Intermediate, and Advanced."
          }
        />
        <InfoText
          title={"Children's Class"}
          text={"For children aged approximately 6-11 years."}
        />
        <InfoText
          title={"Morning Muay Thai"}
          text={
            "A term pass for ALL DAYS is required to attend these mixed classes (which are for all levels)."
          }
        />
        <InfoText
          title={"Sparring Class"}
          text={
            "A term pass for ALL DAYS + good experience and approved participation by John, Lucas, or Emma is required to attend this class."
          }
        />
        <InfoText
          title={"Clinch Class"}
          text={
            "A term pass for ALL DAYS is required to attend this class. For those who want to learn and master/develop their clinch skills."
          }
        />
      </section>
    </main>
  );
}

export default Schedule;
