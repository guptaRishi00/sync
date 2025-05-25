import { cn, getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

type Props = {
    className?: string;
    src?: string | null; // Accept null/undefined gracefully
    alt: string;
    size: [number, number];
};

export default function DecorImage({ className, src, alt, size: [width, height] }: Props) {
    // Compute full image URL or fallback
    let imageUrl: string | null = src ? getStrapiMedia(src) : null;

    // If URL is still not valid, use a placeholder
    if (!imageUrl) {
        imageUrl = "/placeholder.jpg"; // Place a fallback image in /public
    }

    // Next.js Image must have a valid string src
    return (
        <Image
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
            className={cn("absolute -z-10 object-cover", className)}
            unoptimized={imageUrl.startsWith("/")} // Optional: don’t optimize local images
            priority // Optional: load ASAP for decorative backgrounds
        />
    );
}
