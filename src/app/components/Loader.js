'use client';

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid mb-4"></div>
                <p className="text-gray-700 text-sm font-medium">Loading, please wait...</p>
            </div>
        </div>
    );
}
