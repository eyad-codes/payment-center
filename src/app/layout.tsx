import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Payment Center",
  description: "Secure payment details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}