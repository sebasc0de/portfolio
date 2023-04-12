import { Skills } from "../components/Skills";
import { HeroSection } from "../components/HeroSection";
import { Meet } from "../components/Meet";
import { Portfolio } from "../components/Portfolio";
import { Container } from "../components/Modal/Container";
import { LanguageToggler } from "../components/LanguageToggler/LanguageToggler";

function Homepage() {
  return (
    <>
      <LanguageToggler />
      <Container />
      <HeroSection />
      <Skills />
      <Portfolio />
      <Meet />
    </>
  );
}

export default Homepage;
