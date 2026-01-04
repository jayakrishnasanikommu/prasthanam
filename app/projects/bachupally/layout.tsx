import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMDA Approved Flats in Bachupally | Jaya Lakshmi Nilayam | Prasthanam Developers",
  description: "HMDA Approved, Ready-to-Occupy 1 & 2 BHK flats in Bachupally. East & North facing units with clear title. Bank loan eligible. Immediate possession available. Book your site visit today!",
  keywords: "HMDA approved flats Bachupally, ready to occupy flats, 1 BHK Bachupally, 2 BHK Bachupally, Jaya Lakshmi Nilayam, Prasthanam Developers",
};

export default function BachupallyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

