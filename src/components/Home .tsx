import AgricultureSection from "./AgricultureSection"
import ScrollableCards from "./Carousel"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import Navbar from "./Navbar"
import QualityAgriProductsSection from "./QualityAgriProductsSection"
import QualityAgriProductsSection2 from "./QualityAgriProductsSection2"


function Home () {
  return (
    <div>
      <Navbar />
      <video
        className="relative inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
        onEnded={(e) => e.currentTarget.pause()}
      >
        <source src="https://tengrain.com/wp-content/uploads/2022/09/VID-20211109-WA0000.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ScrollableCards />
      <AgricultureSection/>
      <QualityAgriProductsSection/>
      <QualityAgriProductsSection2/>
      <ContactSection/>
      <Footer/>
       </div>
  )
}

export default Home 