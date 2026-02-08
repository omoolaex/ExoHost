import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program Terms & Conditions",
  description: "Official terms and conditions for the ExoHost Affiliate Program. Earn commissions for referring customers to our cloud platform.",
};

export default function AffiliateTerms() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Affiliate Terms & Conditions | ExoHost",
    "description": "The legal agreement governing participation in the ExoHost affiliate referral program.",
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
      
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Affiliate Program Terms</h1>
      <p className="mb-6 text-slate-600">
        The ExoHost Affiliate Program (managed by <strong>OmoolaEx</strong>) allows you to earn rewards for referring new clients to our infrastructure. By enrolling, you agree to these binding terms.
      </p>

      {/* 1. Participation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Participation and Enrollment</h2>
        <p>
          Enrollment requires a formal application via the ExoHost Client Portal. We reserve the right to evaluate and reject any application if the affiliate’s website or promotional methods are deemed unsuitable for the ExoHost brand (e.g., sites containing adult content, hate speech, or illegal material).
        </p>
      </section>

      {/* 2. Commission Terms */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Commission & "Valid Sale" Definitions</h2>
        <p className="mb-4 text-slate-700">Commissions are paid on a one-time basis for every <strong>"Valid Sale"</strong> that meets these criteria:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Unique Customer:</strong> The referred user must be a new client with no prior account or services with ExoHost or OmoolaEx.</li>
          <li><strong>Tracking window:</strong> The sale must be completed within 90 days of the user clicking your unique affiliate link.</li>
          <li><strong>Independence:</strong> You may not place orders on behalf of customers. Clients must create their own accounts using their own payment and contact details.</li>
          <li><strong>Self-Referral:</strong> You are strictly prohibited from using your own affiliate link to purchase services for yourself, family, or your own business entities.</li>
        </ul>
      </section>

      {/* 3. Affiliate Responsibilities */}
      <section className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="text-2xl font-semibold mb-4">3. Ethical Conduct & Responsibilities</h2>
        <div className="space-y-4 text-sm">
          <p><strong>Disclosure:</strong> You must clearly disclose to your audience that you receive a commission for referrals. Transparency is required by global advertising regulations.</p>
          <p><strong>Cookie Stuffing:</strong> The use of invisible frames or scripts to "stuff" cookies without a conscious click by the user is grounds for immediate termination.</p>
          <p><strong>Trademark Policy:</strong> Affiliates may not bid on keywords containing "ExoHost" or "OmoolaEx" in search engines (Google/Bing) or use our brand names in domain names without written consent.</p>
          <p><strong>No Reselling:</strong> The affiliate program is a referral system, not a reseller system. For white-labeling, please contact our Reseller Department.</p>
        </div>
      </section>

      {/* 4. Payment & Withdrawals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Commission Payouts</h2>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border rounded shadow-sm">
            <span className="block text-blue-600 font-bold text-xl">45 Days</span>
            <span className="text-xs uppercase font-medium">Maturity Period</span>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <span className="block text-blue-600 font-bold text-xl">₦2,000</span>
            <span className="text-xs uppercase font-medium">Minimum Threshold</span>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <span className="block text-blue-600 font-bold text-xl">Bi-Monthly</span>
            <span className="text-xs uppercase font-medium">Payout Frequency</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Payouts are processed on the <strong>7th and 21st</strong> of each month via Bank Transfer to registered Nigerian accounts. Any transaction fees or taxes incurred during the transfer are the responsibility of the affiliate.
        </p>
      </section>

      {/* 5. Reversals & Disqualification */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Disqualification & Reversals</h2>
        <p>
          Commissions will be reversed or denied if:
          (a) the referred service is cancelled or refunded; 
          (b) the customer initiates a chargeback; 
          (c) the referral is found to be fraudulent (stolen cards, fake identity); or 
          (d) the affiliate violates any part of these terms. 
          ExoHost reserves the right to claw back commissions from future earnings in cases of retrospective fraud detection.
        </p>
      </section>

      <footer className="mt-12 pt-8 border-t text-sm text-slate-500">
        <p>For affiliate support: <strong>affiliates@exohost.com.ng</strong></p>
        <p className="mt-2 italic">Last Updated: February 2026. ExoHost is a technology brand by OmoolaEx.</p>
      </footer>
    </div>
  );
}