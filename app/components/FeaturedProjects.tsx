"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  {
    id: 4,
    name: "Premium Bungalow Project",
    location: "Hyderabad, Telangana",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    ],
    description: `Premium Bungalow Project offers luxurious standalone homes designed for those who appreciate space, privacy, and elegance. Each bungalow is crafted with meticulous attention to detail.`,
  },
  {
    id: 5,
    name: "Mixed-Use Development",
    location: "Hyderabad, Telangana",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    ],
    description: `Mixed-Use Development combines residential, commercial, and retail spaces in a single integrated project, creating a vibrant community hub.`,
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Featured Projects
            </h2>
            <Button variant="outline" className="hidden sm:flex">
              View all &gt;
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-amber-700 text-white">
                    {project.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPinIcon className="h-4 w-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  {project.size && (
                    <p className="text-sm text-gray-500 mb-4">
                      Size: {project.size}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline">View all &gt;</Button>
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
