import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "ExoHost's customer satisfaction guarantee and refund eligibility criteria.",
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Refund and Cancellation Policy</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Satisfaction Guarantee</h2>
        <p className="mb-4">
          At ExoHost, we stand by the quality of our infrastructure. New customers are eligible for a <strong>30-day money-back guarantee</strong> on standard Web Hosting and Cloud Hosting packages if the service does not meet the technical specifications promised.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Non-Refundable Services</h2>
        <p className="mb-4">
          Certain services involve immediate third-party costs that cannot be recouped. These are non-refundable:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Domain Name Registrations and Transfers.</li>
          <li>SSL Certificates.</li>
          <li>Third-party software licenses (e.g., cPanel, LiteSpeed).</li>
          <li>Services terminated due to violations of our Acceptable Use Policy.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Pro-Rata Credits</h2>
        <p>
          Should ExoHost choose to discontinue a specific service or package, we will either fulfill the remaining paid term or issue a pro-rata refund for the unused portion of your billing cycle.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Billing Disputes</h2>
        <p>
          Any disputes regarding invoices must be raised in writing within 14 business days of the invoice date. Successful disputes will be resolved via account credit or direct refund at the sole discretion of the OmoolaEx billing department.
        </p>
      </section>
    </div>
  );
}