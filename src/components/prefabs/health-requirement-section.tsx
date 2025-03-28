import DecorImage from "@/components/prefabs/decor-image";
import SimpleCard from "@/components/prefabs/simple-card";
import Image from "next/image";

export default function HealthRequirementSection() {
    return (
        <section className="section flex flex-col gap-12">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-4 md:max-w-1/2">
                    <h2 className="relative text-3xl md:text-5xl">
                        Your health requirements are our first focus.
                        <DecorImage
                            src="/images/decor-smile.png"
                            alt="Decor Smile"
                            size={[28, 28]}
                            className="right-0 bottom-0 -translate-x-full"
                        />
                    </h2>
                    <p>
                        Looking to speak with a professional, check your test score, <br />
                        or learn about various disorders?
                    </p>
                </div>

                <div className="relative m-8 aspect-1321/570 h-fit w-full grow">
                    <Image src="/images/home-decore-1.png" alt="Hero Thumbnail" fill className="h-full w-full object-cover" />
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4">
                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-2.png"
                    className="bg-secondary-light"
                />

                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-3.png"
                    className="bg-secondary"
                />

                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-4.png"
                    className="bg-primary"
                />

                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-2.png"
                    className="bg-accent"
                />
            </div>
        </section>
    );
}
