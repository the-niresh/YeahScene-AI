import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YeahScene AI — Custom AI Layers & Autonomous Agents",
  description: "We integrate custom AI layers and autonomous agents directly into your business to automate operations and scale efficiency. Elite AI automation agency.",
  icons: {
    icon: "/yeahscene.svg",
  },
  openGraph: {
    title: "YeahScene AI — Custom AI Layers & Autonomous Agents",
    description: "We integrate custom AI layers and autonomous agents directly into your business to automate operations and scale efficiency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${outfit.variable} antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#0D0D1F',
              border: '1px solid rgba(200,169,110,0.3)',
              color: '#EEEAE0',
              fontFamily: 'Outfit, sans-serif',
            },
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
