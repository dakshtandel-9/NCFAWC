"use client";

import { useEffect, useState } from "react";

const Hero = () => {
    const headings = [
        "Nagpur Clearing & Forwarding and Warehouse CNF",
        "RSMS Pest Control Services",
        "Shri Bajrangbali Rambhakt Trading Company"
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0); // Index of the heading
    const [charIndex, setCharIndex] = useState(0); // Character index

    useEffect(() => {
        const currentHeading = headings[index];
        let timeout;

        if (charIndex < currentHeading.length) {
            timeout = setTimeout(() => {
                setText((prev) => prev + currentHeading[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 70); // Typing speed
        } else {
            // Pause before deleting
            timeout = setTimeout(() => {
                setText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % headings.length);
            }, 2000); // Delay before switching to next heading
        }

        return () => clearTimeout(timeout);
    }, [charIndex, index]);

    return (
        <section className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight min-h-[100px]">
                        {text}
                        <span className="animate-pulse">|</span>
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
