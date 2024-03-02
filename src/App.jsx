import "./app.scss";

// Componets
import NavBar from "./componets/navBar/NavBar";
import Hero from "./componets/hero/Hero";
import Parallax from "./componets/parallax/Parallax";
import Services from "./componets/services/Services";
import Portfolio from "./componets/portfolio/Portfolio";
import Contact from "./componets/contact/Contact";
import Cursor from "./componets/cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
