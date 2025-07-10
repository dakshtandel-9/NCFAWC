"use client";

import { useEffect, useState } from "react";

const headings = [
    "Nagpur Clearing & Forwarding and Warehouse CNF",
    "RSMS Pest Control Services",
    "Shri Bajrangbali Rambhakt Trading Company",
];

const Hero = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0); // current heading index
    const [charIndex, setCharIndex] = useState(0); // character position

    useEffect(() => {
        const currentHeading = headings[index];
        let timeout;

        if (charIndex < currentHeading.length) {
            timeout = setTimeout(() => {
                setText((prev) => prev + currentHeading[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 70);
        } else {
            timeout = setTimeout(() => {
                setText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % headings.length);
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, index]);

    return (
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Content */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight min-h-[100px]">
                        {text}
                        <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-lg mb-8">
                        We are Nagpur based Clearing & Forwarding and Warehouse CNF service provider. With 26 years of experience in Clearing and Forwarding with strong logistics and Product supply chain and Distribution network. Also the Group is intoTrading of Agri commodity like Wheat, Maize, Broken rice and Fuel products like Indian Coal and Rice Husk for Boiler use.
                        We are giving best of service to our Prestigious clients as per customized requirements by clients. Welcome to NCFAWCNF
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Image */}
                <div className="md:w-1/2 text-center">
                    <img
                        src="/images/04.png"
                        alt="Warehouse Illustration"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
