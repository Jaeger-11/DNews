import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";

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
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
