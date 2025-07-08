const MissionVision = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Our Mission, Vision & Values</h2>
                <p className="text-gray-600 mt-2">
                    We are committed to delivering trust, efficiency, and excellence in every shipment.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-orange-600 mb-2">🚀 Our Mission</h3>
                    <p className="text-gray-700 text-sm">
                        To provide seamless, secure, and scalable CNF and warehouse solutions that drive business growth and ensure customer satisfaction across industries.
                    </p>
                </div>

                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-orange-600 mb-2">🌍 Our Vision</h3>
                    <p className="text-gray-700 text-sm">
                        To be India’s most reliable and advanced logistics & warehouse network with a strong presence in every major state and sector.
                    </p>
                </div>

                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-orange-600 mb-2">💡 Core Values</h3>
                    <ul className="text-gray-700 text-sm space-y-2">
                        <li>✔️ Customer-Centric Approach</li>
                        <li>✔️ Reliability & Transparency</li>
                        <li>✔️ Innovation in Logistics</li>
                        <li>✔️ Safety & Compliance</li>
                        <li>✔️ Teamwork & Integrity</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
