import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaSearch,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu } from "./DropdownMenu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const location = useLocation(); // Get current path

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Helper function to check if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative">
      {/* Top Black Strip */}
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

      {/* Navbar */}
      <nav className="fixed top-9 left-0 right-0 bg-black bg-opacity-80 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                <img src="/TENGRAIN-ai-1.png" alt="Logo" width={200} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`${
                  isActive("/")
                    ? "text-green-500 border-green-500"
                    : "text-white hover:text-green-500 border-transparent"
                } uppercase border-b-8 bg-transparent hover:bg-white px-4 py-2`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive("/about")
                    ? "text-green-500 border-green-500"
                    : "text-white hover:text-green-500 border-transparent"
                } uppercase border-b-8 bg-transparent hover:bg-white px-4 py-2`}
              >
                About Us
              </Link>

              {/* Services with dropdown */}
              <div
                className="flex relative"
                onMouseEnter={() => setIsOverlayVisible(true)}
                onMouseLeave={() => setIsOverlayVisible(false)}
              >
                <Link
                  to="/service"
                  className={`${
                    isActive("/service")
                      ? "text-green-500 border-green-500"
                      : "text-white hover:text-green-500 border-transparent"
                  } uppercase border-b-8 bg-transparent hover:bg-white text-white flex justify-center items-center  hover:text-green-500  border-transparent hover:border-green-500  `}
                >
                  Services
                </Link>

                {/* Full-page overlay */}
                {isOverlayVisible && (
                  <div
                    className="fixed inset-0 min-w-full bg-opacity-90 backdrop-blur-md z-40 overflow-auto"
                    style={{ top: "6rem" }}
                    onMouseEnter={() => setIsOverlayVisible(true)}
                    onMouseLeave={() => setIsOverlayVisible(false)}
                  >
                    <DropdownMenu />
                  </div>
                )}
              </div>

              <Link
                to="/product"
                className={`${
                  isActive("/product")
                    ? "text-green-500 border-green-500"
                    : "text-white hover:text-green-500 border-transparent"
                } uppercase border-b-8 bg-transparent hover:bg-white px-4 py-2`}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`${
                  isActive("/contact")
                    ? "text-green-500 border-green-500"
                    : "text-white hover:text-green-500 border-transparent"
                } uppercase border-b-8 bg-transparent hover:bg-white px-4 py-2`}
              >
                Contact
              </Link>
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
                onClick={toggleMenu}
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
            <li className="py-2 px-4" onClick={toggleMenu}>
              <Link
                to="/"
                className={`${
                  isActive("/")
                    ? "bg-green-500 text-white"
                    : "hover:bg-white hover:bg-opacity-10 hover:text-green-400"
                } block w-full h-full transition duration-300 ease-in-out`}
              >
                Home
              </Link>
            </li>
            <li className="py-2 px-4" onClick={toggleMenu}>
              <Link
                to="/about"
                className={`${
                  isActive("/about")
                    ? "bg-green-500 text-white"
                    : "hover:bg-white hover:bg-opacity-10 hover:text-green-400"
                } block w-full h-full transition duration-300 ease-in-out`}
              >
                About Us
              </Link>
            </li>
            
            <li className="py-2 px-4" onClick={toggleMenu}>
              <Link
                to="/product"
                className={`${
                  isActive("/product")
                    ? "bg-green-500 text-white"
                    : "hover:bg-white hover:bg-opacity-10 hover:text-green-400"
                } block w-full h-full transition duration-300 ease-in-out`}
              >
                Product
              </Link>
            </li>
            <li className="py-2 px-4" onClick={toggleMenu}>
              <Link
                to="/contact"
                className={`${
                  isActive("/contact")
                    ? "bg-green-500 text-white"
                    : "hover:bg-white hover:bg-opacity-10 hover:text-green-400"
                } block w-full h-full transition duration-300 ease-in-out`}
              >
                Contact
              </Link>
            </li>

            <li className="py-2 px-4 relative group">
              <Link 
               to="/service"
                className="cursor-pointer block w-full h-full hover:bg-white hover:bg-opacity-10 hover:text-green-400 transition duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <div className="max-h-40 overflow-y-auto mt-2 bg-white text-black p-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute left-0 w-full">
                <DropdownMenu />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
