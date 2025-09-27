import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";


const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});


export const metadata: Metadata = {
  title: "CARDS",
  description: "Hello my name is KAKA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin} ${libreFranklin} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
