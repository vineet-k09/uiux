import Link from "next/link";
import ParticleBackground from "@/components/ui/ParticleBackground";

const services = [
  {
    name: "Customer Care",
    items: [
      "Voice Bot Support",
      "Customer Self-Service Portal",
    ],
  },
  {
    name: "Data Analytics",
    items: [
      "Business Intelligence",
      "Predictive Analytics",
    ],
  },
  {
    name: "Cloud Services",
    items: [
      "Cloud Migration",
      "DevOps Automation",
    ],
  },
  {
    name: "Cyber Security",
    items: [
      "Threat Monitoring",
      "Data Protection & Encryption",
    ],
  },
  {
    name: "AI Automation",
    items: [
      "Intelligent Document Processing",
      "Business Workflow Automation",
    ],
  },
];

export default function Sitemap() {
  return (
    <>
    <div className="min-h-screen bg-brand relative x-0 y-0">
      <div className="px-20">
        <h1 className="text-5xl font-semibold pt-20">Sitemap</h1>
        <hr className="mt-4 mb-6" />

        <ul className="space-y-6 text-lg">

          <li>
            <Link href="/" className="hover:underline font-medium text-2xl">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:underline font-medium text-2xl">
              About
            </Link>
          </li>

          <li>
            <Link href="/services">
            <span className="font-medium hover:underline text-2xl">Services</span>

            <ul className="ml-6 mt-4 space-y-4 grid md:grid-cols-3 grid-cols-2">
              {services.map((domain) => (
                <li key={domain.name}>
                  <p className="font-medium">{domain.name}</p>

                  <ul className="ml-6 mt-1 list-disc space-y-1 text-base">
                    {domain.items.map((service) => (
                      <li key={service} className="hover:underline">{service}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            </Link>
          </li>

          <li>
            <Link href="/contact-us" className="hover:underline font-medium text-2xl">
              Contact Us
            </Link>
          </li>

        </ul>
      </div>
    </div>
    <ParticleBackground />
    </>
  );
}