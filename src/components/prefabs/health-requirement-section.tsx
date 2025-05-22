import DecorImage from "@/components/prefabs/decor-image";
import SimpleCard from "@/components/prefabs/simple-card";
import { getHealthRequirement } from "@/lib/strapi";
import Image from "next/image";

export default async function HealthRequirementSection() {
    const res = await getHealthRequirement();
    const { title, description, simple_card } = res.health_requirement;

    const cardStyles = [
        "from-secondary-light bg-linear-to-br to-[#69482D]",
        "bg-[#AC9D81]",
        "from-primary to-primary bg-linear-to-br",
        "bg-linear-to-br from-[#1080F8] to-[#1365BE]",
    ];

    return (
        <section className="section flex flex-col items-center justify-center gap-16 md:min-h-screen">
            <div className="flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-4 md:max-w-1/2">
                    <h2 className="font-popins relative mt-6 text-3xl font-medium md:mt-0 md:text-5xl md:leading-16">
                        {title.split(" ")[0] + " " + " " + title.split(" ")[1]}
                        <br /> {title.split(" ")[2] + " " + title.split(" ")[3] + " " + title.split(" ")[4]}
                        <DecorImage
                            src="/images/decor-smile.png"
                            alt="Decor Smile"
                            size={[28, 28]}
                            className="right-0 bottom-0 -translate-x-full"
                        />
                    </h2>
                    <p className="font-popins text-muted text-2xl">{description}</p>
                </div>

                <div className="relative aspect-600/252 h-38 w-fit place-self-end self-center">
                    <Image src="/images/home-decore-1.png" alt="Hero Thumbnail" fill className="w-fit object-contain" />
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4">
                {simple_card.map((card: any, i: number) => (
                    <SimpleCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        imagePath={card.image?.url}
                        className={cardStyles[i] || ""}
                    />
                ))}
            </div>
        </section>
    );
}
