import type { Metadata } from "next";
import { Caveat, Instrument_Serif } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Jatin Solanki — Product Designer",
  description:
    "Product designer at SocialPilot, crafting analytics, reviews and AI experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
