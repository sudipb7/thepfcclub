import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
