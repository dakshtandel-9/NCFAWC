export default function MarketAnalysisPage() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📊</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Market Analysis & Marketing</h1>
          <p className="text-gray-600 text-lg">
            Product demand analysis, distribution strategy & local advertising support.
          </p>
        </div>

        <img
          src="/images/services/marketing.jpg"
          alt="Market Analysis and Marketing"
          className="w-full h-120 object-cover rounded mb-8"
        />

        <div className="text-lg text-gray-700 space-y-4">
          <p>
            Our team performs market research and local product demand analysis to design
            a region-specific product movement and distribution plan.
          </p>
          <p>
            We support manufacturers and brand owners with on-ground promotion services like
            hoardings, banners, print materials, and in-person dealer/trader outreach across India.
          </p>
          <p>
            This helps increase brand visibility, distributor onboarding, and product placement
            in targeted towns and semi-urban regions.
          </p>
        </div>
      </div>
    </section>
  );
}
