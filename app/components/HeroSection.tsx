"use client";

import Image from "next/image";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen pt-24 overflow-hidden">
      {/* Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/60 via-transparent to-orange-50/60"></div>

        {/* Radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-300/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-200/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent"></div>

        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-orange-100/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-transparent to-orange-100/40"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.05)_25%,_rgba(255,255,255,0.05)_50%,_transparent_50%,_transparent_75%,_rgba(255,255,255,0.05)_75%,_rgba(255,255,255,0.05))] bg-[length:20px_20px] opacity-20"></div>
      </div>

      {/* Blurred frame effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl drop-shadow-sm">
            Real estate for living and investments
          </h1>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Featured Project Image */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/50">
            <Image
              src="/hero-section-house.jpeg"
              alt="Featured Project"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Details Cards */}
          <div className="space-y-6">
            {/* Jayalakshmi Nilayam Card */}
            <HeroCard
              title="Jayalakshmi Nilayam"
              location="KRCR Colony, Bachupally, Hyderabad"
              availability="1 & 2 BHK flats are available"
              primaryAction={{
                label: "Contact Us",
                href: "#contact",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
