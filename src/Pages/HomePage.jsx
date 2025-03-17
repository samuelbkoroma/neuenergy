import HowItWorks from "../components/compo/HowItWorks";
import MyMission from "../components/compo/MyMission";
import MyVision from "../components/compo/MyVision";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MoreInfo from "../components/Moreinfo";
import OurServices from "../components/myServices";

import Team from "../components/Team";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MoreInfo />
      <OurServices />
      <MyMission />
      <MyVision />
      <HowItWorks />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
