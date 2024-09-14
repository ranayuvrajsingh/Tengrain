
const ServicesSection = () => {
  return (
    <div className="relative bg-gray-800 text-white py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("")',
          backgroundPositionY: '0px',
          backgroundAttachment: 'fixed', // Parallax effect
          backgroundSize: 'cover', // Ensure the image covers the entire div
          filter: 'blur(0px)' // Apply blur effect if needed
        }}
      />
      <div className="relative z-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        {/* Content */}
        <header className="mb-4">
          <h4 className="text-2xl font-semibold tracking-tight">
            <span>Our Services</span>
          </h4>
        </header>
        <div className="mb-6 border-b border-gray-600"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace the following with your service items */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h5 className="text-lg font-semibold">Agricultural Development</h5>
            <p className="text-gray-400">We focus on enhancing agricultural practices...</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h5 className="text-lg font-semibold">Agricultural Economics</h5>
            <p className="text-gray-400">Analyze and optimize economic aspects...</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h5 className="text-lg font-semibold">Agricultural Extension</h5>
            <p className="text-gray-400">Provide outreach and educational services...</p>
          </div>
          {/* Add more services as needed */}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

