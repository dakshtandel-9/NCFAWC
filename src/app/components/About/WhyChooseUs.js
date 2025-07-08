const capabilities = [
    {
        title: "PAN India Presence",
        description: "Operations across Maharashtra, Delhi, MP, UP, Rajasthan, and more with a strong distribution network.",
        icon: "🗺️",
    },
    {
        title: "Custom & Cold Chain Logistics",
        description: "Complete CNF, reefer logistics, and custom clearing services for all types of goods including medical and FMCG.",
        icon: "🚛",
    },
    {
        title: "In-House Fleet & Live Tracking",
        description: "Own fleet and team with live tracking and fast, secure delivery including ODA zones.",
        icon: "📦",
    },
    {
        title: "26+ Years of Experience",
        description: "Trusted legacy since 1995 with ₹300+ Cr turnover and expertise in critical industry segments.",
        icon: "🏆",
    },
    {
        title: "Value Added Services",
        description: "Packaging, repacking, GST help, warehouse rental, marketing support, and more — all under one roof.",
        icon: "🛠️",
    },
    {
        title: "Certified & Compliant",
        description: "ISO certified, licensed, and experienced with govt. & private stock, ensuring complete product integrity.",
        icon: "✅",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Why Choose NCFAWC?</h2>
                <p className="text-gray-600 mt-2">Decades of trust, technology, and tailored solutions make us the right choice.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {capabilities.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left"
                    >
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
