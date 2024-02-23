import AboutSection from "../components/About-section";
import Bring from "../components/Bring";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainVidSection from "../components/MainVidSection";
import OurService from "../components/OurService";
import Team from "../components/Team";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <OurService />
      <Bring />
      <MainVidSection />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
