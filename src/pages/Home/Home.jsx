import About from "../../components/Home_components/About_section/About";
import Contribution from "../../components/Home_components/Contributions/Contributions";
import Events from "../../components/Home_components/Events/Event";
import Fic from "../../components/Home_components/FIC/Fic";
import Hero from "../../components/Home_components/Hero/Hero";
import Lpl from "../../components/Home_components/LPL/LPL";

import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Lpl/>
      <About />
      <Fic />
      <Contribution />
      <Events />
      <div className="quote">
        <strong>
        “We don't read and write poetry because it's cute. We read and write poetry because we
 are members of the human race. And the human race is filled with passion. And
 medicine, law, business, engineering, these are noble pursuits and necessary to sustain
 life. But poetry, beauty, romance, love, these are what we stay alive for.”,
        </strong>
        <p>‒‒ Neil H. Kleinbaum, Dead Poets Society</p>
      </div>
    </div>
  );
}

export default Home;
