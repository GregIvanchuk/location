import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Location Translation Agency",
  description:
    "Location is a professional translation agency offering high-quality language services. We provide accurate and reliable translations for businesses and individuals.",
  keywords: [
    "translation services",
    "professional translation",
    "language translation",
    "business translation",
    "certified translations",
    "document translation",
    "multilingual services",
    "translation agency",
    "localization services",
    "interpretation services",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
