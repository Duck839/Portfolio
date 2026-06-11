import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import NavBar from "../components/NavBar";
import FeatureCards from "../sections/FeatureCards";
import ExperienceSection from "../sections/ExperienceSection";
import TechStack from "../sections/TechStack";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { navLinks, abilities} from "../constants";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar constant={navLinks}/>
      <Hero />
      <ShowcaseSection/>
      <FeatureCards  constant={abilities}/>
      <ExperienceSection />
      <TechStack />
      <Footer />
    </>
  );
};

export default Home;
