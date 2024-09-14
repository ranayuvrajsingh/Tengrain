import React from "react";

const QualityAgriProductsSection2: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-24 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24">
        {/* Left Section */}
        <div className="md:w-1/2 flex justify-start mr-48  -ml-14">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="662"
            src="https://tengrain.com/wp-content/uploads/2022/09/biologist-scientist-looking-test-sample-using-microscope-chemical-expertise_482257-4162-1.jpeg"
            alt="Agricultural Supply Chain"
            className="max-w-full h-auto"
            srcSet="https://tengrain.com/wp-content/uploads/2022/09/biologist-scientist-looking-test-sample-using-microscope-chemical-expertise_482257-4162-1.jpeg 840w, https://tengrain.com/wp-content/uploads/2022/09/shalitha-dissanayaka-wqb_dTZCNys-unsplash-320x481.jpg 320w, https://tengrain.com/wp-content/uploads/2022/09/shalitha-dissanayaka-wqb_dTZCNys-unsplash-360x540.jpg 360w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl capitalize font-bold text-[#1C4837] leading-tight">
          Extensive Training And Research Coordination
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed italic">
          At Tengrain Science Limited, We Provide Expert Advisory Services By Working In Collaborative Research Spaces And By Initiating Public-private Partnerships. We Facilitate Bridging The Gap Between Farmers And Research Trends In Agriculture. We Also Intend To Get Involved In Agri-science Research Relating To Bio-stimulants, Fertilizers, Chemical Research, And Seeds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityAgriProductsSection2;
