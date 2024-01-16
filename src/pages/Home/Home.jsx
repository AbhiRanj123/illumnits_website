import About from "../../components/Home_components/About_section/About";
import Contribution from "../../components/Home_components/Contributions/Contributions";
import Events from "../../components/Home_components/Events/Event";
import Fic from "../../components/Home_components/FIC/Fic";
import Hero from "../../components/Home_components/Hero/Hero";
import LPL from "../../components/Home_components/LPL/LPL";

import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <LPL/>
      <About />
      <Fic />
      <Contribution />
      <Events />
      <div className="quote">
        <strong>
          “The best way to find yourself is to lose yourself in the service of others.”
        </strong>
        <p>– Mahatma Gandhi</p>
      </div>
    </div>
  );
}

export default Home;
