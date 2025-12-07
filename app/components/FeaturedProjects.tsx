"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectModal from "./ProjectModal";

const projects: Array<{
  id: number;
  name: string;
  location: string;
  type: string;
  size?: string;
  image: string;
  images: string[];
  description: string;
  mapsUrl?: string;
}> = [
  {
    id: 1,
    name: "Abhinandan Arcade",
    location: "Matrusri Nagar, Hyderabad, Telangana",
    type: "Residential",
    image: "/chintu-mama-building.jpeg",
    images: [
      "/chintu-mama-building.jpeg",
      //   "/chintu-mama-building.jpeg", // You can add more images later
    ],
    mapsUrl:
      "https://www.google.com/maps/place/Abhinandan+Arcade,+Plot+%23+534,+Road+No.+3%2F3A,+Mathrusree+Nagar,+Hafeezpet,+Miyapur,+Hyderabad,+Telangana+500049/@17.4939315,78.3636363,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93164675003b:0xf473a81013cba95!8m2!3d17.4939264!4d78.3662112!16s%2Fg%2F11mxvlhqcg?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
    description: `Abhinandan Arcade is a prestigious residential project located in the heart of Hyderabad. This modern development offers luxurious living spaces with contemporary amenities and thoughtful design.

Key Features:
• Spacious apartments with premium finishes
• Modern architecture and design
• Prime location with excellent connectivity
• Well-planned layouts for maximum comfort
• High-quality construction materials
• 24/7 security and maintenance
• Landscaped gardens and recreational areas
• Parking facilities for all residents

This project represents our commitment to excellence in residential construction, combining functionality with aesthetic appeal to create spaces that residents will be proud to call home.`,
  },
  {
    id: 2,
    name: "Kavya Residency",
    location: "Vivekananda Nagar, Hyderabad, Telangana",
    type: "Residential",
    image: "/vivekananda-nagar.jpeg",
    images: [
      "/vivekananda-nagar.jpeg",
      //   "/vivekananda-nagar.jpeg", // You can add more images later
    ],
    description: `Kavya Residency is a well-planned residential community designed to provide a harmonious living experience. This project showcases our expertise in creating sustainable and beautiful living spaces.

Project Highlights:
• Thoughtfully designed residential units
• Green spaces and community areas
• Excellent infrastructure and connectivity
• Quality construction with attention to detail
• Modern amenities for comfortable living
• Strategic location with easy access to schools, hospitals, and shopping centers
• Sustainable building practices
• Community-focused design

This development reflects our dedication to creating not just buildings, but communities where families can thrive and grow.`,
  },
  {
    id: 3,
    name: "VNR Residency",
    location: "Ameenpur, Hyderabad, Telangana",
    type: "Residential",
    image: "/ninni-buddi-building.jpeg",
    images: [
      "/ninni-buddi-building.jpeg",
      //   "/ninni-buddi-building.jpeg", // You can add more images later
    ],
    mapsUrl:
      "https://www.google.com/maps/place/Vnr+residency/@17.5321245,78.3154587,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8ddd7c4d7797:0x8f6c02e55bad00f!8m2!3d17.5321194!4d78.3180336!16s%2Fg%2F11svngy24x?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
    description: `VNR Residency stands as a testament to our commitment to quality construction and innovative design. This residential project offers a perfect blend of comfort, convenience, and style.

Special Features:
• Premium residential units with modern interiors
• Architectural excellence and attention to detail
• Comprehensive amenities for residents
• Prime location with excellent connectivity
• Robust construction using quality materials
• Well-maintained common areas
• Secure and gated community
• Professional property management

This project demonstrates our ability to deliver residential developments that exceed expectations, providing residents with a superior living experience in one of Hyderabad's most desirable locations.`,
  },
  // {
  //   id: 4,
  //   name: "Premium Bungalow Project",
  //   location: "Hyderabad, Telangana",
  //   type: "Residential",
  //   image:
  //     "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  //   ],
  //   description: `Premium Bungalow Project offers luxurious standalone homes designed for those who appreciate space, privacy, and elegance. Each bungalow is crafted with meticulous attention to detail.`,
  // },
  {
    id: 5,
    name: "Sree Krishna Sai Residency",
    location: "Hyderabad, Telangana",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    ],
    description: `Sree Krishna Sai Residency is a well-designed residential project that offers comfortable and modern living spaces. This development showcases quality construction and thoughtful planning.

Key Features:
• Modern residential units with contemporary design
• Prime location with excellent connectivity
• Quality construction with attention to detail
• Well-planned layouts for maximum comfort
• Secure and gated community
• Professional property management
• Easy access to essential amenities

This project reflects our commitment to creating quality residential spaces that provide residents with a comfortable and convenient living experience.`,
    mapsUrl:
      "https://www.google.com/maps/place/Sree+Krishna+Sai+Residency/@17.4613565,78.3475607,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb933e2a870071:0x1f5b2e598d2ad2c3!8m2!3d17.4613514!4d78.3501356!16s%2Fg%2F11r7l831gg?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleViewDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile
        ? window.innerWidth - 48 + 16 // viewport width - padding (3rem = 48px) + gap
        : 336; // 320px (w-80) + 16px gap
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile
        ? window.innerWidth - 48 + 16 // viewport width - padding (3rem = 48px) + gap
        : 336; // 320px (w-80) + 16px gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section id="projects" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl drop-shadow-lg">
              Projects
            </h2>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all shadow-md hover:shadow-lg"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all shadow-md hover:shadow-lg"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-2xl border-0 shadow-xl flex-shrink-0 w-[calc(100vw-3rem)] md:w-80 snap-start"
              >
                {/* Image Container with Blurred Bottom */}
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />

                  {/* Blurred Bottom Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  {/* All Content Overlay on Blurred Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <h3 className="text-lg font-medium text-white">
                      {project.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => handleViewDetails(project)}
                      className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg py-3 text-base"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
