import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RM11 Creator Partners | Get Paid to Talk About RM11",
  description:
    "Join the first fan platform that pays YouTube creators. Earn $1,000–$5,000/month plus uncapped referral bonuses. 90% payouts, daily payments, full creative freedom.",
  keywords: [
    "RM11",
    "YouTube partner program",
    "creator sponsorship",
    "OnlyFans alternative",
    "fan platform",
    "creator economy",
    "YouTube sponsorship",
  ],
  openGraph: {
    title: "RM11 Creator Partners — Get Paid to Talk About RM11",
    description:
      "Earn $1K–$5K/month creating YouTube content about the platform that pays creators more. No other fan platform does this.",
    type: "website",
    siteName: "RM11",
  },
  twitter: {
    card: "summary_large_image",
    title: "RM11 Creator Partners",
    description:
      "Get paid $1K–$5K/month to make YouTube videos about RM11. Apply now.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
