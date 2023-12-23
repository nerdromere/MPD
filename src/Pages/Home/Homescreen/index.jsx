import TheAsk from "../TheAsk";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MyJourney from "../MyJourney";
import Testimonial from "../Testimonials";
import { useState } from "react";

export default function Home() {

  const [multiplier, setMultiplier] = useState(1);

  return (
    <>
      <HeroSection />
      <MyJourney />
      <TheAsk setMultiplierParent={setMultiplier} />
      {/* <MyPortfolio />
      <Testimonial /> */}
      <ContactMe multiplier={multiplier} />
      <Footer />
    </>
  );
}
