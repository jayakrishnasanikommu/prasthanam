"use client";

import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 pt-24">
      {/* Blurred frame effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Real estate for living and investments
          </h1>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Featured Project Image */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/hero-section-house.jpeg"
              alt="Featured Project"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Details Card */}
          <Card className="bg-white/95 backdrop-blur-md shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">
                      201 Prague Dr., San Jose, CA 95119
                    </h2>
                    <button className="text-gray-400 hover:text-amber-700">
                      <BookmarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Beds</p>
                  <p className="text-lg font-semibold text-gray-900">4</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Baths</p>
                  <p className="text-lg font-semibold text-gray-900">3</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sqft</p>
                  <p className="text-lg font-semibold text-gray-900">1,868</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    $1,650,000
                  </span>
                  <Button variant="outline" size="sm" className="text-xs">
                    Split options &gt;
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Agent"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Agent</p>
                  <p className="font-semibold text-gray-900">
                    Amelia Stephenson
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>

              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white mb-2">
                Request a tour
              </Button>
              <p className="text-xs text-center text-gray-500">
                Earliest at 11:00 tomorrow
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
