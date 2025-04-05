import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    title: string;
    description: string;
    imagePath: string;

    className?: string;
};

export default function SimpleCard({ title, description, imagePath, className }: Props) {
    return (
        <div className={cn("relative flex h-full w-full flex-col items-center gap-2 rounded-2xl p-12", className)}>
            <h5 className="font-popins z-10 w-full text-lg font-bold opacity-80 md:text-2xl">{title}</h5>
            <p className="font-inter z-10 text-base font-normal md:text-xl">{description}</p>

            <span className="relative w-fit translate-x-full translate-y-1/6 scale-110">
                <Image src={imagePath} alt={title} className="object-cover" width={120} height={180} />
            </span>
        </div>
    );
}
