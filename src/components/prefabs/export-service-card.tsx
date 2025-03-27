import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    imagePath: string;
    title: string;
    description?: string;
    isBookAppointment?: boolean;
};

export default function ExportServiceCard({ imagePath, title, description, isBookAppointment }: Props) {
    return (
        <div className="flex w-full flex-col justify-start gap-2">
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl">
                <Image loading="lazy" alt={title} fill src={imagePath as string} className="object-cover" />
            </div>

            {isBookAppointment ? (
                <>
                    <BookAppointmentButton className="mt-4 w-full" />
                </>
            ) : (
                <>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className={cn("text-muted text-sm", !title && "mt-2")}>{description}</p>
                </>
            )}
        </div>
    );
}
