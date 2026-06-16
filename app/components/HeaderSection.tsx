"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.405a.75.75 0 0 0 .916.938l5.733-1.505A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.027-1.381l-.36-.214-3.733.98.995-3.64-.234-.373A9.772 9.772 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export const HeaderSection = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = "mobile-nav";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    if (isOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/80"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="U4U Wellness Center — go to homepage">
            <div className="relative">
              <Image src="/MyLogo.jpg" alt="U4U Wellness Center logo" width={40} height={40} className="rounded-full border-2 border-emerald-100 shadow-sm group-hover:border-emerald-300 transition-colors duration-200" priority />
            </div>
            <div className="hidden sm:block">
              <p className={`font-extrabold text-lg leading-tight transition-colors duration-300 ${scrolled ? "text-green-900" : "text-white"}`}>
                U4U <span className="text-emerald-500">Wellness</span>
              </p>
              <p className={`text-xs font-medium tracking-wide transition-colors duration-300 ${scrolled ? "text-gray-500" : "text-white/60"}`}>
                Center · Nakuru
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? scrolled ? "text-emerald-700 bg-emerald-50" : "text-emerald-300 bg-white/10"
                      : scrolled ? "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50" : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-emerald-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a session via WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <WhatsAppIcon />
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors duration-200 ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls={menuId}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-green-100 shadow-xl"
          >
            <nav className="container mx-auto px-4 sm:px-6 py-5 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
                      isActive ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {link.label}
                    {isActive && <span className="h-2 w-2 rounded-full bg-emerald-600 flex-shrink-0" />}
                  </Link>
                );
              })}
              <div className="pt-3">
                <a
                  href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  aria-label="Book a session via WhatsApp"
                  className="flex items-center justify-center gap-2.5 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg transition-all duration-300"
                >
                  <WhatsAppIcon />
                  Book a Session via WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
