// app/components/HeaderSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/MyLogo.jpg"
            alt="U4U Logo"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-green-100 group-hover:ring-green-300 transition-all"
          />
          <span className="font-bold text-green-700 text-lg">U4U</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 font-medium hover:text-green-600 transition relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://wa.me/2547XXXXXXXX?text=Hi%20Sharon,%20I'd%20like%20to%20book%20a%20session"
            target="_blank"
            className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition shadow-md"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-green-50 transition"
        >
          {isOpen ? <X className="w-6 h-6 text-green-700" /> : <Menu className="w-6 h-6 text-green-700" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-green-100">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-700 font-medium hover:bg-green-50 hover:text-green-600 rounded-lg transition"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/254759795304?text=Hi%20Sharon,%20I'd%20like%20to%20book%20a%20session"
              target="_blank"
              className="block w-full text-center py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Book via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};