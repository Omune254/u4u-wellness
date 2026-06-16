import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/u4uwellnesscenter/",
    label: "Follow U4U on LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@u4uwellnesscentre",
    label: "Follow U4U on TikTok",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.58 7.05c-1.35-1.54-2.02-3.48-1.86-5.51h-4.67v11.59c0 2.05-1.66 3.71-3.71 3.71-2.05 0-3.71-1.66-3.71-3.71 0-2.05 1.66-3.71 3.71-3.71.34 0 .67.05 1 .14v-4.58c-3.33.27-6 3.08-6 6.48 0 3.58 2.91 6.48 6.48 6.48 3.58 0 6.48-2.91 6.48-6.48v-5.82c1.35 1.02 3 1.61 4.85 1.61v-4.67c-1.65 0-3.12-.73-4.11-1.88z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/u4uwellnesscenter",
    label: "Follow U4U on Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.258-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@u4uwellnesscenter",
    label: "Subscribe to U4U on YouTube",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
      </svg>
    ),
  },
];

// WhatsApp SVG — consistent with hero & navbar
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.405a.75.75 0 0 0 .916.938l5.733-1.505A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.027-1.381l-.36-.214-3.733.98.995-3.64-.234-.373A9.772 9.772 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="relative bg-green-900 overflow-hidden"
    >
      {/* Background leaf texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/footer-leaf-pattern.jpg"
          alt=""
          fill
          className="object-cover"
          quality={60}
          aria-hidden="true"
        />
      </div>
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12">

          {/* ── Brand column ── */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="U4U Wellness Center — home">
              <div className="relative flex-shrink-0">
                <Image
                  src="/MyLogo.jpg"
                  alt="U4U Wellness Center logo"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white/25 shadow-lg"
                />
              </div>
              <div>
                <p className="font-extrabold text-xl text-white leading-tight">U4U</p>
                <p className="text-xs text-green-200/70 font-medium tracking-wide">Wellness Center</p>
              </div>
            </Link>

            <p className="text-green-100/80 text-sm leading-relaxed max-w-xs">
              Your safe space for healing, growth, and emotional wellness — rooted
              in Nakuru, serving Kenya.
            </p>

            <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-emerald-300 flex-shrink-0" aria-hidden="true" />
              <p className="text-xs text-green-100/75 leading-snug">
                Registered · Kenya Counsellors & Psychologists Board
              </p>
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-100/75 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ── */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-emerald-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm space-y-0.5">
                  <a
                    href="tel:+254110707361"
                    className="block text-green-100/80 hover:text-white transition-colors duration-200"
                  >
                    0110 707 361
                  </a>
                  <a
                    href="tel:+254110003924"
                    className="block text-green-100/80 hover:text-white transition-colors duration-200"
                  >
                    0110 003 924
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-emerald-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="mailto:u4uwellnesscenter@gmail.com"
                  className="text-sm text-green-100/80 hover:text-white transition-colors duration-200 break-all"
                >
                  u4uwellnesscenter@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-green-100/80">Nakuru, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-emerald-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-green-100/80 space-y-0.5">
                  <p>Mon – Fri: 9AM – 7PM</p>
                  <p>Sat: 10AM – 3PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Social + CTA ── */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-base mb-5 tracking-wide">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a session with U4U Wellness Center on WhatsApp"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-green-900 font-bold text-sm rounded-full shadow-lg hover:bg-emerald-50 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <WhatsAppIcon />
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-green-100/50">
          <p>© {currentYear} U4U Wellness Center · Nakuru, Kenya · All rights reserved</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now accepting new clients
          </p>
        </div>
      </div>
    </footer>
  );
};
