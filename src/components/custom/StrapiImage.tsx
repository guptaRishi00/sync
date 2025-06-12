import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
    src: string;
    alt: string;
    height?: number;
    width?: number;
    className?: string;
}

export function StrapiImage({ src, alt, height, width, className }: Readonly<StrapiImageProps>) {
    if (!src) return null;
    const imageUrl = getStrapiMedia(src);
    // const imageFallback = `https://placehold.co/${width}x${height}`;
    const imageFallback = `https://placehold.co`;

    const shouldFill = !width || !height;

    return (
        <Image
            src={imageUrl ?? imageFallback}
            loading="lazy"
            alt={alt}
            unoptimized
            {...(shouldFill ? { fill: true } : { width, height })}
            className={className}
        />
    );
}
