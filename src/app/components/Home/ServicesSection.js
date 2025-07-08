const services = [
    {
        title: "Warehouse & Storage",
        description:
            "Dry & cold storage facilities for FMCG, medical, electrical, and staple goods with proper temperature control and inventory systems.",
        icon: "📦",
    },
    {
        title: "Clearing & Forwarding",
        description:
            "End-to-end CNF operations: loading/unloading, stock keeping, billing, and final delivery across India.",
        icon: "🚚",
    },
    {
        title: "Cold Chain Logistics",
        description:
            "Reefer storage and temperature-controlled transportation for perishables and pharmaceuticals.",
        icon: "❄️",
    },
    {
        title: "Medical Goods Handling",
        description:
            "Secure handling of medicinal products with batch records, expiry tracking, FIFO, and hygienic SOPs.",
        icon: "🧴",
    },
    {
        title: "Transportation & Fleet",
        description:
            "In-house fleet & logistics planning for FTL, part load, and LCL cargo with live tracking and fast delivery.",
        icon: "🚛",
    },
    {
        title: "Value Added Services",
        description:
            "Packaging, repacking, custom clearing, market analysis, GST liaison, local marketing & more.",
        icon: "🛠️",
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Our Core Services</h2>
                <p className="text-gray-600 mt-2">
                    Complete logistics, warehousing, and CNF support tailored for your business
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
