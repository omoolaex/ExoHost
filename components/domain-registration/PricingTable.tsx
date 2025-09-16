"use client";

type Domain = {
  extension: string;
  category?: string;
  registration: string;
  renewal: string;
  transfer: string;
  link: string;
};

const domains: Domain[] = [
  { extension: ".com", registration: "₦17,737.50", renewal: "₦30,153.75", transfer: "₦17,737.50", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  { extension: ".net", registration: "₦22,000.00", renewal: "₦32,000.00", transfer: "₦22,000.00", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  { extension: ".org", registration: "₦20,000.00", renewal: "₦25,000.00", transfer: "₦20,000.00", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  { extension: ".biz", registration: "₦30,000.00", renewal: "₦37,000.00", transfer: "₦30,000.00", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  { extension: ".com.ng", registration: "₦6,448.93", renewal: "₦8,000.00", transfer: "Free", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  { extension: ".ng", registration: "₦17,500.00", renewal: "₦18,000.00", transfer: "Free", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  { extension: ".tv", registration: "₦75,000.00", renewal: "₦75,000.00", transfer: "₦75,000.00", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  { extension: ".io", registration: "₦80,000.00", renewal: "₦100,000.00", transfer: "₦80,000.00", link: "https://clients.exohost.com.ng/cart.php?a=add&domain=register" },
  // Add more domains as needed
];

export default function PricingTable() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16" id="domainTable">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1E5128]">Domain Prices</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-black rounded-lg shadow-md border border-gray-600">
          <thead>
            <tr className="border-b border-gray-600 bg-[#1F1F1F] text-white">
              <th className="px-4 py-3 text-left cursor-pointer">Domain Extension</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Registration</th>
              <th className="px-4 py-3 text-left">Renewal</th>
              <th className="px-4 py-3 text-left">Transfer</th>
              <th className="px-4 py-3 text-left">Register</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain, index) => (
              <tr key={index} className="border-b border-gray-700 transition">
                <td className="px-4 py-3">{domain.extension}</td>
                <td className="px-4 py-3">{domain.category || "--"}</td>
                <td className="px-4 py-3">{domain.registration}</td>
                <td className="px-4 py-3">{domain.renewal}</td>
                <td className="px-4 py-3">{domain.transfer}</td>
                <td className="px-4 py-3">
                  <a
                    href={domain.link}
                    className="inline-block"
                  >
                    <span className="bg-[#1E5128] text-white px-4 py-1 rounded hover:bg-[#D4AF37] hover:text-black transition">Register now</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
