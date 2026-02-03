import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HMDA Approved Flats in Bachupally | Prasthanam Developers",
  description: "Buy HMDA-approved 1 & 2 BHK flats in Bachupally near Silver Oaks School. Strong UDS, ready to move homes by Prasthanam Developers. Book a site visit today.",
  keywords: "HMDA approved flats Bachupally, flats near Silver Oaks School, ready to move flats Bachupally, 1 BHK Bachupally, 2 BHK Bachupally, Prasthanam Developers, UDS apartments Hyderabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Ads conversion tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17921804559"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17921804559');
          `}
        </Script>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
