import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import AnimatedIcon from "./AnimatedIcon";

// const FacebookIconPath = "M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1.07 11.62H12v4.07h-2v-4.07H8v-1.6h2v-1.21c0-2.07 1.09-3.21 2.79-3.21.8 0 1.6.07 1.6.07v1.9h-1.04c-1.08 0-1.4.67-1.4 1.32v1.27h2.37l-.4 1.6z";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* First Section */}
        <div className="space-y-4">
          <img
            src="/logo-8.png" // Ensure to replace with the correct path to your logo
            alt="Company Logo"
            className="w-40 h-auto"
          />
          <p className="text-gray-700 text-lg">
            We bring the years, global experience, and stamina to guide our
            generations through new and often challenging realities.
          </p>
        </div>

        {/* Second Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1C4837]">Company</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-green-600 transition duration-300 cursor-pointer">
              Blog
            </li>
            <li className="text-gray-600 hover:text-green-600 transition duration-300 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-600 hover:text-green-600 transition duration-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1C4837]">Services</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-green-600 transition duration-300 cursor-pointer">
              Agricultural Development
            </li>
            <li className="text-gray-600 hover:text-green-600 transition duration-300 cursor-pointer">
              Agricultural Economics
            </li>
            <li className="text-gray-600 hover:text-green-600 transition duration-300 cursor-pointer">
              Agricultural Extension
            </li>
            <li className="text-gray-600 hover:text-green-600 transition duration-300 cursor-pointer">
              Agricultural Industry Issues
            </li>
            <li className="text-green-600 font-semibold hover:text-green-700 transition duration-300 cursor-pointer">
              {/* View all Services >>> */}
            </li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1C4837]">Connect</h3>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100076167060461"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-icon-wrapper no-underline shadow-none flex items-center justify-center text-gray-600 transition-transform transform hover:scale-110"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-icon-wrapper no-underline shadow-none flex items-center justify-center text-gray-600 transition-transform transform hover:scale-110"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          {/* <AnimatedIcon
        iconPath={FacebookIconPath}
        backgroundColor="#3b5998"
        iconColor="#fff"
        inkColor="#000"
        size="100px"
      /> */}
          {/* Contact Information */}
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-gray-800">
              <FaPhoneAlt className="text-green-600" />
              <span>+44 786 203 1265</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-800">
              <FaEnvelope className="text-green-600" />
              <span>info@tengrain.com</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-800">
              <FaMapMarkerAlt className="text-green-600" />
              <span>United Kingdom, India, Africa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
