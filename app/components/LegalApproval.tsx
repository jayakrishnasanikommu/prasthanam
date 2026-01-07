"use client";

import { CheckIcon } from "@heroicons/react/24/solid";

const approvals = [
  "HMDA approval available",
  "Approved floors only",
  "Setbacks maintained",
  "Eligible for Occupancy Certificate",
  "Bank loan approved",
];

export default function LegalApproval() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            100% HMDA Approved & Legally Secure
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-lg">
            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              {approvals.map((approval, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-900 font-medium">
                    {approval}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-700 text-lg font-semibold">
                📌 We encourage document verification before booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



