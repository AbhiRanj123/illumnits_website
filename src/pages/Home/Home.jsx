import About from "../../components/Home_components/About_section/About";
import Events from "../../components/Home_components/Events/Event";
import Hero from "../../components/Home_components/Hero/Hero";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <About />
      <Events />
    </div>
  );
}

export default Home;
