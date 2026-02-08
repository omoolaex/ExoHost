import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Official Terms and Conditions for ExoHost cloud infrastructure and hosting services.",
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service | ExoHost",
    "description": "Legal terms governing the use of ExoHost services.",
    "publisher": {
      "@type": "Organization",
      "name": "OmoolaEx"
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">General Terms and Conditions</h1>
      <p className="mb-6 text-sm text-gray-500 italic">Last Updated: February 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Definitions and Identity</h2>
        <p className="mb-4">
          This Agreement governs the usage of services provided by <strong>ExoHost</strong>, a subsidiary brand of <strong>OmoolaEx</strong>. 
          "Customer" refers to any individual or entity subscribing to ExoHost infrastructure. "Agreement" encompasses these terms, our Acceptable Use Policy (AUP), and specific service order forms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Service Initiation and Professional Standard</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Best Effort Infrastructure:</strong> ExoHost provides services on a high-availability basis, targeting a 99.9% annual uptime.</li>
          <li><strong>Technical Feasibility:</strong> Activation is subject to our confirmation that the requested deployment is technically viable within our current hardware parameters.</li>
          <li><strong>Credit Assessment:</strong> For high-resource enterprise plans, OmoolaEx reserves the right to perform risk assessments to ensure long-term service stability.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Support Framework</h2>
        <p className="mb-4">
          Our support philosophy is built on a "Client-First" motto. We prioritize understanding the specific technical friction you are facing to resolve it rapidly.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Queue Management:</strong> Tickets are handled on a first-come, first-served basis, though critical infrastructure failures are automatically escalated through keyword monitoring.</li>
          <li><strong>Enterprise Direct Access:</strong> Managed service clients above specific spend thresholds may be invited to our internal Slack channels for real-time engineering collaboration.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Resource Allocation and Compliance</h2>
        <p className="mb-4">
          Each service is assigned a predefined "Resource Allocation" (CPU, RAM, Storage, and Bandwidth). Exceeding these limits may result in automated overage charges or temporary throughput shaping to protect the ExoHost System.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p>
          In the event of service disruption, ExoHost's liability is strictly capped at a maximum of three months of your base hosting fees. We are not liable for losses resulting from force majeure events, including upstream provider failures or municipal utility interruptions.
        </p>
      </section>
    </div>
  );
}