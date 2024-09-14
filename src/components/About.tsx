import AboutQualityAgriProductsSection from "./AboutQualityAgriProductsSection"
import AboutQualityAgriProductsSection2 from "./AboutQualityAgriProductsSection2"
import AboutQualityAgriProductsSection3 from "./AboutQualityAgriProductsSection3"
import AgricultureSection from "./AgricultureSection"
import Footer2 from "./Footer2"


function About() {
  return (
    <div className="about-image">
        <img
          src="https://tengrain.com/wp-content/uploads/2022/09/New-Project-3-1-2.jpg"
          alt="About Us"
          className="w-full h-auto"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-end justify-end mb-40">
          <h1 className="text-white text-4xl md:text-6xl font-bold capitalize bg-black bg-opacity-30 p-10 rounded">
            About Us
          </h1>
        </div>
        <AgricultureSection/>
        <AboutQualityAgriProductsSection/>
        <AboutQualityAgriProductsSection2/>
        <AboutQualityAgriProductsSection3/>
        <Footer2/>
      </div>
  )
}

export default About