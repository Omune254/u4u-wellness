"use client";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { HeaderSection } from "./components/HeaderSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div id="scroll-progress" style={{ width: `${width}%` }} aria-hidden="true" />;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      id="back-to-top"
      className={visible ? "visible" : ""}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>U4U Wellness Center | Mental Health &amp; Therapy in Nakuru, Kenya</title>
        <meta name="description" content="U4U Wellness Center offers compassionate, evidence-based mental health therapy in Nakuru, Kenya. Individual therapy, family counseling, youth support, and online sessions." />
        <meta name="keywords" content="mental health Nakuru, therapy Kenya, counseling Nakuru, psychologist Kenya, anxiety therapy, trauma counseling, family therapy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="U4U Wellness Center | Mental Health & Therapy in Nakuru, Kenya" />
        <meta property="og:description" content="Compassionate, evidence-based mental health support in Nakuru, Kenya. Book a session with our licensed psychologists today." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "U4U Wellness Center",
          "description": "Compassionate, evidence-based mental health therapy in Nakuru, Kenya",
          "url": "https://u4uwellnesscenter.co.ke",
          "telephone": "+254110707361",
          "email": "u4uwellnesscenter@gmail.com",
          "address": { "@type": "PostalAddress", "addressLocality": "Nakuru", "addressCountry": "KE" },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "15:00" }
          ],
          "sameAs": ["https://www.instagram.com/u4uwellnesscenter","https://www.linkedin.com/company/u4uwellnesscenter/","https://youtube.com/@u4uwellnesscenter"]
        })}} />
      </head>
      <body className="font-sans antialiased text-gray-800 bg-white selection:bg-emerald-100 selection:text-emerald-900">
        <ScrollProgress />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <HeaderSection />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
