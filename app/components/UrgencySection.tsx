"use client";

import { ExclamationTriangleIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function UrgencySection() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
  const phoneUrl = phoneNumber
    ? `tel:+91${phoneNumber.replace(/\D/g, "")}`
    : "#";

  return (
    <section className="py-16 lg:py-24 bg-amber-50 border-y-4 border-amber-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <ExclamationTriangleIcon className="h-12 w-12 text-amber-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            ⚠ Limited Ready-to-Occupy Units Available
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            HMDA approved homes in Bachupally are limited. Prices increase once
            units are sold out.
          </p>
          <p className="text-lg sm:text-xl font-semibold text-gray-900">
            👉 Schedule your visit today.
          </p>
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6 h-auto min-h-[56px]"
            >
              <a href={phoneUrl}>
                <PhoneIcon className="h-6 w-6 mr-2" />
                Schedule Site Visit Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}



