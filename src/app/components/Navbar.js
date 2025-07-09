'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
                <nav className="hidden md:flex gap-6 font-medium text-gray-700 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 ml-4">
                        <a
                            href="https://www.facebook.com/share/1Ajob5iKhp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-orange-500"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nagpur-cnf-warehouse-trading-grain-a3299a373"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-orange-500"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 
                                5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                                19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76 
                                0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 
                                .97-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                                0-2.16 1.46-2.16 2.96v5.71h-3v-10h2.89v1.37h.04c.4-.75 
                                1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.58z" />
                            </svg>
                        </a>
                    </div>
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

                        {/* Social Icons Mobile */}
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://www.facebook.com/share/1Ajob5iKhp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nagpur-cnf-warehouse-trading-grain-a3299a373"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 
                                    5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                                    19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76 
                                    0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 
                                    .97-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                                    0-2.16 1.46-2.16 2.96v5.71h-3v-10h2.89v1.37h.04c.4-.75 
                                    1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.58z" />
                                </svg>
                            </a>
                        </div>
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
