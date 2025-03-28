import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import CommitmentCard from "@/components/prefabs/commitment-card";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
export default async function AboutPage() {
    return (
        <>
            <main className="main relative overflow-x-clip">
                <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                <HeroSection />
            </main>

            <main className="main relative overflow-x-clip md:min-h-fit!">
                <MeetOurExpertSection />
            </main>

            <main className="main bg-secondary/20 relative">
                <VisionSection />
            </main>

            <main className="main md:min-h-fit!">
                <CommitmentToPatientSection />
            </main>

            <main className="main overflow-hidden py-8">
                <HealthRequirementSection />
            </main>

            <main className="main relative overflow-hidden py-12">
                <ConnectToSyncSection />

                <DecorImage
                    src="/images/home-decore-tree-branch.png"
                    alt="Decor Butterfly"
                    size={[400, 400]}
                    className="top-0 right-0 translate-x-1/6 -translate-y-1/4"
                />
                <DecorImage
                    src="/images/home-decore-5.png"
                    alt="Home Decore 5"
                    size={[450, 450]}
                    className="absolute right-0 bottom-0 translate-1/4 opacity-60 sm:translate-1/10"
                />
            </main>

            <main className="main bg-primary py-8 md:min-h-0">
                <Footer />
            </main>
        </>
    );
}

function HeroSection() {
    return (
        <section className="section flex flex-col gap-4 py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="flex flex-col items-start gap-2 md:items-start">
                <h2 className="relative inline text-3xl font-bold md:text-5xl">
                    SyNC Positive Psychatry
                    <DecorImage
                        src="/images/decor-smile.png"
                        alt="Decor Smile"
                        size={[42, 42]}
                        className="top-0 right-0 -translate-y-full md:translate-x-full"
                    />
                </h2>

                <p className="text-muted text-justify text-sm md:text-lg">
                    103-C, 30th Cross Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560070, India
                </p>
            </div>

            <div className="flex grow flex-col justify-center">
                <div className="grid-row-4 grid grow auto-rows-fr grid-cols-1 gap-8 py-4 md:grid-cols-2 md:grid-rows-2 [&_img]:overflow-hidden [&>div]:rounded-2xl">
                    <div className="relative row-span-2">
                        <Image src="/images/about-hero-1.jpg" alt="Hero Thumbnail" fill className="rounded-2xl object-cover" />

                        <DecorImage
                            src="/images/decor-plant.png"
                            alt="Decor Plant"
                            size={[286, 286]}
                            className="md:Translate-y-1/8 bottom-0 left-0 z-0 -translate-x-1/2 translate-y-1/4 scale-50"
                        />
                    </div>
                    <div className="relative grow">
                        <Image src="/images/about-hero-2.jpg" alt="Hero Thumbnail" fill className="rounded-2xl object-cover" />
                        <DecorImage
                            src="/images/decor-highlight-1.png"
                            alt="Decor Highlight"
                            size={[52, 52]}
                            className="top-0 right-0 translate-x-3/4 -translate-y-3/4"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h2 className="relative w-fit text-xl md:text-3xl">
                            About the clinic
                            <DecorImage
                                src="/images/decor-love-primary.png"
                                alt="Decor Love"
                                size={[32, 32]}
                                className="top-0 right-0 translate-x-full md:-translate-y-full"
                            />
                        </h2>
                        <p className="text-muted text-justify text-sm md:text-lg">
                            Sync Positive Psychiatry is a place where one comes to align and become the best version of themselves. Sync
                            stands for Synergise, to connect and align your body, mind, and spirit so that you can be ready when the
                            universe comes knocking on your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MeetOurExpertSection() {
    return (
        <section className="section flex flex-col items-center py-8">
            <div className="relative flex items-center gap-2">
                <h2 className="text-xl font-bold md:text-3xl">Meet our</h2>
                <div className="bg-primary rounded-sm p-2">
                    <h2 className="text-xl font-bold md:text-3xl">expert doctors</h2>
                </div>
                <DecorImage
                    src="/images/decor-love-primary.png"
                    alt="Decor Love"
                    size={[42, 42]}
                    className="top-0 -left-4 -translate-x-full rotate-y-180"
                />
            </div>

            <div className="p-12 text-5xl font-bold tracking-wide">TODO</div>
        </section>
    );
}

function VisionSection() {
    const whyChooseUsList = [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
    ];
    return (
        <section className="section grid min-h-svh grid-flow-col grid-cols-1 grid-rows-6 gap-6 py-12 md:grid-cols-3 md:grid-rows-2 [&>div]:overflow-hidden [&>div]:rounded-2xl">
            <div className="relative row-span-2">
                <Image src="/images/about-vision.jpg" alt="Hero Vision" fill className="object-cover" />
            </div>
            <div className="bg-primary-light flex flex-col items-start justify-start gap-4 p-6">
                <h2 className="text-xl font-bold md:text-3xl">Mission</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquet bibendum lorem rhoncus eleifend porttitor. Vivamus quis quam donec ipsum
                    nibh quis eget habitasse
                </p>
            </div>
            <div className="bg-primary flex flex-col items-start justify-start gap-4 p-6">
                <h2 className="text-xl font-bold md:text-3xl">Vision</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquet bibendum lorem rhoncus eleifend porttitor. Vivamus quis quam donec ipsum
                    nibh quis eget habitasse
                </p>
            </div>
            <div className="row-span-2 flex flex-col items-start justify-between gap-4 bg-white p-6">
                <div className="flex flex-col items-start justify-start gap-4">
                    <h2 className="text-xl font-bold md:text-3xl">Why Choose Us?</h2>

                    <ul className="flex list-none flex-col items-start gap-3">
                        {whyChooseUsList.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm md:text-lg">
                                <CircleCheck size={14} className="stroke-secondary-light" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <BookAppointmentButton className="place-self-end" />
            </div>
        </section>
    );
}

function CommitmentToPatientSection() {
    const commitments = [
        {
            title: "Patient Safety",
            description: "We prioritize patient safety and support, treating every patient like a family member.",
            imagePath: "/images/about-hero-1.jpg",
        },
        {
            title: "Ethical Care",
            description: "If we wouldn’t prescribe the same treatment to our own family, we know we need to rethink our approach.",
            imagePath: "/images/about-hero-1.jpg",
        },
        {
            title: "Empathetic Approach",
            description: "As professionals who have been in our clients' shoes, we deeply understand their experiences and needs.",
            imagePath: "/images/about-hero-1.jpg",
        },
    ];
    return (
        <section className="section flex flex-col gap-6 py-8">
            <div className="flex w-full flex-col gap-4">
                <h2 className="relative w-full text-3xl tracking-normal break-normal md:text-5xl">
                    Commitment to <br className="md:hidden" />
                    <span className="relative">
                        Patient Care
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="100"
                            className="bottom-0 left-0 -z-10 translate-y-1/2 object-contain"
                        />
                    </span>
                </h2>
                <p>Lorem ipsum dolor sit amet consecetetur.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {commitments.map((commitment, index) => (
                    <CommitmentCard key={index} {...commitment} />
                ))}
            </div>
        </section>
    );
}
