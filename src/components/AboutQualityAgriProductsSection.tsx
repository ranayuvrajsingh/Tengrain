function AboutQualityAgriProductsSection() {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-24 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-8">
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Driven by the challenges in the agriculture industry, Tengrain
            Science Limited was established as an agro-focused consulting firm.
            We provide business to business; business to government and business
            to consumer solutions. We provide a wide range of strategic
            consultancy services on specific subject areas including sustainable
            agriculture, Agronomy sciences, tree fruit production, food
            chemistry and engineering, water resources, weed biology, soil
            science, and many more. Our programs and activities are structured
            to provide numerous benefits to the agriculture industry.
           <br />
           <br />
              We are an organization motivated by people and the planet. Also,
              we understand the interconnectedness between food value chains,
              the planet, and human livelihoods. With a grasp of how thriving
              biodiversity and functional ecosystems influence sustainable food
              systems and our survival on earth, we engage stakeholders,
              especially farmers on the need to protect existing biodiversity.
              Our activities seek to protect different ecosystem elements
              including trees and microorganisms which are easy targets of
              destruction.
           
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-end ml-48  -mr-32">
        <img fetchPriority="high" decoding="async" width="640" height="960" src="https://tengrain.com/wp-content/uploads/2022/09/zoe-schaeffer-W_ISm5LwKHQ-unsplash.jpg" className="attachment-boldthemes_large_vertical_rectangle size-boldthemes_large_vertical_rectangle" alt="https://tengrain.com/wp-content/uploads/2022/09/zoe-schaeffer-W_ISm5LwKHQ-unsplash.jpg" data-full_image_src="https://tengrain.com/wp-content/uploads/2022/09/zoe-schaeffer-W_ISm5LwKHQ-unsplash.jpg" title="zoe-schaeffer-W_ISm5LwKHQ-unsplash" srcSet="https://tengrain.com/wp-content/uploads/2022/09/zoe-schaeffer-W_ISm5LwKHQ-unsplash.jpg 640w, https://tengrain.com/wp-content/uploads/2022/09/zoe-schaeffer-W_ISm5LwKHQ-unsplash-320x480.jpg 320w, https://tengrain.com/wp-content/uploads/2022/09/zoe-schaeffer-W_ISm5LwKHQ-unsplash-360x540.jpg 360w" sizes="(max-width: 640px) 100vw, 640px"/>
        </div>
      </div>
    </div>
  );
}

export default AboutQualityAgriProductsSection;
