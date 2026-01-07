import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 & 2 BHK Ready to Move Flats in Bachupally | Prasthanam Developers",
  description:
    "Explore east & north facing flats with high UDS in Bachupally. Transparent pricing, quality construction & excellent location advantages. HMDA approved, ready to occupy.",
  keywords:
    "1 BHK flats in Bachupally, 2 BHK flats in Bachupally, east facing flats Bachupally, new apartments Hyderabad, affordable flats Bachupally, ready to move flats Bachupally, HMDA approved projects Bachupally",
  openGraph: {
    title:
      "1 & 2 BHK Ready to Move Flats in Bachupally | Prasthanam Developers",
    description:
      "Explore east & north facing flats with high UDS in Bachupally. Transparent pricing, quality construction & excellent location advantages.",
    type: "website",
  },
};

export default function BachupallyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
