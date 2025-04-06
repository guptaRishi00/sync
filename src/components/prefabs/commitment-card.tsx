import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    className?: string;
    title: string;
    description: string;
    imagePath: string;
};

export default function CommitmentCard({ className, title, description, imagePath }: Props) {
    return (
        <div className={cn("relative aspect-4/3 overflow-hidden rounded-2xl md:aspect-3/4", className)}>
            <div className="bg-primary font-popins absolute bottom-0 left-0 z-10 m-8 flex flex-col gap-2 rounded-2xl px-4 py-6 lg:h-44">
                <h5 className="text-xl font-semibold md:text-3xl">{title}</h5>
                <p className="mb-12 text-lg font-normal">{description}</p>
            </div>
            <Image src={imagePath} alt={title} fill className="-z-10 h-full w-full object-cover" />
        </div>
    );
}
