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
                        <li><a href="/" className="hover:text-orange-400">Home</a></li>
                        <li><a href="/about" className="hover:text-orange-400">About</a></li>
                        <li><a href="/services" className="hover:text-orange-400">Services</a></li>
                        <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li>📍 Gagdish Palace, Gopal Peth, Nagpur, MH</li>
                        <li>📞 7028419769</li>
                        <li>✉️ <a href="mailto:nagpurcfawarehouse@gmail.com" className="hover:text-orange-400">nagpurcfawarehouse@gmail.com</a></li>
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
