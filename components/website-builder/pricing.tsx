"use client";

export default function WebsiteBuilderPricing() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-teal-600 mb-2">
          Website Builder Packages & Pricing
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Site Builder Packages Tailored to Your Needs
        </h3>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Starter */}
        <div className="border rounded-lg shadow-lg p-8 flex flex-col">
          <h4 className="text-2xl font-bold text-center mb-2">Starter</h4>
          <p className="text-center text-gray-600 mb-4">
            Affordable and easy site builder for beginners
          </p>
          <div className="text-center text-2xl font-bold my-4">
            from ₦2,520.00<span className="text-base font-normal">/mo</span>
          </div>
          <a
            href="/cart/add/starter"
            className="bg-teal-600 hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded shadow font-medium transition text-center mb-4"
          >
            BUY NOW
          </a>
          <ul className="space-y-2 text-sm text-gray-700 flex-1">
            <li>DirectAdmin Control Panel</li>
            <li>5 GB SSD Storage</li>
            <li>10 Email Accounts</li>
            <li>1 Website</li>
            <li>Free .com.ng Domain</li>
            <li>Daily, Weekly & Monthly Backups</li>
            <li>Unlimited Bandwidth</li>
            <li>Includes Hosting</li>
            <li>Free SSL Certificates</li>
            <li className="text-yellow-600">Limited Plugins</li>
            <li className="text-yellow-600">Limited Templates</li>
            <li>SEO Tools</li>
            <li className="line-through text-gray-400">Ecommerce Tools</li>
            <li>7 Day Money-Back Guarantee</li>
            <li>99.9% Uptime Guarantee</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="border-2 border-teal-600 rounded-lg shadow-xl p-8 flex flex-col relative">
          <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
          <h4 className="text-2xl font-bold text-center mb-2">Pro</h4>
          <p className="text-center text-gray-600 mb-4">
            Advanced features for enhanced performance.
          </p>
          <div className="text-center text-2xl font-bold my-4">
            from ₦4,410.00<span className="text-base font-normal">/mo</span>
          </div>
          <a
            href="/cart/add/pro"
            className="bg-teal-600 hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded shadow font-medium transition text-center mb-4"
          >
            BUY NOW
          </a>
          <ul className="space-y-2 text-sm text-gray-700 flex-1">
            <li>DirectAdmin Control Panel</li>
            <li>10 GB SSD Storage</li>
            <li>50 Email Accounts</li>
            <li>2 Websites</li>
            <li>Free .com.ng Domain</li>
            <li>Daily, Weekly & Monthly Backups</li>
            <li>Unlimited Bandwidth</li>
            <li>Includes Hosting</li>
            <li>Free SSL Certificates</li>
            <li>Unlimited Plugins</li>
            <li>Unlimited Templates</li>
            <li>SEO Tools</li>
            <li>Ecommerce Tools</li>
            <li>7 Day Money-Back Guarantee</li>
            <li>99.9% Uptime Guarantee</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>

        {/* Pro Plus */}
        <div className="border rounded-lg shadow-lg p-8 flex flex-col">
          <h4 className="text-2xl font-bold text-center mb-2">Pro Plus</h4>
          <p className="text-center text-gray-600 mb-4">
            Premium tools for creating professional websites.
          </p>
          <div className="text-center text-2xl font-bold my-4">
            from ₦6,750.00<span className="text-base font-normal">/mo</span>
          </div>
          <a
            href="/cart/add/pro-plus"
            className="bg-teal-600 hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded shadow font-medium transition text-center mb-4"
          >
            BUY NOW
          </a>
          <ul className="space-y-2 text-sm text-gray-700 flex-1">
            <li>DirectAdmin Control Panel</li>
            <li>20 GB SSD Storage</li>
            <li>Unlimited Email Accounts</li>
            <li>5 Websites</li>
            <li>Free .com.ng Domain</li>
            <li>Daily, Weekly & Monthly Backups</li>
            <li>Unlimited Bandwidth</li>
            <li>Includes Hosting</li>
            <li>Free SSL Certificates</li>
            <li>Unlimited Plugins</li>
            <li>Unlimited Templates</li>
            <li>SEO Tools</li>
            <li>Ecommerce Tools</li>
            <li>7 Day Money-Back Guarantee</li>
            <li>99.9% Uptime Guarantee</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">
        <p className="text-gray-600 text-center md:text-left">
          Billing Options: Monthly, Quarterly, Biennially, Annually. Cancel Anytime.
        </p>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded shadow transition">
          Compare Plans
        </button>
      </div>
    </section>
  );
}
