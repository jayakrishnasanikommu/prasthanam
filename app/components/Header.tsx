"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 rounded-b-3xl shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Prasthanam Developers"
              width={200}
              height={60}
              className="h-12 w-auto md:h-14 lg:h-16 object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "#services")}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-700"
          >
            Services
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-700"
          >
            Projects
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-700"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-700"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 rounded-l-3xl shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                <Image
                  src="/logo.jpeg"
                  alt="Prasthanam Developers"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="#services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#services");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Services
                  </Link>
                  <Link
                    href="#projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#projects");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#about");
                      setMobileMenuOpen(false);
                    }}
                  >
                    About
                  </Link>
                  <Link
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#contact");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      handleSmoothScroll(e, "#contact");
                      setMobileMenuOpen(false);
                    }}
                    className="block"
                  >
                    <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
