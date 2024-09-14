import React, { useEffect, useRef, useState } from 'react';
import { LeafIcon, ChartIcon, CalculatorIcon, SeedlingIcon } from './Svg'; // Adjust the import path as needed

const AgricultureSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
          <div className="flex items-start space-x-4 group">
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
          <div className="flex items-start space-x-4 group">
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
          <div className="flex items-start space-x-4 group">
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
          <div className="flex items-start space-x-4 group">
            <SeedlingIcon className="text-green-500 text-5xl group-hover:text-green-700 transition duration-300 ease-in-out" />
            <div>
              <h3 className={`text-lg font-semibold text-[#1C4837] group-hover:text-green-700 transition duration-300 ease-in-out ${isVisible ? 'animate-drop' : ''}`}>
                Delivering the New Hybrids
              </h3>
              <p className={`text-sm text-gray-600 ${isVisible ? 'animate-drop' : ''}`}>
                New agricultural hybrids to enhance crop yield and quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureSection;
