import type { Metadata } from "next";
import "./globals.css"; 
import { FooterComponents, HeaderComponents } from "@/components";

 
export const metadata: Metadata = {
  title: "Home",
  description: "citas -pacientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <HeaderComponents/>
          <main className="w-full">
              {children}
          </main>
        <FooterComponents/>
      </body>
    </html>
  );
}
