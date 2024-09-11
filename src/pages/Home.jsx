import Hero from "../components/Hero";
import About from "../components/About";
import Prices from "../components/Prices";
import Classes from "../components/Classes";
import Trainers from "../components/Trainers";

export default function Home() {
  return (
    <div className="h-auto">
      <Hero />
      <Classes />
      <About />
      <Prices />
      <Trainers />
    </div>
  );
}
