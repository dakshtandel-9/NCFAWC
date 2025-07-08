'use client'; // Only needed in App Router setup if using interactivity

import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can connect this to Formspree, Nodemailer, etc.
        alert('Message submitted!');
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="p-4 border rounded-lg"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 border rounded-lg"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-4 border rounded-lg"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="p-4 border rounded-lg"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
