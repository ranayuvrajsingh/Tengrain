import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// Newsletter Form Component
const NewsletterForm = () => {
  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg mb-12">
      <header className="mb-4">
        <h4 className="text-2xl font-semibold tracking-tight mt-8">
          <span>Subscribe to our Newsletter</span>
        </h4>
      </header>
      <div className="flex items-center max-w-md mx-auto">
        <form
          action="/about/#wpcf7-f1292-p11-o2"
          method="post"
          className="flex w-full"
          aria-label="Contact form"
          noValidate
        >
          <input
            className="flex-1 p-3 rounded-l border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
            aria-required="true"
            aria-invalid="false"
            placeholder="Your email"
            type="email"
            name="your-email"
          />
          <input
            className="p-3 rounded-r bg-green-600 text-white font-semibold cursor-pointer hover:bg-green-500 focus:outline-none"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
};

const Footer2: React.FC = () => {
  return (
    <div className="bg-black py-12 px-6">
      {/* Newsletter Form */}
      <NewsletterForm />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* First Section */}
        <div className="space-y-4">
          <img
            src="/TENGRAIN-ai-1.png" // Ensure to replace with the correct path to your logo
            alt="Company Logo"
            className="w-40 h-auto"
          />
          <p className="text-gray-300 text-lg">
            We bring the years, global experience, and stamina to guide our
            generations through new and often challenging realities.
          </p>
        </div>

        {/* Second Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1C4837]">Company</h3>
          <ul className="space-y-2">
            <li className="text-white hover:text-green-400 transition duration-300 cursor-pointer">
              Blog
            </li>
            <li className="text-white hover:text-green-400 transition duration-300 cursor-pointer">
              About Us
            </li>
            <li className="text-white hover:text-green-400 transition duration-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1C4837]">Services</h3>
          <ul className="space-y-2">
            <li className="text-white hover:text-green-400 transition duration-300 cursor-pointer">
              Agricultural Development
            </li>
            <li className="text-white hover:text-green-400 transition duration-300 cursor-pointer">
              Agricultural Economics
            </li>
            <li className="text-white hover:text-green-400 transition duration-300 cursor-pointer">
              Agricultural Extension
            </li>
            <li className="text-white hover:text-green-400 transition duration-300 cursor-pointer">
              Agricultural Industry Issues
            </li>
            <li className="text-green-400 font-semibold hover:text-green-300 transition duration-300 cursor-pointer">
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
              className="flex items-center justify-center text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white transition-transform transform hover:scale-110"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-gray-300">
              <FaPhoneAlt className="text-green-400" />
              <span>+44 786 203 1265</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <FaEnvelope className="text-green-400" />
              <span>info@tengrain.com</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <FaMapMarkerAlt className="text-green-400" />
              <span>United Kingdom, India, Africa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-24 flex flex-col items-center  flex-wrap border-t border-gray-600 py-4 text-center text-gray-300">
        <p className="text-sm">©2022 Tengrain. All rights reserved</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy-policy" className="text-green-400 hover:text-green-300">Privacy Policy</a>
          <a href="/cookie-policy" className="text-green-400 hover:text-green-300">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
