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
        <div className={cn("relative flex h-full w-full flex-col items-center justify-between gap-2 rounded-2xl p-6", className)}>
            <div className="flex flex-col gap-6">
                <h5 className="font-popins z-10 w-full text-lg font-bold opacity-80 md:text-2xl">{title}</h5>
                <p className="font-inter z-10 text-base font-normal md:text-xl">{description}</p>
            </div>

            <span className="relative w-fit translate-x-[170%] -translate-y-1/9 scale-200">
                <Image src={imagePath} alt={title} className="object-cover" width={70} height={130} />
            </span>
        </div>
    );
}
