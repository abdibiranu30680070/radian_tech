import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RadianTech - Building Intelligent Software Solutions",
  description: "We design, develop, and deliver innovative digital solutions that help businesses grow, automate processes, and achieve digital excellence.",
  keywords: ["software development", "enterprise solutions", "cloud computing", "AI", "cybersecurity", "mobile apps", "web development", "ERP", "IT consulting"],
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
