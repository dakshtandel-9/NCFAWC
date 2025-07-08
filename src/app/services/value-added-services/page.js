export default function ValueAddedServicesPage() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Value Added Services</h1>

                <img
                    src="/images/services/value-added.jpg"
                    alt="Value Added Services"
                    className="w-full h-120 object-cover rounded mb-8"
                />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>
                        Our value-added services include packaging, repacking, dedicated space rental, GST support, and transport
                        for PDS/government/private firms.
                    </p>
                    <p>
                        We manage repacking loose items into company cartons, saving clients time and enhancing product presentation.
                    </p>
                    <p>
                        Additional support includes warehouse on-demand and daily handling of 400–500 MT capacity.
                    </p>
                </div>
            </div>
        </section>
    );
}
