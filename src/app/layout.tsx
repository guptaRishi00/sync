import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import WhatsAppButton from "@/components/prefabs/whatsapp-button";
import { frameMetadata } from "@/lib/utils";
import GlobalProvider from "@/providers/global-provider";
import type { Metadata } from "next";
import "./globals.css"; // Global styles for the entire app

export const metadata: Metadata = frameMetadata("Home");

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <GlobalProvider>{children}</GlobalProvider>
                <div className="fixed right-12 bottom-34 z-50 flex flex-col-reverse items-end justify-start gap-4">
                    <BookAppointmentButton className="shadow" />
                    <WhatsAppButton />
                </div>
            </body>
        </html>
    );
}
