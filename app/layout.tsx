import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Postcard Me",
  description: "Create and send postcards online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-200">
      <body className={`${inter.className} py-8 px-8 min-h-screen flex flex-col justify-between`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
