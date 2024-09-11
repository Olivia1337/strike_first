import React from "react";
import IconCard from "../components/IconCard";
import {
  FaCalendarDays,
  FaAddressCard,
  FaMoneyCheckDollar,
  FaCircleQuestion,
  FaBandage,
  FaIdCardClip,
  FaMedal,
} from "react-icons/fa6";
import { RiBoxingFill } from "react-icons/ri";
import { GiBoxingGloveSurprise, GiBoxingRing } from "react-icons/gi";

function FaqPage() {
  return (
    <div className="relative w-full h-full bg-stone-200 p-[10%] flex flex-col items-center">
      <div className="text-stone-900 ">
        <h1 className="text-[5em] font-header text-center">
          FREQUENT QUESTIONS
        </h1>
      </div>
      <p className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-2/3">
        Here you will find answers to some of the most common questions. <br />
        If you have any other questions, feel free to{" "}
        <a href="/contact" class="text-orange-600 underline">
          contact us
        </a>
      </p>
      <p className="font-bold mt-[1rem] text-[1.5em] font-text mx-auto text-center text-stone-900 w-2/3"></p>
      <div className="grid grid-cols-2 gap-4 w-[50%]">
        <IconCard
          icon={FaAddressCard}
          title={"How do I become a member?"}
          text={
            'You can sign up <a href="/member" class="text-orange-600 underline">here</a> on our website or visit our reception, which is open about 30 minutes before each class (see the schedule).'
          }
        />
        <IconCard
          icon={FaMoneyCheckDollar}
          title={"What does it cost?"}
          text={
            'We offer competitive pricing to make our world-class training accessible to everyone. Whether you are a beginner or a seasoned fighter, <a href="/prices" class="text-orange-600 underline">we have a membership plan</a> that fits your needs.'
          }
        />
        <IconCard
          icon={FaCalendarDays}
          title={
            "Do I need to pre-register for trial training or to participate in training?"
          }
          text={
            'No, just check our  <a href="/schedule" class="text-orange-600 underline"> training schedule</a> and show up when it suits you! If the number of participants exceeds the available space, members with a pro-card will have priority.'
          }
        />
        <IconCard
          icon={FaIdCardClip}
          title={"Do you have any age limits?"}
          text={
            "We welcome everyone and have members of all ages, from children to seniors! Youths around 12 years old (or younger, if accompanied by a training adult) and adults train together in our 'regular' classes. Children aged 6–11 have their own scheduled sessions. By training with us, you agree to follow our membership terms and conditions."
          }
        />
        <IconCard
          icon={FaCircleQuestion}
          title={"I'm new, what should I keep in mind for my visit?"}
          text={
            "Feel free to attend our beginner sessions! If these don’t fit your schedule, our mixed-level classes are also suitable for beginners. Mixed classes cater to all skill levels. Bring your own gloves and gear if you have them, or borrow ours."
          }
        />
        <IconCard
          icon={RiBoxingFill}
          title={"What equipment do I need?"}
          text={
            'We recommend personal equipment once you know you want to commit. Initially, this means gloves and shin guards. For sparring, more protection is required: mouthguards and, for example, groin protection and knee guards are preferred. We have everything you need in our <a href="/shop" class="text-orange-600 underline"> shop</a> which is open in connection with each class.'
          }
        />
        <IconCard
          icon={GiBoxingGloveSurprise}
          title={"When can I start participating in the advanced classes?"}
          text={
            "We recommend that you have trained for at least 6 months, but this can vary depending on your progress. You should have mastered the basics. Advanced classes often include sparring, so it’s crucial that you have the necessary control and knowledge to participate safely. If you’re unsure, feel free to ask us in person!"
          }
        />
        <IconCard
          icon={FaMedal}
          title={"I want to compete, how do I proceed?"}
          text={
            "To participate in competitions under our banner, you must be a member and be approved by the responsible instructor. Contact us via email at competition@sveamuaythai.com for more information."
          }
        />
        <IconCard
          icon={FaBandage}
          title={"How common are injuries?"}
          text={
            "Muay Thai is originally an ancient martial art. Today, it’s much more refined, and martial arts in general have become a popular sport for all ages and levels. Injuries can happen, but fortunately, they are rare. As a beginner, you won’t spar immediately - you’ll train on pads first. Ensure you have the right gear to minimize injury risks. If you have any concerns or existing injuries, consult with us so we can help you adjust your training."
          }
        />
      </div>
    </div>
  );
}

export default FaqPage;
