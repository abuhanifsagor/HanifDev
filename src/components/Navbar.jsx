import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";
import cv from   "../../public/Abu_hanif_Sagor.pdf"

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // track scroll

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll position and update "scrolled" state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = () => (
    <div className="flex-shrink-0 flex items-center text-center">
      <img src={logo} alt="" className="w-12 h-12" />
      <span className="text-lg md:text-2xl font-semibold">
        Hanif <b className="text-blue-600">Dev</b>
      </span>
    </div>
  );

  const getNavLinkClass = ({ isActive }) =>
    `px-4 py-2 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 ${
      isActive ? "font-semibold text-blue-600" : ""
    }`;

  const getMobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 w-full text-center ${
      isActive ? "font-semibold text-blue-600" : ""
    }`;

  return (
    <nav
      className={`w-full fixed top-0 z-50 p-4 rounded-b-lg transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md " : "bg-[#f5f5f5]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap relative">
        {/* Mobile Top Bar */}
        <div className="w-full flex b items-center justify-between  md:hidden">
          <Logo />

          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
          <NavLink to="/Contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Center Logo for Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
          <Logo />
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex md:items-center md:ml-auto">
          <a
            href={cv}
            download
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen mt-4" : "max-h-0"
          } w-full`}
        >
          <div className="flex  border-gray-200 flex-col items-center space-y-2">
            <div className="divider w-50 mb-0 -mt-2 mx-auto"> </div>
            <NavLink
              to="/"
              className={getMobileNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={getMobileNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={getMobileNavLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex flex-col items-center mt-4 w-full px-4 space-y-2">
              <a
                href={cv}
                download
                target="_blank"
                className="relative w-full inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-800"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white"> Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
