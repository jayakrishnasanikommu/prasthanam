"use client";

import { MapPinIcon, CheckIcon } from "@heroicons/react/24/outline";

const advantages = [
  "Near Miyapur, Nizampet & Pragathi Nagar",
  "Easy access to schools & IT corridors",
  "Peaceful residential environment",
];

const mapsUrl =
  "https://www.google.com/maps/place/JAYA+LAKSHMI+NILAYAM/@17.5479263,78.3645776,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8d006dbebc29:0xf65a937aded096cf!8m2!3d17.5479212!4d78.3671525!16s%2Fg%2F11ypl394yr?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

export default function LocationAdvantage() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Prime Location – Bachupally
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Advantages */}
          <div className="space-y-4">
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Google Map */}
          <div className="w-full">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890!2d78.3645776!3d17.5479263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d006dbebc29%3A0xf65a937aded096cf!2sJAYA%20LAKSHMI%20NILAYAM!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Jaya Lakshmi Nilayam Location"
              />
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium text-sm"
            >
              <MapPinIcon className="h-5 w-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

