'use client';
import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function RootLayoutClient({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <Loader /> : children;
}
