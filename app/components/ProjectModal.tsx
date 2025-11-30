"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: {
    id: number;
    name: string;
    location: string;
    type: string;
    size?: string;
    images: string[];
    description: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen && project) {
      setCurrentImageIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Transparent blurred background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Modal content - responsive sizing */}
      <div
        className="relative z-50 w-[95%] md:w-[90%] lg:w-[80%] h-[95%] md:h-[90%] lg:h-[80%] bg-transparent overflow-hidden rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-6 w-6 text-gray-900" />
        </button>

        <div className="flex flex-col lg:flex-row h-full bg-white rounded-lg overflow-hidden">
          {/* Left side - Image Gallery */}
          <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full bg-white flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain lg:object-cover"
                priority
              />
            </div>

            {/* Navigation buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-gray-900" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="h-6 w-6 text-gray-900" />
                </button>
              </>
            )}

            {/* Image indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Scrollable thumbnail strip */}
            {project.images.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/40 to-transparent backdrop-blur-sm overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex h-full gap-2 px-4 py-2 items-end">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`relative h-16 w-24 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-white scale-110 shadow-lg"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side - Description */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full overflow-y-auto bg-white p-8 lg:p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {project.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-600 mb-6 flex-wrap">
                <span className="text-sm">{project.location}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm">{project.type}</span>
                {project.size && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm">{project.size}</span>
                  </>
                )}
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

