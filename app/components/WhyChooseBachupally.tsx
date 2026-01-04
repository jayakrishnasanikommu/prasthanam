"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const benefits = [
  "Sanctioned plan = actual construction",
  "Proper setbacks for light & ventilation",
  "No deviation or extra floors",
  "Safe resale & redevelopment future",
];

export default function WhyChooseBachupally() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Why Serious Buyers Choose This Home
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero-section-house.jpeg"
              alt="Bright, airy apartment interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

