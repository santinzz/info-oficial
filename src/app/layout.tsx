import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sushi Info Examen",
  description: "Sitio para examen de Informática página de sushi 🍣",
  icons: [
    {
      href: '/sushi.svg',
      url: '/sushi.svg',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-[#f0e9da]', inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
