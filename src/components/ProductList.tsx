// Sample Data
const productData = [
  {
    title: "Food Grains / Cereals",
    image:
      "https://tengrain.com/wp-content/uploads/2022/09/biologist-1-1-740x1280.jpg", // Replace with actual image URL
    items: [
      "Arhar",
      "Arhar Dal Split",
      "Bajra",
      "Barley",
      "Basmati Rice",
      "Buck Wheat",
      "Chakhao Or Black Rice",
      "Chana Dal Split",
      "Chana Whole",
      "Horse Gram",
      "Jowar",
      "Kabuli Chana Whole",
      "Lobia",
      "Maize",
      "Masoor Whole",
      "Moong Dal Split",
      "Moong Whole",
      "Moth",
      "Oats Raw",
      "Paddy",
      "Ragi",
      "Rajma",
      "Urad Dal Split",
      "Urad Whole",
      "Wheat",
      "White Peas",
    ],
  },
  {
    title: "Oilseeds",
    image:
      "https://tengrain.com/wp-content/uploads/2022/09/biologist-2-1-740x1280.jpg", // Replace with actual image URL
    items: [
      "Castor Seed",
      "Cotton Seed",
      "Kusum Seed",
      "Linseed",
      "Mustard Seed",
      "Neem Seeds",
      "Nigar Seed",
      "Peanut Kernel",
      "Pongam Seeds",
      "Rapeseed",
      "Sal Seed",
      "Sesame Seed",
      "Soyabean",
      "Sunflower Seed",
    ],
  },
  {
    title: "Vegetables",
    image:
      "https://tengrain.com/wp-content/uploads/2022/09/biologist-6-1-740x1280.jpg", // Replace with actual image URL
    items: [
      "Aloe Vera",
      "Arrowroot",
      "Banana Raw",
      "Beetroot",
      "Bhindi/okra",
      "Bitter Gourd",
      "Bottle Gourd",
      "Brinjal",
      "Broccoli/calabrese",
      "Button Mushroom",
      "Cabbage",
      "Capsicum",
      "Carrots",
      "Cauliflower",
      "Cluster Beans",
      "Colocasia Vegetable",
      "Coriander Leaves",
      "Cucumber",
      "Curry Leaves",
      "Drumstick",
      "Fenugreek Leaves",
      "Garlic",
      "Gherkin",
      "Ginger",
      "Green Amaranthus",
      "Green Chillies",
      "Ivy Gourd",
      "Jimikand (Suran)",
      "Lesser Yam",
      "Lobia Pods",
      "Mint Leaves",
      "Mustard Leaf",
      "Onion",
      "Oyster Mushroom",
      "Pea",
      "Pointed Gourd",
      "Potato",
      "Pumpkin",
      "Raw Turmeric",
      "Red Amaranthus",
      "Reddish",
      "Ribbed Celery",
      "Ridge Gourd",
      "Round Chilli",
      "Safed Petha",
      "Sem",
      "Snake Guard",
      "Spinach",
      "Sponge Gourd",
      "Spring Onion",
      "Sugar Snap Peas",
      "Sweet Corn",
      "Sweet Potato",
      "Tapioca",
      "Tinda",
      "Tomato",
      "Winged Bean",
    ],
  },
  {
    title: "Spices",
    image:
      "https://tengrain.com/wp-content/uploads/2022/09/biologist-5-1-740x1280.jpg", // Replace with actual image URL
    items: [
      "Ajwain",
      "Black Pepper Whole",
      "Cardamoms Whole",
      "Cloves Whole",
      "Coriander Whole",
      "Cumin",
      "Dried Raw Mango Slices",
      "Dry Ginger",
      "Fennel Seed",
      "Fenugreek Seed",
      "Large Cardamom",
      "Mace Whole",
      "Poppy Seed",
      "Red Chilli",
      "Tejpata",
      "Turmeric",
    ],
  },
  {
    title: "Misc",
    image:
      "https://tengrain.com/wp-content/uploads/2022/09/biologist-7-1-740x1280.jpg", // Replace with actual image URL
    items: [
      "Anthurium",
      "Areca Nut (Betel Nut)",
      "Bamboo",
      "Betel Leaves",
      "Carnation",
      "Chhappan Kaddu",
      "Chironji",
      "Chrysanthemum",
      "Coconut",
      "Coconut With Husk",
      "Cotton",
      "Gerbera",
      "Ginger Seed",
      "Gladiolus",
      "Groundnut With Pods",
      "Guar Seed",
      "Hilsa",
      "Isabgol",
      "Jack Fruit Seed",
      "Jaggery",
      "Jute Seeds",
      "Lily",
      "Mahua Flower",
      "Mahua Seed",
      "Marigold",
      "Nutmeg Whole",
      "Persimmon",
      "Raisins",
      "Raw Cashew Nut",
      "Raw Coffee Beans",
      "Raw Jute",
      "Rittha",
      "Rose Cut Flower",
      "Safed Musli",
      "Saffron",
      "Spray Chrysanthemum",
      "Tamarind",
      "Tender Coconut",
      "Tuberose",
      "Tulip",
      "Walnuts Inshell",
    ],
  },
];
const ProductList = () => {
  const itemsPerColumn = 15; // Set the max number of items per column

  return (
    <div className="container mx-auto py-10">
      {productData.map((category, index) => {
        // const totalItems = category.items.length;
        const firstColumnItems = category.items.slice(0, itemsPerColumn);
        const secondColumnItems = category.items.slice(itemsPerColumn, itemsPerColumn * 2);

        return (
          <div key={index} className="flex flex-col md:flex-row mb-10">
            {/* Image Section */}
            <div className="md:w-1/2 p-4">
              <img
                src={category.image}
                alt={category.title}
                className="w-[30vw] h-[40rem] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Content Section */}
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-2">
                  {firstColumnItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-lg italic">
                      {itemIndex + 1}. {item}
                    </div>
                  ))}
                </div>
                {/* Column 2 */}
                <div className="space-y-2">
                  {secondColumnItems.map((item, itemIndex) => (
                    <div key={itemIndex + itemsPerColumn} className="text-lg italic">
                      {itemIndex + itemsPerColumn + 1}. {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Coming Soon Section */}
            </div>
          </div>
        );
      })}
      <div className="mt-10 h-[42vh] p-4 bg-gray-200 text-center rounded-lg shadow-md">
        <h3 className="text-4xl font-semibold">Coming Soon</h3>
        <p className="mt-2 text-2xl">Stay tuned for more exciting products!</p>
      </div>
    </div>
  );
};

export default ProductList;

