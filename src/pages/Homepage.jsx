import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ChooseSection from "../components/ChooseSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
function Homepage() {
  return (
    <div className="font-roboto text-textColor bg-bgColor  leading-[1] font-normal">
      <Header />
      <main>
        <HeroSection />
        <ChooseSection />
        <Cta />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}

export default Homepage;
