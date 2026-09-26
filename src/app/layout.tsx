import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A.D. ENTERPRISES",
  description: "Manufacturer of LV Switch Boards & LT Bus Duct",
  robots: "noindex, nofollow", // QR landing pages are typically private/direct-only
  openGraph: {
    title: "A.D. ENTERPRISES",
    description: "Manufacturer of LV Switch Boards & LT Bus Duct",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
