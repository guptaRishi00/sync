"use client";

import { useEffect, useState } from "react";

export function useScrollPosition(): number {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrollY((prev) => (prev !== currentY ? currentY : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initialize once

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollY;
}
