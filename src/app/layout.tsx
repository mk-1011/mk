"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        {loading && <LoadingScreen />}
        {!loading && (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}