import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CardProvider from "@/context/CardProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yantun Khaijan",
    template: "%s | Yantun Khaijan"
  },
  description: "Best foods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between items-center px-5 py-2 bg-slate-800">
          <Link href={'/'}><Image width={120} height={120} src="/logo.png" alt="" className="w-[120px]" /></Link>
          <div className="space-x-5">
            <Link className="btn" href={'/foods'}>Food</Link>
            <Link className="btn" href={'/reviews'}>Reviews</Link>

          </div>
        </header>
        <main className="py-8 px-5">
          <CardProvider>
            {children}
          </CardProvider>
        </main>
      </body>
    </html>
  );
}
