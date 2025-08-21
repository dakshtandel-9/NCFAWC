// app/components/DownloadPdfButton.js
"use client";

import { useRef, useState } from "react";

export default function DownloadPdfButton({
    filePath = "/pdf.pdf",
    downloadName = "pdf.pdf",
    children = "Download PDF",
    className = "",
    loadingText = "Preparing...",
}) {
    const linkRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleDownload = async (e) => {
        e.preventDefault();
        // Optional: show a brief loading state (useful if analytics or prechecks happen)
        setLoading(true);
        try {
            // Ensure the file is reachable before triggering download (optional)
            const res = await fetch(filePath, { method: "HEAD" });
            if (!res.ok) throw new Error("File not found");
            linkRef.current?.click();
        } catch (err) {
            console.error(err);
            // You could show a toast or inline error here
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Hidden anchor using native download behavior */}
            <a
                ref={linkRef}
                href={filePath}
                download={downloadName}
                className="hidden"
            >
                {downloadName}
            </a>

            <button
                onClick={handleDownload}
                disabled={loading}
                className={[
                    // Base button styles
                    "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium",
                    "transition-colors duration-200",
                    // Colors
                    "bg-[#F44900] text-white hover:bg-[#d94404]",
                    // Focus ring
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                    // Disabled
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    className,
                ].join(" ")}
                aria-busy={loading ? "true" : "false"}
            >
                {/* Icon */}
                <svg
                    className={`h-4 w-4 ${loading ? "animate-pulse" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <span>{loading ? loadingText : children}</span>
            </button>
        </>
    );
}
