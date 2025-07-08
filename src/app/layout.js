import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./components/RootLayoutClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NCFAWC – Logistics & Warehousing Experts",
  description: "India’s trusted partner in cold chain, FMCG logistics, and smart warehousing solutions.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootLayoutClient>
          <Navbar />
          {children}
          <Footer />
        </RootLayoutClient>
      </body>
    </html>
  );
}
