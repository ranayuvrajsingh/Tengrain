const DropdownMenu2 = () => {
  const services = [
    "Agricultural Economics", "Agricultural Extension", "Agricultural Machinery", "Agricultural Marketing", 
    "Agriculture History", "Agronomy", "Agrophysics", "Animal Sciences", "Antibody Production", "Apiculture", 
    "Applied Chemistry", "Applied Microbiology", "Aquaculture", "Biochemistry", "Bioremediation", "Biotechnology", 
    "Chemical Food Safety", "Crop and Pasture", "Crop Botany", "Crop Physiology", "Crop Science", "Crop Scouting", 
    "Dairy Science", "Energy Agriculture", "Engineering and Technology", "Entomology", "Fermentation Technology", 
    "Fish and Fisheries", "Food and Consumer Issues", "Food Chemistry", "Food Colouring", "Food Culture", 
    "Food Flavourings", "Food Health and Nutrition", "Food Safety", "Food Toxicology", "Food History", 
    "Food Packing and Storage", "Food Policy and Practices", "Food Preservation", "Food Processing", "Health", 
    "Microbiology", "Molecular Biology", "Mushroom Cultivation", "Nanoscale Food Science", "Nutrition", 
    "Organic Farming", "Pesticide Science", "Physiology", "Plant Sciences", "Plant Breeding", "Postharvest Biology", 
    "Poultry Science", "Seed Science Research", "Sensory and Food Quality", "Soil Science", "Stored Products", 
    "Sustainability Issues", "Sustainable Agriculture", "Veterinary", "Virology", "Viticulture", "Water Resources", 
    "Weed Biology"
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-opacity-90 backdrop-blur-md z-40 w-full max-w-screen-lg mx-auto text-green-600 p-6">
      {services.map((service, index) => (
        <a
          key={index}
          href="#"
          className="block text-gray-700 hover:text-green-500 hover:underline transition-colors duration-200"
        >
          {service}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu2;
