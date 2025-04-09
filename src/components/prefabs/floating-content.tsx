"use client";

import useScrollPosition from "@/hooks/scroll-position.hook";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import BookAppointmentButton from "./book-appointment-button";
import WhatsAppButton from "./whatsapp-button";

export default function FloatingContent() {
    const scrollPosition = useScrollPosition();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (scrollPosition > 150) {
            setVisible(true);
        }
        if (scrollPosition < 150) {
            setVisible(false);
        }
    }, [scrollPosition]);

    return (
        <div
            className={cn(
                "fixed right-12 bottom-12 z-40 flex w-fit flex-col-reverse items-end justify-start gap-4",
                visible ? "opacity-100" : "opacity-0 transition-opacity duration-300",
            )}
        >
            <BookAppointmentButton className="shadow" />
            <WhatsAppButton />
        </div>
    );
}
