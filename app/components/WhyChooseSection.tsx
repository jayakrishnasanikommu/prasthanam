"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: CheckCircleIcon,
    title: "Customized Solutions",
    description:
      "Personalized solutions that meet your specific requirements and preferences",
  },
  {
    icon: ShieldCheckIcon,
    title: "High-Quality Materials",
    description:
      "We use high-quality materials and adhere to industry best practices",
  },
  {
    icon: ClockIcon,
    title: "Timely Delivery",
    description:
      "Efficient project management ensures your project stays on schedule",
  },
  {
    icon: UserGroupIcon,
    title: "Experienced Professionals",
    description:
      "Highly skilled contractors and building professionals with extensive experience",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Comprehensive Services",
    description:
      "One-stop solution for all construction needs, from planning to completion",
  },
  {
    icon: HeartIcon,
    title: "Customer Satisfaction",
    description:
      "Our commitment to customer satisfaction drives everything we do",
  },
];

export default function WhyChooseSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            Why Choose Prasthanam Developers in Hyderabad?
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Prasthanam Developers in Hyderabad offers customized solutions that
            meet the specific requirements and preferences of each client
            ensuring personalized and effective solutions. They are highly
            skilled contractors and building professionals who bring a wealth of
            experience and dedication to every project. They use high-quality
            materials and adhere to industry best practices to ensure that all
            work is completed to the highest standards. They prioritize
            efficient project management and timely delivery to minimize
            disruptions and ensure that your project stays on schedule. Their
            commitment to customer satisfaction drives everything that they do.
            They work closely with their clients to ensure their needs are met
            and expectations exceeded.
          </p>
        </div>

        {/* Mobile: Show cards conditionally, Desktop: Always show all */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ${
                  isExpanded ? "" : "hidden"
                } md:block`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 flex-shrink-0">
                    <Icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="bg-white hover:bg-amber-50 text-amber-700 border-amber-300 hover:border-amber-400"
          >
            {isExpanded ? "View Less" : "View More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
