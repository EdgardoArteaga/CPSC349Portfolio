import "./app.scss"
import MobileDev from "./components/mobiledev/Mobiledev";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutme/AboutMe";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <MobileDev/>
      </section>
      <section id="About"><AboutMe/></section>
      <section id="My Knowledge"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Projects"><Parallax type="portfolio"/></section>
      <Portfolio />
      <section id="Contact"><Contact /></section>
    </div>
  );
};

export default App;
