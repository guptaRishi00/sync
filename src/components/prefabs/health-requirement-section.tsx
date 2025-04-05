import DecorImage from "@/components/prefabs/decor-image";
import SimpleCard from "@/components/prefabs/simple-card";
import Image from "next/image";

export default function HealthRequirementSection() {
    return (
        <section className="section flex flex-col items-center justify-center gap-16 md:min-h-screen">
            <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-4 md:max-w-1/2">
                    <h2 className="font-popins relative text-3xl font-medium md:text-5xl">
                        Your health requirements are our first focus.
                        <DecorImage
                            src="/images/decor-smile.png"
                            alt="Decor Smile"
                            size={[28, 28]}
                            className="right-0 bottom-0 -translate-x-full"
                        />
                    </h2>
                    <p className="font-popins text-muted text-2xl">
                        Looking to speak with a professional, check your test score, <br />
                        or learn about various disorders?
                    </p>
                </div>

                <div className="relative m-8 aspect-1321/570 h-38 w-full grow">
                    <Image src="/images/home-decore-1.png" alt="Hero Thumbnail" fill className="h-full w-full object-contain" />
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4">
                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-2.png"
                    className="from-secondary-light to-secondary bg-linear-to-br"
                />

                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-3.png"
                    className="bg-[#AC9D81]"
                />

                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-4.png"
                    className="from-primary-light to-primary bg-linear-to-br"
                />

                <SimpleCard
                    title="Lorem Ipsum"
                    description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
                    imagePath="/images/home-decore-2.png"
                    className="bg-linear-to-br from-[#1080F8] to-[#1365BE]"
                />
            </div>
        </section>
    );
}
