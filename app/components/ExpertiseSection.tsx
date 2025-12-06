import {
  BuildingOfficeIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const expertiseAreas = [
  {
    name: "New Construction",
    icon: BuildingOfficeIcon,
    description: "Full-service construction from planning to completion",
  },
  {
    name: "Residential Projects",
    icon: HomeIcon,
    description: "Apartments, villas, bungalows, and residential buildings",
  },
  {
    name: "Commercial Buildings",
    icon: BuildingOfficeIcon,
    description: "Office spaces, retail complexes, and commercial structures",
  },
  {
    name: "Specialized Installations",
    icon: WrenchScrewdriverIcon,
    description: "Custom installations and specialized construction services",
  },
  {
    name: "Renovation & Remodeling",
    icon: PaintBrushIcon,
    description: "Transform existing spaces with expert renovation services",
  },
  {
    name: "Project Management",
    icon: Cog6ToothIcon,
    description: "Efficient project management ensuring timely delivery",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            Expertise
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Prasthanam Developers in Hyderabad is a one-stop solution for all
            construction needs. Their expertise encompasses various aspects of
            contracting and building services, ensuring that they can handle
            projects of any scale and complexity. Whether it&apos;s new
            construction or specialized installations, their skilled experts are
            equipped to deliver outstanding results. They take pride in their
            ability to customize their services to match the unique requirements
            of each client, ensuring that every project is a perfect fit for
            their vision and needs.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.name}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <Icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {area.name}
                  </h3>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
