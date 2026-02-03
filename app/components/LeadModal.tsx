"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll get back to you soon.",
        });

        // Trigger Google Ads conversion event
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17921804559/dKVHCI6Iw_AbEI-S5OFC",
          });
        }

        // Set cookie to prevent showing modal again
        document.cookie = "leadFormShown=true; path=/; max-age=31536000"; // 1 year

        // Reset form and close modal after 2 seconds
        setTimeout(() => {
          setFormData({ name: "", phone: "", email: "" });
          onClose();
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setIsCancelled(true);
  };

  const handleReopenForm = () => {
    setIsCancelled(false);
    setSubmitStatus({ type: null, message: "" });
  };

  const handleFinalClose = () => {
    setIsCancelled(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-md bg-white shadow-2xl relative">
        {!isCancelled && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        )}

        {isCancelled ? (
          <>
            <button
              onClick={handleFinalClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <CardContent className="py-8 px-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  No Problem!
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>
                    For any queries, project details, or to schedule a site visit, feel free to reach out to us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-left">
                    <li>Call us directly for instant assistance</li>
                    <li>Visit our contact section below for more information</li>
                    <li>Connect with us on WhatsApp for quick responses</li>
                    <li>Follow us on social media for latest updates and offers</li>
                  </ul>
                  <p className="pt-2">
                    We're here to help you find your dream home!
                  </p>
                </div>
                <div className="pt-4 space-y-2">
                  <Button
                    onClick={handleReopenForm}
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                  >
                    Fill Form Instead
                  </Button>
                  <Button
                    onClick={handleFinalClose}
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                Get Exclusive Updates
              </CardTitle>
              <p className="text-gray-600 mt-2 text-sm">
                Fill in your details to receive the latest offers and project updates
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="lead-name"
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
                    htmlFor="lead-phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="lead-phone"
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
                    htmlFor="lead-email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email (Optional)
                  </label>
                  <Input
                    id="lead-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    <p className="font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
