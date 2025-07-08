export default function AgroTradingPage() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Agro & Fuel Trading</h1>

                <img
                    src="/images/services/trading.jpg"
                    alt="Agro Trading"
                    className="w-full h-120 object-cover rounded mb-8"
                />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>
                        We trade broken rice, maize, wheat, DDGS, rice husk, and coal for use in ethanol plants,
                        feed mills, and boilers.
                    </p>
                    <p>
                        Our deep supply chain and delivery network ensures reliable transport and handling of
                        agricultural and industrial fuels.
                    </p>
                </div>
            </div>
        </section>
    );
}
