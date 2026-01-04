"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowPathIcon, PhoneIcon } from "@heroicons/react/24/outline";

const configurations = [
  {
    type: "1 BHK Flats",
    description: "Ideal for small families & investment",
    icon: HomeIcon,
  },
  {
    type: "2 BHK Flats",
    description: "Spacious, family-friendly layout",
    icon: HomeIcon,
  },
];

export default function FlatConfigurations() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
  const phoneUrl = phoneNumber
    ? `tel:+91${phoneNumber.replace(/\D/g, "")}`
    : "#";

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Flat Configurations
          </h2>
          <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
            <ArrowPathIcon className="h-5 w-5 text-amber-700" />
            <span>Vastu compliant east & north facing units</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
          {configurations.map((config, index) => {
            const Icon = config.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-8 w-8 text-amber-700" />
                    <CardTitle className="text-2xl">{config.type}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">{config.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6 h-auto min-h-[56px]"
          >
            <a href={phoneUrl}>
              <PhoneIcon className="h-6 w-6 mr-2" />
              Check Availability – Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

