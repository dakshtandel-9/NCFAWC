const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Reliable CNF & Warehouse Solutions
                    </h1>
                    <p className="text-lg mb-8">
                        With 26+ years of experience, NCFAWC provides complete clearing, forwarding, logistics, cold storage, and distribution services across India.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Optional Image or Illustration */}
                <div className="md:w-1/2 text-center">
                    <img
                        src="/images/04.png" // Replace with actual image
                        alt="Warehouse Illustration"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
