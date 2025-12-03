// app/layout.tsx
import type { Metadata } from "next";
import { HeaderSection } from "./components/HeaderSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "U4U Wellness Center",
  description: "Your safe space for healing, growth, and emotional wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="U4U Wellness Center – Healing, Growth, Emotional Wellness in Kakamega" />
        <meta property="og:title" content="U4U Wellness Center" />
        <meta property="og:description" content="Your safe space for healing and growth." />
        <meta property="og:image" content="/sharon.jpg" />
        <meta property="og:url" content="https://myspacecare.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <HeaderSection />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}