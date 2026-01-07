"use client";

import Image from "next/image";
import Link from "next/link";

export default function BuilderCredibility() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Developer Info */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Prasthanam Developers
            </h3>
            <blockquote className="text-xl sm:text-2xl font-semibold text-gray-800 italic border-l-4 border-amber-700 pl-6">
              "Anyone can sell cheap flats by cutting corners. We build
              legally—so your future stays secure."
            </blockquote>
          </div>

          {/* Right: Logo & Website */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="relative w-48 h-24">
              <Image
                src="/logo.jpeg"
                alt="Prasthanam Developers"
                fill
                className="object-contain"
              />
            </div>
            <Link
              href="/"
              className="text-amber-700 hover:text-amber-800 font-medium text-lg underline"
            >
              Visit Our Website
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



