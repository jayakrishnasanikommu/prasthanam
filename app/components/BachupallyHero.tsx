"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckBadgeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import {
  CheckBadgeIcon as CheckBadgeOutline,
  BuildingOfficeIcon,
  BanknotesIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function BachupallyHero() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
  const phoneUrl = phoneNumber
    ? `tel:+91${phoneNumber.replace(/\D/g, "")}`
    : "#";
  const whatsappUrl = phoneNumber
    ? `https://wa.me/91${phoneNumber.replace(/\D/g, "")}`
    : "#";

  const trustIcons = [
    {
      icon: CheckBadgeIcon,
      label: "HMDA Approved",
      color: "text-green-600",
    },
    {
      icon: BuildingOfficeIcon,
      label: "Ready to Occupy",
      color: "text-blue-600",
    },
    {
      icon: BanknotesIcon,
      label: "Bank Loan Eligible",
      color: "text-purple-600",
    },
    {
      icon: DocumentCheckIcon,
      label: "Clear Documentation",
      color: "text-amber-600",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-section-house.jpeg"
          alt="Jaya Lakshmi Nilayam - HMDA Approved Flats in Bachupally"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            HMDA Approved, Ready-to-Occupy Flats in Bachupally
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 drop-shadow-md font-medium">
            1 & 2 BHK | East & North Facing | Clear Title
          </p>

          {/* Trust Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
            {trustIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
                >
                  <Icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 h-auto min-h-[56px] shadow-xl"
            >
              <a href={phoneUrl}>
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call Now for Site Visit
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 h-auto min-h-[56px] shadow-xl"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp for Price & Location
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
