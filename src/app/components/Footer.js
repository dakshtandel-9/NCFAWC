import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold text-orange-500 mb-4">NCFAWC</h2>
                    <p className="text-sm leading-relaxed">
                        Nagpur Clearing & Forwarding and Warehouse offers CNF services, cold storage, logistics, distribution, and more with 26+ years of trust and expertise.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
                        <li><Link href="/services" className="hover:text-orange-400">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li>📍 Gagdish Palace, Gopal Peth, Nagpur, MH</li>
                        <li>📞 7028419769</li>
                        <li>
                            ✉️ <a href="mailto:nagpurcfawarehouse@gmail.com" className="hover:text-orange-400">
                                nagpurcfawarehouse@gmail.com
                            </a>
                        </li>
                        <li className="flex space-x-4 mt-2">
                            <a
                                href="https://www.facebook.com/share/1Ajob5iKhp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-400"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nagpur-cnf-warehouse-trading-grain-a3299a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-400"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
                                    0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 
                                    0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75s1.75.78 
                                    1.75 1.75c0 .97-.78 1.76-1.75 1.76zm13.5 
                                    11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 
                                    1.46-2.16 2.96v5.71h-3v-10h2.89v1.37h.04c.4-.75 
                                    1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 
                                    4.59v5.58z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Locations */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Locations</h3>
                    <p className="text-sm">
                        Maharashtra, Delhi, Jaipur, Lucknow, Chandigarh, MP & more.
                    </p>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} NCFAWC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
