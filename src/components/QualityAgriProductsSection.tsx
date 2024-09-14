import React from 'react';

const QualityAgriProductsSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-24 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl capitalize font-bold text-[#1C4837] leading-tight">
            Improving Life And Healthy Communities By Ensuring The Supply Of Quality Agri-Products
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Beyond intensifying production, addressing agricultural supply chain issues is critical to achieving food and nutrition security. As a result, our expertise spans local cold storage and local warehousing. We are focused on the provision of safe and quality foods that are not harmful to human health by encouraging supply chains void of contamination.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-end ml-48  -mr-32">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="862"
            src="https://tengrain.com/wp-content/uploads/2022/09/shalitha-dissanayaka-wqb_dTZCNys-unsplash.jpg"
            alt="Agricultural Supply Chain"
            className="max-w-full h-auto"
            srcSet="https://tengrain.com/wp-content/uploads/2022/09/shalitha-dissanayaka-wqb_dTZCNys-unsplash.jpg 640w, https://tengrain.com/wp-content/uploads/2022/09/shalitha-dissanayaka-wqb_dTZCNys-unsplash-320x481.jpg 320w, https://tengrain.com/wp-content/uploads/2022/09/shalitha-dissanayaka-wqb_dTZCNys-unsplash-360x540.jpg 360w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
      </div>
    </div>
  );
};

export default QualityAgriProductsSection;
