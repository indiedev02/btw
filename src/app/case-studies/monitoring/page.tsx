import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import furnaceImg from "@/assets/CaseFurnace.png";

export default function IndustrialIotCaseStudy() {
  return (
    <div className="w-11/12 max-w-6xl mx-auto py-16 space-y-20">
      {/* Back link */}
      <div>
        <Link
          href="/#case-studies"
          className="inline-flex items-center text-teal-700 hover:underline text-sm"
        >
          <ArrowLeft className="mr-1 w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* HERO FLEX */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Industrial IoT Implementation for Electrical Furnace Monitoring
          </h1>
          <p className="text-muted-foreground text-lg">
            How Blackspektro re-engineered a legacy system into a robust,
            Azure-powered industrial IoT solution for electrical furnace
            performance monitoring.
          </p>

          {/* Key Highlights / Stats */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-3xl font-bold text-black">Real-time</p>
              <p className="text-muted-foreground text-sm">
                Furnace Monitoring
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">Edge + Cloud</p>
              <p className="text-muted-foreground text-sm">Hybrid Deployment</p>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 text-sm mt-8 border-t pt-6">
            <div>
              <h4 className="text-muted-foreground font-medium">Client</h4>
              <p>Confidential (Electrical Furnace Industry)</p>
            </div>
            <div>
              <h4 className="text-muted-foreground font-medium">Industry</h4>
              <p>Industrial IoT</p>
            </div>
            <div>
              <h4 className="text-muted-foreground font-medium">Solution</h4>
              <p>Azure-based IoT + Edge System</p>
            </div>
            <div>
              <h4 className="text-muted-foreground font-medium">Tech Stack</h4>
              <p>Azure • Node.js • Custom Edge Packages</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={furnaceImg}
            alt="Furnace IoT Case Study"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-14 text-[17px] leading-relaxed text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p>
            Blackspektro implemented an end-to-end Industrial IoT solution for
            monitoring electrical furnaces. The project, initially based on PTC
            ThingWorx, was fully redeveloped using Azure technologies and
            deployed both at the edge and in the cloud.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Compatibility issues with various edge device manufacturers</li>
            <li>Low or unreliable network bandwidth causing data loss</li>
            <li>
              Azure IoT Edge compatibility limitations requiring custom D2C
              scripts
            </li>
            <li>Need for OTA updates without physical access</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p>
            Blackspektro engineered a hybrid system: an edge package for local
            device handling with caching and OTA capabilities, and a cloud
            pipeline using Azure IoT Hub and Stream Analytics. An admin
            dashboard and a customer-facing web app were developed for real-time
            data access and alerts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time alerting using custom business logic</li>
            <li>Data caching at the edge to handle connectivity gaps</li>
            <li>
              OTA deployment system for software and configuration updates
            </li>
            <li>IAM and RBAC-based secure access model</li>
            <li>Custom-developed microservices for alert handling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Azure: IoT Hub, Stream Analytics, Microservices</li>
            <li>Edge: Custom scripts and OTA packages</li>
            <li>Languages: Node.js, Python</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>
            The solution empowered the client to move from reactive, manual
            monitoring to a proactive, automated, and scalable Industrial IoT
            system. It’s now adaptable to future furnace types and use cases.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="text-center pt-8">
        <Button asChild variant="primary">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore More Case Studies
          </Link>
        </Button>
      </div>
    </div>
  );
}
