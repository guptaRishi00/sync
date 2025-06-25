import FloatingContent from "@/components/prefabs/floating-content";
import { frameMetadata } from "@/lib/utils";
import GlobalProvider from "@/providers/global-provider";
import type { Metadata } from "next";
import "./globals.css";
import { getHomePageData } from "@/data/loader";
import Script from "next/script"; // Add this import

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
                {/* Add Google Analytics Scripts Here */}
                <Script
                    id="google-analytics-external"
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-M3VKCX5SJR"
                />
                <Script
                    id="google-analytics-inline"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-M3VKCX5SJR');
                        `,
                    }}
                />
            </head>
            <body>
                <FloatingContent bookAppointmentButton={bookAppointmentButton} />
                <GlobalProvider>{children}</GlobalProvider>
            </body>
        </html>
    );
}
