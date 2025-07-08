const locations = {
    Maharashtra: ["Nagpur", "Nashik", "Pune", "Bhiwandi"],
    OtherStates: [
        "Delhi – Alipur",
        "Jaipur – VKI Industrial Area",
        "Lucknow – Transport Nagar",
        "Chandigarh – Mullanpur, Mohali",
        "Indore", "Bhopal", "Jabalpur",
    ],
};

const OurLocations = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Our Presence Across India</h2>
                <p className="text-gray-600 mt-2">Expanding our network to deliver efficiency and reach nationwide</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Maharashtra Locations */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-3">📍 Maharashtra</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {locations.Maharashtra.map((city, index) => (
                            <li key={index}>{city}</li>
                        ))}
                    </ul>
                </div>

                {/* Other States */}
                <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-3">📌 Other States</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {locations.OtherStates.map((city, index) => (
                            <li key={index}>{city}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OurLocations;
