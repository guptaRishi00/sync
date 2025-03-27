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
        <div className={cn("relative flex h-full w-full flex-col gap-2 rounded-2xl p-12", className)}>
            <h5 className="z-10 text-sm font-bold opacity-80 md:text-lg">{title}</h5>
            <p className="z-10 pb-24">{description}</p>

            <div className="absolute right-0 bottom-0 -z-0 translate-x-1/5 translate-y-1/5 md:scale-110">
                <Image src={imagePath} alt={title} className="object-cover" width={120} height={180} />
            </div>
        </div>
    );
}
