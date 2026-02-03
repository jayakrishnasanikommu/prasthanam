"use client";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ThankYouPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
  const phoneUrl = phoneNumber
    ? `tel:+91${phoneNumber.replace(/\D/g, "")}`
    : "#";
  const whatsappUrl = phoneNumber
    ? `https://wa.me/91${phoneNumber.replace(/\D/g, "")}`
    : "#";

  return (
    <>
      {/* Event snippet for Submit lead form conversion page */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined' && window.gtag) {
            gtag('event', 'conversion', {'send_to': 'AW-17921804559/dKVHCI6Iw_AbEI-S5OFC'});
          }
        `}
      </Script>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        <Card className="bg-white shadow-2xl">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <CheckCircleIcon className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-900">
              Thank You!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg sm:text-xl text-gray-700">
                Your request has been submitted successfully!
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Our team will contact you shortly with price and location
                details for Jaya Lakshmi Nilayam, Bachupally.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                Need immediate assistance?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white text-lg py-6 h-auto min-h-[56px]"
                >
                  <a href={phoneUrl}>
                    <PhoneIcon className="h-6 w-6 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6 h-auto min-h-[56px]"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <svg
                      className="h-6 w-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-center">
              <Link
                href="/projects/bachupally"
                className="text-amber-700 hover:text-amber-800 font-medium text-lg underline"
              >
                ← Return to Project Page
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

