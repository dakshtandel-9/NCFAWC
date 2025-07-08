const testimonials = [
    {
        name: "Procurement Head",
        company: "Britannia",
        feedback:
            "NCFAWC has been a reliable logistics partner for over a decade. Timely deliveries, great support!",
    },
    {
        name: "Operations Manager",
        company: "Varun Beverages",
        feedback:
            "Cold chain and storage solutions helped us scale operations. Excellent tracking and response.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Client Testimonials</h2>
                <p className="text-gray-600 mt-2">What our clients say about us</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded shadow">
                        <p className="text-gray-700 mb-4">“{testimonial.feedback}”</p>
                        <h4 className="font-semibold text-orange-600">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
