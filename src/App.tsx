
import ScrollableCards from "./components/Carousel";
import Navbar from "./components/Navbar";
import AgricultureSection from "./components/AgricultureSection";
import QualityAgriProductsSection from "./components/QualityAgriProductsSection";
import QualityAgriProductsSection2 from "./components/QualityAgriProductsSection2";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <ScrollableCards />
      <AgricultureSection/>
      <QualityAgriProductsSection/>
      <QualityAgriProductsSection2/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
