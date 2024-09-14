import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaSearch,
} from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search toggle state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open and close
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search bar open and close
  };

  const handleServicesHover = (status: boolean) => {
    setIsServicesHovered(status);
    setIsOverlayVisible(status);
  };

  return (
    <div className="relative">
<div className="fixed top-0 left-0 right-0 bg-black text-white text-sm py-2 px-4 flex justify-between items-center z-40">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt />
          <span>Jaipur, Rajasthan</span>
          <FaPhoneAlt />
          <span>+91 9876543210</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-400" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-600" />
          </a>
        </div>
      </div>


      {/* Video background */}
      <video
        className="relative inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
        onEnded={(e) => e.currentTarget.pause()}
      >
        <source
          src="https://tengrain.com/wp-content/uploads/2022/09/VID-20211109-WA0000.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Top Black Strip */}
      {/* <div className="absolute top-0 left-0 right-0 bg-black text-white text-sm py-2 px-4 flex justify-between items-center z-20">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt />
          <span>Jaipur, Rajasthan</span>
          <FaPhoneAlt />
          <span>+91 9876543210</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-400" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-600" />
          </a>
        </div>
      </div> */}
      {/* Navbar */}
      <nav className="fixed top-9 left-0 right-0 bg-black bg-opacity-80 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-2xl font-bold text-white">
                <img src="/TENGRAIN-ai-1.png" alt="Logo" width={200} />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-white hover:text-green-500 uppercase border-b-8 border-transparent hover:border-green-500 bg-transparent hover:bg-white px-4 py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-green-500 uppercase border-b-8 border-transparent hover:border-green-500 bg-transparent hover:bg-white px-4 py-2"
              >
                About Us
              </a>

              {/* Services with dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleServicesHover(true)}
                onMouseLeave={() => handleServicesHover(false)}
              >
                <a
                  href="#"
                  className="text-white hover:text-green-500 uppercase border-b-8 border-transparent hover:border-green-500 bg-transparent hover:bg-white px-4 py-1 mt-4"
                >
                  Services
                </a>

                {/* Full-page overlay */}
                {isOverlayVisible && (
                  <div
                    className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-md z-40 overflow-auto"
                    style={{ top: "5rem" }} // Adjust this value to move the popup down
                    onMouseEnter={() => handleServicesHover(true)}
                    onMouseLeave={() => handleServicesHover(false)}
                  >
                    <DropdownMenu />
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-white hover:text-green-500 uppercase border-b-8 border-transparent hover:border-green-500 bg-transparent hover:bg-white px-4 py-2"
              >
                Contact
              </a>
            </div>

            {/* Search Icon */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="text-white hover:text-green-500"
              >
                <FaSearch size={18} />
              </button>

              {/* Conditional Search Input */}
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 p-2 border rounded bg-white text-black focus:outline-none"
                />
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={toggleMenu} // This toggles the mobile menu open/close
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-50"
              >
                <span className="sr-only">Open main menu</span>
                <div className={`hamburger ${isOpen ? "open" : ""}`}>
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu fixed inset-0 bg-black bg-opacity-75 z-50 mt-24">
          <ul className="text-white">
            {/* Home link with hover effect */}
            <li className="py-2 px-4" onClick={toggleMenu}>
              <a
                href="#home"
                className="block w-full h-full hover:bg-white hover:bg-opacity-10 hover:text-green-400 transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>

            {/* About Us link with hover effect */}
            <li className="py-2 px-4" onClick={toggleMenu}>
              <a
                href="#about"
                className="block w-full h-full hover:bg-white hover:bg-opacity-10 hover:text-green-400 transition duration-300 ease-in-out"
              >
                About Us
              </a>
            </li>

            {/* Services dropdown with hover effect */}
            <li className="py-2 px-4 relative group">
              <div
                className="cursor-pointer block w-full h-full hover:bg-white hover:bg-opacity-10 hover:text-green-400 transition duration-300 ease-in-out"
                onClick={() => toggleMenu()}
              >
                Services
              </div>

              {/* Scrollable dropdown menu with hover */}
              <div className="max-h-40 overflow-y-auto mt-2 bg-white text-black p-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute left-0 w-full">
                <DropdownMenu />
              </div>
            </li>

            {/* Contact link with hover effect */}
            <li className="py-2 px-4" onClick={toggleMenu}>
              <a
                href="#contact"
                className="block w-full h-full hover:bg-white hover:bg-opacity-10 hover:text-green-400 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
