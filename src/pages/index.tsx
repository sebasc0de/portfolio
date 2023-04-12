import { Skills } from "../components/Skills";
import { HeroSection } from "../components/HeroSection";
import { Meet } from "../components/Meet";
import { Portfolio } from "../components/Portfolio";
import { LanguageToggler } from "../components/LanguageToggler/LanguageToggler";

function Homepage() {
  return (
    <>
      <LanguageToggler />
      <HeroSection />
      <Skills />
      <Portfolio />
      <Meet />
    </>
  );
}

export default Homepage;
