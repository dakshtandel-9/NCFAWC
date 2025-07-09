const ContactDetails = () => {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                    <ul className="text-gray-700 space-y-4 text-sm">
                        <li>
                            📞 <strong>Phone:</strong> 7028419769
                        </li>
                        <li>
                            ✉️ <strong>Email:</strong>{' '}
                            <a href="mailto:nagpurcfawarehouse@gmail.com" className="text-orange-600 hover:underline">
                                nagpurcfawarehouse@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Addresses */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Offices</h2>
                    <ul className="text-gray-700 space-y-4 text-sm">
                        <li>
                            🏢 <strong>Main Office:</strong> Gagdish Palace, Gopal Peth, Nagpur, Maharashtra 441102
                        </li>
                        <li>
                            🏭 <strong>Work Office 1:</strong> Hingna Road, Nagpur
                        </li>
                        <li>
                            🏭 <strong>Work Office 2:</strong> Transport Nagar, Hyderabad Road, Nagpur
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
