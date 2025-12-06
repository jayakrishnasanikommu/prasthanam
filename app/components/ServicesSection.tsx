import {
  BuildingOffice2Icon,
  HomeModernIcon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Apartments",
    icon: BuildingOffice2Icon,
    description: "Modern apartment complexes with contemporary amenities",
  },
  {
    name: "Villas",
    icon: HomeModernIcon,
    description: "Luxury villas designed for comfort and elegance",
  },
  {
    name: "Bungalows",
    icon: HomeModernIcon,
    description: "Spacious bungalows with premium finishes",
  },
  {
    name: "Residential Buildings",
    icon: BuildingOffice2Icon,
    description: "Complete residential building solutions",
  },
  {
    name: "Commercial Buildings",
    icon: BuildingStorefrontIcon,
    description: "Office spaces, retail complexes, and commercial structures",
  },
  {
    name: "Full-Service Execution",
    icon: Cog6ToothIcon,
    description: "End-to-end project execution from concept to completion",
  },
  {
    name: "Support Services",
    icon: WrenchScrewdriverIcon,
    description: "Comprehensive support for all construction needs",
  },
  {
    name: "Custom Solutions",
    icon: PaintBrushIcon,
    description: "Tailored solutions to match your unique requirements",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            Services
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            In the realm of contractors and building services, Prasthanam
            Developers in Hyderabad&apos;s offerings encompass a wide range of
            projects, including apartments, villas, bungalows, residential, and
            commercial buildings, etc. Whether providing full-service execution
            or playing a support role, they ensure that they cater to various
            construction needs, creating spaces that are functional, beautiful,
            and built to last.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-6 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-amber-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-amber-700 mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
