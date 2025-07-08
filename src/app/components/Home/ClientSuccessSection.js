const clients = [
    { name: "Britannia", logo: "/images/01.png" },
    { name: "Varun Beverages", logo: "/images/02.png" },
    { name: "Floriana Marbles", logo: "/images/03.png" },
    { name: "Surya Roshni", logo: "/images/06.png" },
    { name: "VTI", logo: "/images/07.png" },
    { name: "Siddharth Petro Grease", logo: "/images/08.png" },
];

const ClientSuccessSection = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Trusted by Leading Brands</h2>
                <p className="text-gray-600 mt-2">Our services are trusted by top companies across India</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto items-center">
                {clients.map((client, index) => (
                    <div key={index} className="flex items-center justify-center p-2">
                        <img
                            src={client.logo}
                            alt={client.name}
                            className="h-12 object-contain grayscale hover:grayscale-0 transition"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientSuccessSection;
