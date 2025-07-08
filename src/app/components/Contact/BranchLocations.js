const branchLocations = {
    "📍 Maharashtra": ["Nagpur", "Nashik", "Pune", "Bhiwandi"],
    "📌 Other States": [
        "Delhi – Alipur",
        "Jaipur – VKI Industrial Area",
        "Lucknow – Transport Nagar",
        "Chandigarh – Mullanpur, Mohali",
        "Madhya Pradesh – Indore, Bhopal, Jabalpur",
    ],
};

const BranchLocations = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Branch & Site Locations</h2>
                <p className="text-gray-600 mt-2">
                    Our services span across major states and cities in India.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {Object.entries(branchLocations).map(([region, cities], index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-orange-600 mb-4">{region}</h3>
                        <ul className="text-gray-700 space-y-2 text-sm list-disc list-inside">
                            {cities.map((city, idx) => (
                                <li key={idx}>{city}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BranchLocations;
