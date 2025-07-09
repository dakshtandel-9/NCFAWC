export default function MarketAnalysisPage() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📊</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Market Analysis & Marketing
          </h1>
          <p className="text-gray-600 text-lg">
            Product demand analysis, distribution strategy & local advertising support.
          </p>
        </div>

        {/* Image */}
        <img
          src="/images/services/marketing.jpg"
          alt="Market Analysis and Marketing"
          className="w-full h-96 object-cover rounded mb-8"
        />

        {/* Description */}
        <div className="text-lg text-gray-700 space-y-4">
          <p>
            <strong>Market Analysis and Marketing Support by CNF</strong><br /><br />
            • Market analysis is a detailed assessment of your business&rsquo;s target market and the competitive landscape within a specific industry. This analysis lets you project the success you can expect when you introduce your brand and its products to consumers within the market.
          </p>

          <p>
            <strong>• Benefits of Market Analysis</strong><br />
            Understand customer behaviour and buying pattern<br />
            Identify hidden opportunities<br />
            Understanding which distribution channel works and gives advantage to the brand<br />
            Understand customer need<br />
            Gauge the value proposition of the products
          </p>

          <p>
            <strong>• Marketing Services Support</strong><br />
            Local trader&rsquo;s details, printing house, no entry in city and other required banners, side hoarding and local marketing support like media house & publicity teams etc.
          </p>
        </div>
      </div>
    </section>
  );
}
