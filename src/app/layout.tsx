import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RadianTech - Odoo ERP & Business Websites",
  description: "RadianTech helps growing businesses organize operations with Odoo ERP and build professional websites that support their goals.",
  keywords: ["Odoo ERP", "Odoo implementation", "business websites", "web development", "ERP customization", "RadianTech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
