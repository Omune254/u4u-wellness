"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-teal-600">Sharons therapy</h1>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 hover:text-teal-600 transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-600 hover:text-teal-600 transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-600 hover:text-teal-600 transition"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-teal-600 transition"
          >
            Contact
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
