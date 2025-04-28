import { frameMetadata } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = frameMetadata("Blog");

type Props = {
    children: React.ReactNode;
};

export default function BlogDetailLayout({ children }: Props) {
    return <>{children}</>;
}
