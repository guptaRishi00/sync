import { frameMetadata } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = frameMetadata("Academy");

type Props = {
    children: React.ReactNode;
};

export default function AcademyLayout({ children }: Props) {
    return <>{children}</>;
}
