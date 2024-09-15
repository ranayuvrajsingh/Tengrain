const TopContactSection = () => {
  return (
    <section className="w-full h-[76vh] mt-8 relative overflow-hidden">
      {/* Image Section */}
      <img
        src="https://tengrain.com/wp-content/uploads/2020/09/hero_contact.jpg"
        alt="Top Section Image"
        className="w-full h-full object-cover object-top"
      />
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-2xl">
          We are an organization motivated by people and the planet
        </p>
      </div>
    </section>
  );
};

export default TopContactSection;
