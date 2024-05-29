import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { items } from "@/dataMocked/items";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
  description: "MoviesDB web portal for protafolio purpouse, aureio.com",
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav items={items}/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
