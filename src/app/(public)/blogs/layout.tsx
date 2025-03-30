import { frameMetadata } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = frameMetadata("Blogs");

type Props = {
    children: React.ReactNode;
};

export default function BlogsLayout({ children }: Props) {
    return <>{children}</>;
}
