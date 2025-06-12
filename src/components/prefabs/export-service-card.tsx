import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import { cn } from "@/lib/utils";
import DecorImage from "./decor-image";
import { StrapiImage } from "../custom/StrapiImage";
import { getHomePageData } from "@/data/loader";
// import Image from "next/image";

type Props = {
    imagePath: string;
    title: string;
    description?: string;
    isBookAppointment?: boolean;
    bookAppointment: any;
};

export default async function ExportServiceCard({ imagePath, title, description, isBookAppointment, bookAppointment }: Props) {
    console.log("service card:", bookAppointment);

    const res = await getHomePageData();
    const bookAppointmentButton = res.blocks.find((block: any) => block.__component === "homepage.book-appointment-button");

    return (
        <div className="flex w-full flex-col justify-start gap-2">
            {isBookAppointment ? (
                <>
                    <div className="from-secondary-light to-secondary relative flex aspect-387/267 w-full flex-col justify-center overflow-hidden rounded-2xl bg-linear-to-br p-8">
                        <h5 className="font-popins text-5xl leading-14 font-semibold text-white">
                            {bookAppointment?.title.split(" ")[0] + " "} <br />
                            {bookAppointment?.title.split(" ")[1] + " "}
                            <br />
                            {bookAppointment?.title.split(" ")[2] + " "}
                            <br />
                            <span className="text-primary">{bookAppointment?.title.split(" ")[3]}</span>
                            <br />
                        </h5>

                        <DecorImage
                            src="/images/decor-smile-white.png"
                            alt="Decor Smile"
                            size={[78, 78]}
                            className="top-0 right-0 z-20 -translate-x-1/2 translate-y-2/3"
                        />

                        <DecorImage
                            src="/images/decor-leaves.png"
                            alt="Decor Leaves"
                            size={[260, 260]}
                            className="right-0 bottom-0 z-20 size-44 translate-x-1/5 translate-y-1/4 opacity-80 md:size-[260px]"
                        />
                    </div>
                    <BookAppointmentButton data={bookAppointmentButton} className="mt-4 w-full" />
                </>
            ) : (
                <>
                    <div className="relative aspect-387/267 w-full overflow-hidden rounded-2xl">
                        <StrapiImage alt={"l"} src={imagePath} className="object-cover" />
                    </div>
                    <h3 className="font-popins mt-4 text-lg font-semibold md:text-2xl">{title}</h3>
                    <p className={cn("text-muted font-popins text-left text-base font-medium", !title && "mt-2")}>{description}</p>
                </>
            )}
        </div>
    );
}
