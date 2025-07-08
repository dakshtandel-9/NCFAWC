import Link from 'next/link';

const AboutCTA = () => {
    return (
        <section className="bg-orange-600 text-white py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Work With NCFAWC?</h2>
                <p className="text-lg mb-8">
                    Let us handle your logistics, warehousing, and distribution needs with experience and excellence.
                </p>
                <Link href="/contact">
                    <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
                        Contact Us
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default AboutCTA;
