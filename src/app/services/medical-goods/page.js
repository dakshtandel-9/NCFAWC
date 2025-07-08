export default function MedicalGoodsPage() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Medical Goods Handling</h1>

                <img
                    src="/images/services/medical.jpg"
                    alt="Medical Storage"
                    className="w-full h-120 object-cover rounded mb-8"
                />

                <div className="text-lg text-gray-700 space-y-4">
                    <p>
                        Medical equipment and products require delicate handling, hygienic storage, temperature control,
                        tagging, batch management, and FIFO execution.
                    </p>
                    <p>
                        Our warehouse follows standard operating procedures (SOPs) with complete safety norms and reefer
                        logistics to ensure the best quality delivery.
                    </p>
                    <p>
                        We maintain expiry records, batch tagging, and full compliance for medical product handling.
                    </p>
                </div>
            </div>
        </section>
    );
}
