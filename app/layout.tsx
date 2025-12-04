// app/layout.tsx
import type { Metadata } from "next";
import { HeaderSection } from "./components/HeaderSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "U4U Wellness Center | Healing, Growth & Emotional Wellness",
  description:
    "U4U Wellness Center – Your safe, confidential space for mental health counseling, therapy, and personal growth in Kenya.",
  keywords:
    "U4U Wellness Center, mental health Kenya, therapy Nakuru, psychologist Kenya, anxiety counseling, CBT therapy, emotional wellness",
  authors: [{ name: "Sharon Muchemi & Wanjiku Ngugi" }],
  openGraph: {
    title: "U4U Wellness Center",
    description: "Your safe space for healing, growth, and emotional wellness.",
    url: "https://u4u-wellness.vercel.app",
    siteName: "U4U Wellness Center",
    images: [
      {
        url: "/sharon.jpg",
        width: 1200,
        height: 630,
        alt: "U4U Wellness Center Healing Starts Here",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "U4U Wellness Center",
    description: "Your safe space for healing and growth.",
    images: ["/sharon.jpg"],
  },
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
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />

        {/* Theme Color for Mobile */}
        <meta name="theme-color" content="#166534" />
      </head>

      <body className="font-sans text-gray-800 antialiased">
        <HeaderSection />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}