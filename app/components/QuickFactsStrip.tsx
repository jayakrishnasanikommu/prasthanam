"use client";

import {
  HomeIcon,
  MapPinIcon,
  CheckBadgeIcon,
  KeyIcon,
  BuildingLibraryIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const facts = [
  {
    icon: HomeIcon,
    label: "1 & 2 BHK Flats",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: ArrowPathIcon,
    label: "East & North Facing",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: CheckBadgeIcon,
    label: "HMDA Approved",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: KeyIcon,
    label: "Immediate Possession",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: BuildingLibraryIcon,
    label: "Bank Loan Support",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: MapPinIcon,
    label: "Bachupally Location",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

export default function QuickFactsStrip() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className={`${fact.bgColor} rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center space-y-2 shadow-sm hover:shadow-md transition-shadow`}
              >
                <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${fact.color}`} />
                <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                  {fact.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

