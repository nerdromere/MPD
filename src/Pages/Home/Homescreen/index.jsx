import TheAsk from "../TheAsk";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <TheAsk />
      {/* <MyPortfolio />
      <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
