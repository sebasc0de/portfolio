import { Skills } from "../components/Skills";
import { HeroSection } from "../components/HeroSection";
import { Meet } from "../components/Meet";
import { Portfolio } from "../components/Portfolio";
import { Container } from "../components/Modal/Container";
import { Topbar } from "../components/Topbar";

function Homepage() {
  return (
    <>
      <Topbar />
      <Container />
      <HeroSection />
      <Skills />
      <Portfolio />
      <Meet />
    </>
  );
}

export default Homepage;
