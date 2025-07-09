const AboutSection = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Text Content */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About NCFAWC</h2>

                    <p className="text-gray-700 mb-4">
                        Established in 2001, Nagpur Clearing & Forwarding and Warehouse (NCFAWC) has over 26 years of experience in delivering end-to-end warehousing, clearing, logistics, trading, pest control management, and distribution solutions across India.
                    </p>

                    <p className="text-gray-700 mb-6">
                        From handling FMCG, medical goods, and perishables to custom clearing, cold chain logistics, specialized trading, and pest control operations – we manage every step with precision, quality, and care.
                    </p>

                    <ul className="space-y-3 text-gray-700">
                        <li>✅ 300+ Cr Group Turnover</li>
                        <li>✅ PAN-India Network & Fleet</li>
                        <li>✅ Cold & Dry Storage Facilities</li>
                        <li>✅ Certified, Licensed, and Trusted</li>
                    </ul>
                </div>


                {/* Optional Image */}
                <div className="text-center">
                    <img
                        src="/images/05.png" // Replace with your actual image
                        alt="About NCFAWC"
                        className="w-full max-w-md mx-auto rounded shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
