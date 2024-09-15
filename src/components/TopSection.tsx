
const TopSection = () => {
  return (
    <section className="w-full h-96 relative">
      {/* Image Section */}
      <img
        src="https://tengrain.com/wp-content/uploads/2022/09/New-Project-3-1-3.jpg"
        alt="Top Section Image"
        className="w-full h-full object-cover"
      />
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg">Explore the latest in our collection</p>
      </div>
    </section>
  );
};

export default TopSection;
