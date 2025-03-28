import { frameMetadata } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = frameMetadata("About");

type Props = {
    children: React.ReactNode;
};

export default function AboutLayout({ children }: Props) {
    return <>{children}</>;
}
