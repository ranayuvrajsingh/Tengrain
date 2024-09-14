
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const customLeftArrow = (
  <IconButton style={{ position: "absolute", left: 10, zIndex: 1 }}>
    <ArrowBackIos style={{ color: "green" }} />
  </IconButton>
);

const customRightArrow = (
  <IconButton style={{ position: "absolute", right: 10, zIndex: 1 }}>
    <ArrowForwardIos style={{ color: "green" }} />
  </IconButton>
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const cardsData = [
  { imageSrc: "/carousel/1.jpg", title: "Vegetables" },
  { imageSrc: "/carousel/2.jpg", title: "Poultry" },
  { imageSrc: "/carousel/3.jpg", title: "Fruits" },
  { imageSrc: "/carousel/4.jpg", title: "Grains" },
  { imageSrc: "/carousel/5.jpg", title: "Dairy" },
  { imageSrc: "/carousel/6.jpg", title: "Farm Equipment" },
];

const ScrollableCards = () => {
  return (
    <div className="mt-24 bg-gray-100 border border-gray-100 rounded-lg shadow-lg overflow-hidden h-100">
      <Carousel
        responsive={responsive}
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        infinite
        autoPlay
        autoPlaySpeed={2000}  /* Auto scroll interval */
        transitionDuration={4000}  /* Smooth transition */
        showDots  /* Dots for indicating active card */
        dotListClass="custom-dot-list-style"
        removeArrowOnDeviceType={["tablet", "mobile"]}  /* Hide arrows on smaller devices */
      >
        {cardsData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="border border-gray-400 rounded-lg shadow-lg overflow-hidden">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                <a
                  href="#"
                  className="flex items-center text-green-800 font-serif hover:underline"
                >
                  Read More
                  <span className="ml-2 w-8 h-8 flex items-center justify-center bg-green-700 text-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ScrollableCards;
