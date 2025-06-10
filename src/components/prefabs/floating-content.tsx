"use client";

import useScrollPosition from "@/hooks/scroll-position.hook";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import BookAppointmentButton from "./book-appointment-button";
import WhatsAppButton from "./whatsapp-button";

export default function FloatingContent({ bookAppointmentButton }: any) {
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
                "fixed right-6 bottom-8 z-40 flex w-fit flex-col-reverse items-end justify-start gap-4 md:right-12 md:bottom-12",
                visible ? "opacity-100" : "hidden",
            )}
        >
            <BookAppointmentButton className="shadow" data={bookAppointmentButton} />
            <WhatsAppButton />
        </div>
    );
}
