// app/components/HeaderSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/MyLogo.jpg"                     
            alt="U4U Wellness Center Logo"
            width={48}
            height={48}
            className="rounded-full ring-4 ring-green-100 group-hover:ring-green-300 transition-all shadow-lg"
            priority
          />
          <div>
            <div className="font-bold text-2xl text-green-700 leading-none">U4U</div>
            <div className="text-xs text-green-600 font-medium">Wellness Center</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-gray-700 font-medium hover:text-green-600 transition">Home</Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-green-600 transition">About</Link>
          <Link href="/services" className="text-gray-700 font-medium hover:text-green-600 transition">Services</Link>
          <Link href="/contact" className="text-gray-700 font-medium hover:text-green-600 transition">Contact</Link>

          {/* Book Button */}
          <a
            href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-green-50 transition"
        >
          {isOpen ? <X className="w-7 h-7 text-green-700" /> : <Menu className="w-7 h-7 text-green-700" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-green-100 shadow-xl">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-green-600">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-green-600">Services</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-700 hover:text-green-600">Contact</Link>
            <a
              href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg"
            >
              Book via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};