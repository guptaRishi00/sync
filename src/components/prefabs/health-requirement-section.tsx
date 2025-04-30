import DecorImage from "@/components/prefabs/decor-image";
import SimpleCard from "@/components/prefabs/simple-card";
import Image from "next/image";

export default function HealthRequirementSection() {
    return (
        <section className="section flex flex-col items-center justify-center gap-16 md:min-h-screen">
            <div className="flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row">
                <div className="flex w-full flex-col gap-4 md:max-w-1/2">
                    <h2 className="font-popins relative mt-6 text-3xl font-medium md:mt-0 md:text-5xl md:leading-16">
                        Your well-being <br /> is our priority
                        <DecorImage
                            src="/images/decor-smile.png"
                            alt="Decor Smile"
                            size={[28, 28]}
                            className="right-0 bottom-0 -translate-x-full"
                        />
                    </h2>
                    <p className="font-popins text-muted text-2xl">
                        With every step you take towards healing, we’re committed to offering the care and space you need to thrive.
                    </p>
                </div>

                <div className="relative aspect-600/252 h-38 w-fit place-self-end self-center">
                    <Image src="/images/home-decore-1.png" alt="Hero Thumbnail" fill className="w-fit object-contain" />
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4">
                <SimpleCard
                    title="Specialised care designed for you"
                    description="Specialized care on neurodivergence and related disorders “focused on you, by us. "
                    imagePath="/images/home-decore-2.png"
                    className="from-secondary-light bg-linear-to-br to-[#69482D] "
                />

                <SimpleCard
                    title="Wellness beyond therapy"
                    description="We trust that the path to wholeness—harmonizing mind, body, emotion, and energy—leads to a life truly lived."
                    imagePath="/images/home-decore-3.png"
                    className="bg-[#AC9D81]"
                    scaleRatio="relative w-fit translate-x-[170%] -translate-y-1/9 scale-190"
                />

                <SimpleCard
                    title="Ongoing Care & Connection"
                    description="Stay in touch, we're here for you. We are committed to walking this journey with you."
                    imagePath="/images/home-decore-4.png"
                    className="from-primary to-primary bg-linear-to-br"
                />

                <SimpleCard
                    title="A Trusted space to Grow and Thrive"
                    description="A nurturing space of comfort and calm, cultivating your journey."
                    imagePath="/images/home-decore-2.png"
                    className="bg-linear-to-br from-[#1080F8] to-[#1365BE]"
                />
            </div>
        </section>
    );
}
