"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    if (activePath === path) {
      return "bg-white text-black font-bold";
    } else {
      return "text-gray-500 hover:bg-gray-700 hover:text-white";
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 lg:mx-8">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-sm text-gray-700 font-semibold">
            Train Booking
          </span>
          <img src="/2.png" alt="Logo" className="h-8 w-auto mr-2" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className={`px-4 py-2 rounded ${getLinkClass("/")}`}>
            Home
          </a>
          <a
            href="/about"
            className={`px-4 py-2 rounded ${getLinkClass("/about")}`}
          >
            About
          </a>
          <a
            href="/privacy-policy"
            className={`px-4 py-2 rounded ${getLinkClass("/privacy-policy")}`}
          >
            Privacy Policy
          </a>

          {/* Toll-Free Button - Visible only on Desktop */}
          <a
            href="tel:+18884948492"
            className="bg-pink-500 text-white mx-6 px-6 py-2 rounded-full hidden md:block"
          >
            TOLL FREE (888) 746-1595
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white bg-pink-500 px-4 py-2 rounded-full focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className={`block px-4 py-2 ${getLinkClass("/")}`}>
            Home
          </a>
          <a
            href="/about"
            className={`block px-4 py-2 ${getLinkClass("/about")}`}
          >
            About
          </a>
          <a
            href="/privacy-policy"
            className={`block px-4 py-2 ${getLinkClass("/privacy-policy")}`}
          >
            Privacy Policy
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
