import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCEND - Verified Executive Protection in Nigeria",
  description: "Professional, discreet, and verified security services across Nigeria. Trusted by executives, corporations, and high-profile individuals.",
  keywords: "executive protection, bodyguard, security services, Nigeria, Lagos, Abuja, personal security",
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
