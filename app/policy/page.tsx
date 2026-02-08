import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ExoHost's commitment to data protection, privacy, and secure handling of your personal information.",
};

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | ExoHost",
    "description": "Information on how ExoHost collects, processes, and protects user data.",
    "publisher": {
      "@type": "Organization",
      "name": "OmoolaEx",
      "url": "https://omoolaex.com.ng"
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500 italic">Effective Date: February 2026</p>

      {/* 1. Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          At <strong>ExoHost</strong> (a subsidiary of <strong>OmoolaEx</strong>), we recognize that privacy is a fundamental pillar of digital infrastructure. This policy outlines how we collect, process, and safeguard your personal information. We are committed to complying with applicable data protection laws and ensuring that your data is handled with the highest degree of confidentiality and security.
        </p>
      </section>

      {/* 2. Information Collection */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Collection and Use of Information</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">2.1 Infrastructure & Website Logs</h3>
            <p>
              When you visit ExoHost.com.ng, we collect non-identifying data such as IP addresses, browser types, and operating system details. This is used strictly for system administration, network integrity, and to improve our platform’s performance via cookie technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">2.2 Account & Subscription Data</h3>
            <p>
              To provide cloud hosting and domain services, we collect identifiable information (Name, Email, Billing Address). As a provider of upstream services, we may be required to share relevant data with domain registries or software licensors (e.g., cPanel, ICANN) to fulfill your contract. OmoolaEx ensures these partners commit to similar privacy standards.
            </p>
          </div>
        </div>
      </section>

      

      {/* 3. Security & Data Protection */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Confidentiality and Security</h2>
        <p className="mb-4">
          ExoHost employs <strong>Secure Socket Layer (SSL)</strong> encryption for all data transmissions. We operate on a "Zero-Storage" principle for sensitive financial data; your payment details are processed through encrypted gateways and are never stored on ExoHost or OmoolaEx servers after a transaction is completed.
        </p>
        <p className="mb-4">
          In the unlikely event of a data breach, ExoHost will notify affected users via their registered email address within the legally mandated timeframe, providing clear steps for account protection.
        </p>
      </section>

      {/* 4. Data Retention */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Retention and Deletion</h2>
        <p>
          We retain personal data only for as long as necessary to provide your services or comply with legal and tax obligations. Once the legitimate business interest or legal requirement expires, data is purged from our production and backup systems in a secure, irreversible manner.
        </p>
      </section>

      {/* 5. Rights and Minor Protection */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. General Provisions</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Minors:</strong> ExoHost does not knowingly enter into contracts with individuals under the age of 18 without explicit parental or guardian consent.</li>
          <li><strong>Site Linking:</strong> Our platform may contain links to third-party sites. Neither ExoHost nor OmoolaEx is responsible for the privacy practices of external entities.</li>
          <li><strong>Opt-Out:</strong> Users may opt-out of promotional communications at any time via the "Unsubscribe" link in our emails or through their client dashboard.</li>
        </ul>
      </section>

      {/* 6. Contact Information */}
      <section className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="text-2xl font-semibold mb-4">6. Contact and Legal Inquiries</h2>
        <p className="mb-2">For questions regarding this policy or to request access to your stored data, please contact the OmoolaEx Legal Compliance Team:</p>
        <p className="font-medium">Email: support@exohost.com.ng</p>
        <p className="font-medium">Website: www.exohost.com.ng</p>
      </section>
    </div>
  );
}