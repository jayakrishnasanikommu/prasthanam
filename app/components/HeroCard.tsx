"use client";

import Image from "next/image";
import Link from "next/link";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};

interface HeroCardProps {
  title: string;
  location: string;
  stats?: {
    label: string;
    value: string;
  }[];
  price?: string;
  priceAction?: {
    label: string;
    onClick?: () => void;
  };
  agent?: {
    name: string;
    image?: string;
  };
  primaryAction: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryInfo?: string;
  availability?: string;
}

export default function HeroCard({
  title,
  location,
  stats,
  price,
  priceAction,
  agent,
  primaryAction,
  secondaryInfo,
  availability,
}: HeroCardProps) {
  return (
    <Card className="bg-white/95 backdrop-blur-md shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <button className="text-gray-400 hover:text-amber-700">
                <BookmarkIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600">{location}</p>
            {availability && (
              <p className="text-sm font-medium text-amber-700 mt-2">
                {availability}
              </p>
            )}
          </div>
        </div>

        {stats && stats.length > 0 && (
          <div className="flex gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-lg font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {price && (
          <div className="mb-6">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-900">{price}</span>
              {priceAction && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={priceAction.onClick}
                >
                  {priceAction.label} &gt;
                </Button>
              )}
            </div>
          </div>
        )}

        {agent && (
          <div className="flex items-center gap-4 mb-6 pb-6 border-b">
            {agent.image ? (
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-amber-700 font-semibold text-sm">
                  {agent.name.charAt(0)}
                </span>
              </div>
            )}
            <div className="flex-1">
              <p className="text-xs text-gray-500">Agent</p>
              <p className="font-semibold text-gray-900">{agent.name}</p>
            </div>
            {primaryAction.href ? (
              <Link
                href={primaryAction.href}
                onClick={(e) => handleSmoothScroll(e, primaryAction.href!)}
              >
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={primaryAction.onClick}
              >
                Contact
              </Button>
            )}
          </div>
        )}

        {primaryAction.href ? (
          <Link
            href={primaryAction.href}
            className="block"
            onClick={(e) => handleSmoothScroll(e, primaryAction.href!)}
          >
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white mb-2">
              {primaryAction.label}
            </Button>
          </Link>
        ) : (
          <Button
            className="w-full bg-gray-900 hover:bg-gray-800 text-white mb-2"
            onClick={primaryAction.onClick}
          >
            {primaryAction.label}
          </Button>
        )}

        {secondaryInfo && (
          <p className="text-xs text-center text-gray-500">{secondaryInfo}</p>
        )}
      </CardContent>
    </Card>
  );
}

