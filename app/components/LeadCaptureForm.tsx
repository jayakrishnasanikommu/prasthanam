"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function LeadCaptureForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bhk: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE;
  const phoneUrl = phoneNumber
    ? `tel:+91${phoneNumber.replace(/\D/g, "")}`
    : "#";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: "", // Not required for this form
          phone: formData.phone,
          message: `BHK Preference: ${formData.bhk || "Not specified"}\n\nInterested in Jaya Lakshmi Nilayam, Bachupally project.`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to thank you page
        router.push("/projects/bachupally/thank-you");
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit. Please try again.",
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-xl border-2 border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                Book a Free Site Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mobile Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    minLength={10}
                    maxLength={10}
                  />
                </div>

                <div>
                  <label
                    htmlFor="bhk"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred BHK
                  </label>
                  <select
                    id="bhk"
                    name="bhk"
                    value={formData.bhk}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select BHK</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

                {submitStatus.type === "error" && (
                  <div className="p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white text-lg py-6 h-auto min-h-[56px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get Price & Location Details"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-3">Or</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-amber-700 text-amber-700 hover:bg-amber-50 text-lg py-6 h-auto min-h-[56px]"
                >
                  <a href={phoneUrl}>
                    <PhoneIcon className="h-6 w-6 mr-2" />
                    Call Now for Instant Response
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

