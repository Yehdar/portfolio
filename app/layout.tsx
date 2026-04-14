import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radhey Patel — Portfolio",
  description: "Software Engineer · Toronto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-dvh overflow-hidden antialiased`}>
      <body className="h-dvh overflow-hidden bg-black">{children}</body>
    </html>
  );
}
