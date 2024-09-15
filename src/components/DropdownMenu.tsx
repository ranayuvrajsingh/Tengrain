// eslint-disable-next-line react-refresh/only-export-components
export const DropdownMenu = () => {
  const sections = [
    {
      title: "A to B",
      items: [
        "Agricultural Economics",
        "Agricultural Extension",
        "Agricultural Machinery",
        "Agricultural Marketing",
        "Agronomy",
        "Animal Sciences",
        "Apiculture",
        "Applied Chemistry",
        "Biochemistry",
        "Biotechnology",
      ],
    },
    {
      title: "B to F",
      items: [
        "Bioremediation",
        "Chemical Food Safety",
        "Crop and Pasture",
        "Crop Botany",
        "Crop Physiology",
        "Dairy Science",
        "Energy Agriculture",
        "Engineering and Technology",
        "Entomology",
        "Fermentation Technology",
        "Fish and Fisheries",
      ],
    },
    {
      title: "F to H",
      items: [
        "Food and Consumer Issues",
        "Food Chemistry",
        "Food Flavourings",
        "Food Health and Nutrition",
        "Food Safety",
        "Food Toxicology",
        "Food Policy and Practices",
        "Food Processing",
        "Health",
      ],
    },
    {
      title: "M to S",
      items: [
        "Microbiology",
        "Molecular Biology",
        "Mushroom Cultivation",
        "Nanoscale Food Science",
        "Nutrition",
        "Organic Farming",
        "Pesticide Science",
        "Plant Breeding",
        "Postharvest Biology",
        "Soil Science",
        "Sustainability Issues",
      ],
    },
    {
      title: "S to W",
      items: [
        "Stored Products",
        "Sustainable Agriculture",
        "Veterinary",
        "Virology",
        "Viticulture",
        "Water Resources",
        "Weed Biology",
      ],
    },
  ];

  return (
    <div className="flex flex-wrap bg-opacity-90 backdrop-blur-md z-40 w-full max-w-screen-lg mx-auto text-green-600 p-4">
      {sections.map((section, index) => (
        <div key={index} className="w-full lg:w-1/5 p-4">
          <h4 className="font-semibold text-lg mb-2 text-green-400 border-b-2 border-green-600 pb-1">
            {section.title}
          </h4>
          <ul className="space-y-1">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-black hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
