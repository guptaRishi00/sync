import { getStrapiMedia } from "@/lib/utils";

interface StrapiVideoProps {
    src: string;
    poster?: string;
    className?: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    preload?: "auto" | "metadata" | "none";
}

export function StrapiVideo({
    src,
    poster,
    className = "",
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    preload = "metadata",
}: Readonly<StrapiVideoProps>) {
    if (!src) return null;

    const videoUrl = getStrapiMedia(src) ?? undefined;
    const posterUrl = poster ? (getStrapiMedia(poster) ?? undefined) : undefined;

    return (
        <video
            className={`h-full overflow-hidden rounded-2xl object-cover ${className}`}
            src={videoUrl}
            poster={posterUrl}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            preload={preload}
        >
            Your browser does not support the video tag.
        </video>
    );
}
