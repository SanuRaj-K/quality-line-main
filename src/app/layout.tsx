import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navabar";
import Footer from "@/components/footer";
import WhatsappIcon from "@/components/whatssap";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Quality Line- Leading Experts in Welding & Automoblie | Quality Solutions & Innovative Technologies",
  description:
    "Top Support is a trusted leader in Welding and Automobile with over 30 years of experience. We offer high-quality solutions, from vechicle  body to advanced  systems, with a focus on excellence, innovation, and customer satisfaction. Discover our comprehensive services and expert team dedicated to delivering exceptional results.",
  keywords: [
    "construction solutions",
    "waterproofing systems",
    "geosynthetics",
    "construction chemicals",
    "fiber mesh",
    "PVC materials",
    "construction products",
    "Top Support",
    "construction contracting",
    "building materials",
    "technical support",
    "construction innovation",
    "high-quality construction products",
  ],
  openGraph: {
    title:
      "Top Support - Leading Construction Solutions | Waterproofing, Geosynthetics & More",
    description:
      "Discover Top Support’s extensive range of construction solutions with over 25 years of industry expertise. From advanced waterproofing systems and geosynthetics to high-quality construction chemicals, we provide innovative products and exceptional service for all your construction needs.",
    images: "/Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <WhatsappIcon />
        <Footer />
      </body>
    </html>
  );
}
