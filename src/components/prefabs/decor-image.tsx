import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    className?: string;
    src: string;
    alt: string;
    size: [number, number];
};

export default function DecorImage({ className, src, alt, ["size"]: [width, height] }: Props) {
    return <Image src={src} alt={alt} width={width} height={height} className={cn("absolute -z-10 object-cover", className)} />;
}
