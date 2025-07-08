'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // optional icons library

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <span className="text-xl font-bold text-orange-600">NCFAWC</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 font-medium text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* CTA Button (hidden on small screens) */}
                <Link href="/contact" className="hidden md:block">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
                        Get in Touch
                    </button>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-orange-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 py-4 shadow">
                    <div className="flex flex-col gap-4 text-gray-700 font-medium">
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <button className="mt-6 w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            )}

        </header>
    );
};

export default Navbar;
