import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy (AUP)",
  description: "Rules and guidelines for maintaining the integrity and security of the ExoHost cloud network.",
};

export default function AUPPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Acceptable Use Policy | ExoHost",
    "description": "Standardized rules for resource usage and prohibited activities on ExoHost servers.",
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
      
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Acceptable Use Policy</h1>
      <p className="mb-6 text-slate-600">
        This AUP governs all ExoHost services, including Shared Hosting, WordPress Managed Hosting, and Cloud VPS instances. By utilizing our infrastructure, you agree to uphold these standards of digital citizenship.
      </p>

      {/* Section 1: Prohibited Activities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">1. Prohibited Activities & Content</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 bg-slate-50 border-l-4 border-red-500 rounded">
            <h3 className="font-bold mb-2 text-slate-900">Legal Compliance</h3>
            <p className="text-sm">Usage must comply with all local, national, and international laws. We do not tolerate illegal gambling, unlicensed financial services, or fraudulent "get-rich-quick" schemes (MLM, HYIP).</p>
          </div>
          <div className="p-4 bg-slate-50 border-l-4 border-red-500 rounded">
            <h3 className="font-bold mb-2 text-slate-900">Zero-Spam Policy</h3>
            <p className="text-sm">Transmission of unsolicited bulk email (SPAM) is strictly prohibited. This includes SMTP, Webmail, or PHP Mail. Blacklisting of our IP space due to user negligence is grounds for immediate termination.</p>
          </div>
          <div className="p-4 bg-slate-50 border-l-4 border-red-500 rounded">
            <h3 className="font-bold mb-2 text-slate-900">Malware & Attacks</h3>
            <p className="text-sm">The hosting of botnets, phishing scripts, or malware is prohibited. Launching DDoS attacks from our infrastructure will result in a permanent ban and KYC data sharing with authorities.</p>
          </div>
          <div className="p-4 bg-slate-50 border-l-4 border-red-500 rounded">
            <h3 className="font-bold mb-2 text-slate-900">High-Load Content</h3>
            <p className="text-sm">Shared hosting accounts may not be used for file-sharing, bulk downloading, or streaming services that place excessive stress on central server resources.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Fair Usage Limits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Resource & Fair Usage Limits</h2>
        <p className="mb-4 italic text-slate-500">To maintain "Green-Zone" performance for all users, the following limits apply to Shared environments:</p>
        
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 border-b">
              <tr>
                <th className="p-4">Resource Type</th>
                <th className="p-4">Standard Limit</th>
                <th className="p-4">Usage Note</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-medium">Outbound Email</td>
                <td className="p-4">500 per day</td>
                <td className="p-4">Prevents IP reputation damage.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Media Storage</td>
                <td className="p-4">10 GB Max</td>
                <td className="p-4">Includes .mp4, .mp3, .avi files.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Database Dumps</td>
                <td className="p-4">8 GB Max</td>
                <td className="p-4">Large .sql files must be archived off-site.</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Backup Storage</td>
                <td className="p-4">30 Days Max</td>
                <td className="p-4">Accounts are not for long-term archiving.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      

      {/* Section 3: Data Integrity & Backups */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Backup Integrity</h2>
        <p className="mb-4">
          While ExoHost performs routine server-wide backups for disaster recovery, these are for <strong>internal administrative use only</strong>. 
        </p>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-bold text-blue-900 mb-2">The Shared Responsibility Model</h3>
          <p className="text-sm text-blue-800">
            Clients are primarily responsible for maintaining their own off-site backups.
            <br /><br />
            • <strong>Shared Clients:</strong> Can utilize cPanel/Softaculous backup tools for local downloads.
            <br />
            • <strong>Cloud VPS Clients:</strong> Responsible for full instance snapshots. ExoHost does not back up VPS data unless a managed backup addon is purchased.
            <br />
            • <strong>Data Recovery:</strong> Retrieval of data from our server-side backups (where available) incurs a restoration fee based on the data volume.
          </p>
        </div>
      </section>

      {/* Section 4: Compliance & Enforcement */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. KYC & Enforcement</h2>
        <p className="mb-4 text-slate-700">
          <strong>OmoolaEx</strong> reserves the right to request KYC (Know Your Customer) documentation for verification at any time. Violations of this AUP may lead to account suspension without notice. In cases of intentional abuse or illegal activity, refunds and access to backups will be denied to preserve evidence for legal review.
        </p>
      </section>

      <footer className="text-center text-slate-400 text-xs mt-20">
        © 2026 ExoHost. All Rights Reserved. Managed under the OmoolaEx Security Framework.
      </footer>
    </div>
  );
}