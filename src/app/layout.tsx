import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import HorizontalAds from "@/components/HorizontalAds";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets:['latin'],
  variable: '--font-playfair-display'
})

const lato = Lato({
  subsets:['latin'],
  variable: '--font-lato',
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "D-News",
  description: "Stay Informed, Stay Ahead!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body className="font-secondary flex">
        {children}
      </body>
    </html>
  );
}
