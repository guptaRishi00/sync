import FloatingContent from "@/components/prefabs/floating-content";
import { frameMetadata } from "@/lib/utils";
import GlobalProvider from "@/providers/global-provider";
import type { Metadata } from "next";
import "./globals.css"; // Global styles for the entire app
import { getHomePageData } from "@/data/loader";

export const metadata: Metadata = frameMetadata("Home");

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
    const res = await getHomePageData();
    const bookAppointmentButton = res.blocks.find((block: any) => block.__component === "homepage.book-appointment-button");
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </head>
            <body>
                <FloatingContent bookAppointmentButton={bookAppointmentButton} />
                <GlobalProvider>{children}</GlobalProvider>
            </body>
        </html>
    );
}
