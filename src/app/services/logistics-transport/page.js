export default function LogisticsPage() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Logistics & Transport</h1>

                <img
                    src="/images/services/transport.jpg"
                    alt="Logistics and Transport"
                    className="w-full h-120 object-cover rounded mb-8"
                />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>
                        We manage FMCG logistics including full load, part load, and LCL cargo with real-time tracking.
                        Our in-house fleet and logistics team ensure daily shipments from all working sites.
                    </p>
                    <p>
                        We implement Just-In-Time delivery, drop-shipping models, and ABC inventory analysis for optimized supply.
                    </p>
                    <p>
                        Our key goal is sound distribution with live tracking to meet demand efficiently.
                    </p>
                </div>
            </div>
        </section>
    );
}
