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
            </body>
        </html>
    );
}
