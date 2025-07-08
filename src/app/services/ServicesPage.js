import Link from 'next/link';
import services from '@/data/services';

export default function ServicesPage() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
                <p className="text-gray-600">Explore the full range of clearing, warehousing, and logistics services we offer.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                        <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition cursor-pointer text-center">
                            <div className="text-4xl mb-3">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
