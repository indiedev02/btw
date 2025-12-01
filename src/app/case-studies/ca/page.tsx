import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import salesforce from "@/assets/salesforce.png";

export default function IpsenCaseStudy() {
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
            Automated Case Creation in Salesforce for a Global Furnace
            Manufacturer
          </h1>
          <p className="text-muted-foreground text-lg">
            How Blackspektro enabled real-time, rule-based ticket creation using
            Azure and Salesforce for a global leader in industrial furnace
            manufacturing.
          </p>

          {/* Key Highlights / Stats */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-3xl font-bold text-black">100%</p>
              <p className="text-muted-foreground text-sm">
                Automated Case Creation
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">Real-time</p>
              <p className="text-muted-foreground text-sm">Event Processing</p>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 text-sm mt-8 border-t pt-6">
            <div>
              <h4 className="text-muted-foreground font-medium">Client</h4>
              <p>Global Furnace Manufacturer</p>
            </div>
            <div>
              <h4 className="text-muted-foreground font-medium">Industry</h4>
              <p>Advanced Manufacturing</p>
            </div>
            <div>
              <h4 className="text-muted-foreground font-medium">Solution</h4>
              <p>Azure + Salesforce</p>
            </div>
            <div>
              <h4 className="text-muted-foreground font-medium">Tech Stack</h4>
              <p>Azure • Node.js • Python</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
          <Image
            src={salesforce}
            alt="Furnace Case Study"
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
            The client, a globally renowned manufacturer of vacuum and
            atmosphere furnaces operating across North America, Europe, and
            Asia, needed to monitor furnaces and create Salesforce tickets
            whenever issues arose. Previously, tickets were created manually
            after analyzing sensor trends, which was inefficient and unscalable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Manual issue detection and ticket creation</li>
            <li>No integration between furnace alerts and Salesforce</li>
            <li>Scalability concerns for support operations</li>
            <li>Time-consuming manual case logging</li>
            <li>Lack of detail in issue reporting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p>
            Blackspektro implemented a scalable, microservice-based architecture
            using Azure Functions and Event Hubs. The Azure Function receives
            real-time data from Event Hub and historical data from a PostgreSQL
            database to evaluate logic and trigger Salesforce case creation via
            REST API.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Event-driven, serverless architecture</li>
            <li>Real-time responsiveness</li>
            <li>Rule-based condition evaluation</li>
            <li>Seamless Salesforce ticket creation</li>
            <li>Expandable logic for future scenarios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Azure: Functions, IoT Hub, Event Hub</li>
            <li>Salesforce Service Cloud</li>
            <li>Backend: Python, Node.js</li>
            <li>Database: PostgreSQL</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>
            The automated case creation system enabled the client to scale its
            operations and offer real-time support. The architecture is ready
            for expansion and integration with Salesforce Commerce Cloud to
            support order generation triggered by sensor faults.
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
