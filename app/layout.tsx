import type { Metadata } from "next";
import { IM_Fell_English_SC } from "next/font/google";
import "./globals.css";

const imFell = IM_Fell_English_SC({
  variable: "--font-im-fell",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Odyssey",
  description: "Odyssey - Los Angeles, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${imFell.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
