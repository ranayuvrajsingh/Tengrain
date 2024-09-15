import React, { useEffect, useRef, useState } from 'react';
import { LeafIcon, ChartIcon, CalculatorIcon, SeedlingIcon } from './Svg'; // Adjust the import path as needed

const AgricultureSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Store references to each card

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            setActiveCard(index);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) cardObserver.unobserve(card);
      });
    };
  }, []);

  const handleCardClick = (index: number) => {
    // Scroll to the clicked card
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setActiveCard(index);
  };

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-white to-green-50 py-24 px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-8">
          <h2 className={`text-5xl capitalize font-bold text-[#1C4837] leading-tight ${isVisible ? 'animate-drop' : ''}`}>
            The future is greener when we're more prepared
          </h2>
          <p className={`text-xl text-gray-700 leading-relaxed italic ${isVisible ? 'animate-drop' : ''}`}>
            We bring the breadth of our experience & knowledge to help the agro industries succeed.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* 1st SVG with Text */}
          <div
            ref={(el) => (cardRefs.current[0] = el)} // Assign ref to the first card
            className={`flex items-start space-x-4 group ${activeCard === 0 ? 'opacity-100' : 'opacity-50'}`}
          >
            <LeafIcon className="text-green-500 text-5xl group-hover:text-green-700 transition duration-300 ease-in-out" />
            <div>
              <h3 className={`text-lg font-semibold text-[#1C4837] group-hover:text-green-700 transition duration-300 ease-in-out italic ${isVisible ? 'animate-drop' : ''}`}>
                Developing Innovative Agriculture Options
              </h3>
              <p className={`text-sm text-gray-600 italic ${isVisible ? 'animate-drop' : ''}`}>
                Cutting-edge solutions for maximizing agricultural efficiency.
              </p>
            </div>
          </div>

          {/* 2nd SVG with Text */}
          <div
            ref={(el) => (cardRefs.current[1] = el)} // Assign ref to the second card
            className={`flex items-start space-x-4 group ${activeCard === 1 ? 'opacity-100' : 'opacity-50'}`}
          >
            <ChartIcon className="text-green-500 text-5xl group-hover:text-green-700 transition duration-300 ease-in-out" />
            <div>
              <h3 className={`text-lg font-semibold text-[#1C4837] group-hover:text-green-700 transition duration-300 ease-in-out italic ${isVisible ? 'animate-drop' : ''}`}>
                Improving Your Agriculture Business Planning
              </h3>
              <p className={`text-sm text-gray-600 italic ${isVisible ? 'animate-drop' : ''}`}>
                Strategic planning to scale and improve agricultural ventures.
              </p>
            </div>
          </div>

          {/* 3rd SVG with Text */}
          <div
            ref={(el) => (cardRefs.current[2] = el)} // Assign ref to the third card
            className={`flex items-start space-x-4 group ${activeCard === 2 ? 'opacity-100' : 'opacity-50'}`}
          >
            <CalculatorIcon className="text-green-500 text-5xl group-hover:text-green-700 transition duration-300 ease-in-out" />
            <div>
              <h3 className={`text-lg font-semibold text-[#1C4837] group-hover:text-green-700 transition duration-300 ease-in-out italic ${isVisible ? 'animate-drop' : ''}`}>
                Financial Modeling and Analytics in Agriculture
              </h3>
              <p className={`text-sm text-gray-600 italic ${isVisible ? 'animate-drop' : ''}`}>
                Robust financial models to support your farm’s profitability.
              </p>
            </div>
          </div>

          {/* 4th SVG with Text */}
          <div
            ref={(el) => (cardRefs.current[3] = el)} // Assign ref to the fourth card
            className={`flex items-start space-x-4 group ${activeCard === 3 ? 'opacity-100' : 'opacity-50'}`}
          >
            <SeedlingIcon className="text-green-500 text-5xl group-hover:text-green-700 transition duration-300 ease-in-out" />
            <div>
              <h3 className={`text-lg font-semibold text-[#1C4837] group-hover:text-green-700 transition duration-300 ease-in-out italic ${isVisible ? 'animate-drop' : ''}`}>
                Delivering the New Hybrids
              </h3>
              <p className={`text-sm text-gray-600 italic ${isVisible ? 'animate-drop' : ''}`}>
                New agricultural hybrids to enhance crop yield and quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center space-x-4 mt-8">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                activeCard === index ? 'bg-green-600' : 'bg-green-300'
              }`}
              onClick={() => handleCardClick(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default AgricultureSection;
