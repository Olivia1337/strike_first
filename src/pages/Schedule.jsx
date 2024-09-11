import React from "react";
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
    {
      id: 9,
      title: "Lunch Class (Mixed)",
      time: "12:00-13:00",
      trainer: "Alex/Chris",
    },
    {
      id: 10,
      title: "Beginner Class",
      time: "16:00-17:15",
      trainer: "Sophie/Alex",
    },
    { id: 11, title: "Advanced", time: "17:30-18:45", trainer: "James" },
    {
      id: 12,
      title: "Mixed Class",
      time: "19:00-20:15",
      trainer: "Liam/Emma/Noah",
    },
  ],
  Thursday: [
    {
      id: 13,
      title: "Morning Muay Thai",
      time: "07:00-08:00",
      trainer: "John",
    },
    {
      id: 14,
      title: "Women's Class",
      time: "16:00-17:15",
      trainer: "Mia",
    },
    { id: 15, title: "Advanced", time: "17:30-18:45", trainer: "Ethan" },
    { id: 16, title: "Mixed Class", time: "19:00-20:15", trainer: "Sophia" },
  ],
  Friday: [
    {
      id: 17,
      title: "Lunch Class (Mixed)",
      time: "12:00-13:00",
      trainer: "Alex/Chris",
    },
    { id: 18, title: "Mixed Class", time: "17:00-18:30", trainer: "Ryan" },
  ],
  Saturday: [
    { id: 19, title: "Mixed Class", time: "11:00-12:30", trainer: "Emily" },
    {
      id: 20,
      title: "Sparring",
      time: "12:30-13:50",
      trainer: "Open Sparring for Everyone",
    },
    { id: 21, title: "Childrens Class", time: "12:00-13:00", trainer: "Liam" },
  ],
  Sunday: [
    {
      id: 22,
      title: "Mixed Class",
      time: "11:00-12:30",
      trainer: "Lucas/Sophia",
    },
    {
      id: 23,
      title: "Sparring/Clinch",
      time: "12:30-13:50",
      trainer: "John/Lucas",
    },
    { id: 24, title: "Children's Class", time: "12:00-13:00", trainer: "Liam" },
  ],
};

function Schedule() {
  return (
    <div className="relative w-full min-h-screen bg-stone-200 p-4 md:p-8 flex flex-col items-center ">
      <div className="text-stone-800 mb-10 text-center pt-[10%]">
        <h1 className="text-[5em] font-header text-center">SCHEDULE</h1>
      </div>

      {/* Schedule grid */}
      <div className=" grid grid-cols-1 md:grid-cols-7 gap-2 w-8/10 text-center text-bg-stone-800 border-b-2 border-stone-800">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <div
            key={day}
            className="font-bold text-stone-200 bg-stone-800 p-2 rounded-lg hidden md:block"
          >
            {day}
          </div>
        ))}

        {/* Daily classes */}
        {Object.entries(classes).map(([day, classList]) => (
          <div key={day} className="flex flex-col gap-2 p-2 rounded-lg mb-5">
            {/* Day label for small screens */}
            <div className=" font-bold p-2 rounded-lg md:hidden text-center">
              {day}
            </div>
            {classList.map(({ id, title, time, trainer }) => (
              <div
                key={id}
                className="bg-white shadow-lg p-2 rounded-lg text-sm"
              >
                <div className="font-bold text-lg text-stone-800">{title}</div>
                <div className="text-base my-2 text-stone-800">{time}</div>
                <div className="text-sm italic text-stone-800">{trainer}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="text-[1em] font-text text-stone-800 mb-[5rem] mt-[1rem]">
        Subject to change for certain times & instructors. Information is
        continuously updated here on our website and on our social media.
      </p>
      <div>
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
          text={
            "For children aged approximately 6-11 years. For more information, please contact the responsible instructor Liam: liam@example.com / 070-123 45 67."
          }
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
      </div>
    </div>
  );
}

export default Schedule;
