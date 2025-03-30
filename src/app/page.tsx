import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import DecorImage from "@/components/prefabs/decor-image";
import ExportServiceCard from "@/components/prefabs/export-service-card";
import Header from "@/components/prefabs/header";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay, Quote } from "lucide-react";
import Image from "next/image";

import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import Footer from "@/components/prefabs/footer";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import VibeSection from "@/components/prefabs/vibes-section";

export default function HomePage() {
    return (
        <>
            <main className="main relative">
                <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                <HeroSection />
            </main>

            <main className="main bg-secondary/20 relative overflow-hidden">
                <FoundersNoteSection />

                <DecorImage
                    src="/images/decor-butterfly-large.png"
                    alt="Decor Butterfly"
                    size={[400, 400]}
                    className="right-0 bottom-0 translate-x-1/2 -rotate-45"
                />
            </main>

            <main className="main py-8">
                <ExpertServicesSection />
            </main>

            <main className="main bg-secondary/20 md:min-h-fit!">
                <QuoteSection />
            </main>

            <main className="main overflow-hidden py-8">
                <HealthRequirementSection />
            </main>

            <main className="main bg-secondary/20 md:min-h-fit!">
                <VibeSection />
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
        <section className="section flex flex-col py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="flex grow flex-col items-center justify-normal gap-6 md:flex-row md:justify-between">
                <div className="flex flex-col gap-2 text-center md:max-w-1/2 md:gap-4 md:text-start">
                    <h3 className="text-lg font-normal tracking-wide md:text-2xl">
                        Come find your <b>best version</b> at
                    </h3>
                    <h2 className="text-3xl font-bold md:text-5xl">
                        SyNC <span className="text-accent">Positive</span> <br /> Psychatry Foundation
                    </h2>
                    <h5 className="text-sm font-bold opacity-80 md:text-lg">A holistic approach to your health.</h5>
                    <p className="text-muted text-justify text-sm md:text-lg">
                        We pioneer in providing services for optimizing your brain health like no one does. A well-rounded team of
                        Psychiatrists and Psychologists, each carefully trained and handpicked to best cater to your needs.
                    </p>
                    <BookAppointmentButton />
                </div>

                <div className="relative aspect-6/5 h-full w-full">
                    <Image src="/images/home-hero-bg.jpg" alt="Hero Thumbnail" fill className="hero-video object-cover" />
                    <Button variant="secondary" className="text-background absolute right-0 bottom-0 w-32">
                        <CirclePlay size={16} /> Watch
                    </Button>
                </div>
            </div>
        </section>
    );
}

function FoundersNoteSection() {
    return (
        <section className="section flex flex-col items-center justify-center gap-2 py-8 md:min-h-dvh">
            <h2 className="relative text-3xl font-bold italic md:text-5xl">
                Hear From Our Founder
                <DecorImage
                    src="/images/decor-highlight.png"
                    alt="Decor Highlight"
                    size={[12, 12]}
                    className="top-0 left-1/4 -translate-y-full"
                />
                <DecorImage
                    src="/images/decor-highlight.png"
                    alt="Decor Highlight"
                    size={[12, 12]}
                    className="bottom-0 left-3/4 translate-y-full rotate-180"
                />
            </h2>
            <p className="text-muted text-center text-sm md:pb-6 md:text-lg">
                We pioneer in providing services for optimizing
                <br />
                your brain health like no one does.
            </p>
            <div className="relative mt-4 aspect-5/3 w-full md:w-2/3">
                <DecorImage
                    src="/images/decor-new.png"
                    alt="Decor New"
                    size={[44, 44]}
                    className="-translate-x-1/2 -translate-y-full md:-translate-full"
                />
                <Image src="/images/home-video.jpg" alt="Hero Thumbnail" fill className="rounded-2xl object-cover" />
            </div>
        </section>
    );
}

function ExpertServicesSection() {
    const cardDetails = [
        {
            imagePath: "/images/home-service-consultation.jpg",
            title: "Consultation",
            description:
                "Caring for Adults with Compassion and Professionalism. Reclaim your mental health and wellbeing with Adult Psychiatry.",
        },
        {
            imagePath: "/images/home-service-consultation.jpg",
            title: "Psychiatric consultations",
            description:
                "Caring for Adults with Compassion and Professionalism. Reclaim your mental health and wellbeing with Adult Psychiatry.",
        },
        {
            imagePath: "/images/home-service-consultation.jpg",
            title: "Assessment and Diagnosis",
            description: "Managing ADHD - Unlock Your Potential. Discover solutions for a happier, healthier lifestyle with Adult ADHD.",
        },
        {
            imagePath: "/images/home-service-consultation.jpg",
            title: "Individual counseling and therapy",
            description: "Helping young minds to reach their full potential. Caring for Our Kids’ Minds, Now and Into the Future. ",
        },
        {
            imagePath: "/images/home-service-consultation.jpg",
            title: "Adhd group coaching sessions",
            description: "Helping young minds to reach their full potential. Caring for Our Kids’ Minds, Now and Into the Future. ",
        },
        {
            imagePath: "/images/home-service-consultation.jpg",
            title: "Book an Appointment",
            isBookAppointment: true,
        },
    ];

    return (
        <section className="section flex flex-col items-center gap-12 md:gap-16">
            <div className="flex items-center gap-4">
                <div className="bg-primary rounded-sm p-2">
                    <h2 className="text-xl font-bold md:text-3xl">Expert Services</h2>
                </div>
                <h2 className="relative text-xl font-bold md:text-3xl">
                    - At SyNC
                    <DecorImage
                        src="/images/decor-love.png"
                        alt="Decor Love"
                        size={[24, 24]}
                        className="top-0 right-0 translate-x-full -translate-y-full"
                    />
                </h2>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                {cardDetails.map((card, index) => (
                    <ExportServiceCard
                        key={index}
                        imagePath={card.imagePath}
                        title={card.title}
                        description={card.description}
                        isBookAppointment={card.isBookAppointment}
                    />
                ))}
            </div>

            <div className="flex flex-col-reverse items-center gap-4 md:flex-row">
                <div className="relative flex flex-col gap-2 text-center md:max-w-1/2 md:gap-4 md:text-start">
                    <Button variant="outline" className="hover:bg-background w-fit rounded-full">
                        Why Us?
                    </Button>
                    <h2 className="text-xl md:text-3xl">We Help to Get Solutions</h2>
                    <p className="text-muted text-justify text-sm md:text-lg">
                        We don&apos;t believe seeking help or support makes you mentally ill or signifies a disability. All of us need a
                        nudge sometimes. And more importantly, we have been there in your position as a client and patient, so we know what
                        it feels like. With an exceptional team of trained mental health professionals who know what it means to be in your
                        shoes, we will provide you the best care, with proven results.
                    </p>
                    <Button className="mt-2 w-fit rounded-xs">
                        Lear More <ArrowUpRight />
                    </Button>

                    <DecorImage src="/images/decor-smile.png" alt="Decor Smile" size={[28, 28]} className="bottom-0 left-1/3" />

                    <DecorImage
                        src="/images/decor-butterfly.png"
                        alt="Decor Butterfly"
                        size={[44, 44]}
                        className="bottom-0 left-3/4 translate-y-full"
                    />
                </div>

                <div className="relative h-fit w-full grow">
                    <div className="pb-26 pl-16">
                        <div className="relative aspect-5/4 h-full w-full">
                            <Image
                                src="/images/home-why-us.jpg"
                                alt="Hero Thumbnail"
                                fill
                                className="right-0 left-0 rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    <div className="to-secondary from-secondary-light md:2-96 absolute bottom-0 left-0 z-10 w-68 rounded-2xl bg-linear-to-r p-8 text-white md:w-82">
                        <h4 className="pb-2 text-lg font-bold">Our mission is simple</h4>
                        <p className="text-sm md:text-sm">
                            We will help you get re-connected to your best self and lead a happy and meaningful life.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
                <Button className="flex h-full w-full flex-col items-center justify-start">
                    <h4 className="text-6xl lg:text-8xl">10+</h4>
                    <p className="text-wrap">Certified Specialists.</p>
                </Button>

                <Button className="flex h-full flex-col items-center justify-start">
                    <h4 className="text-6xl lg:text-8xl">10k+</h4>
                    <p className="text-wrap">Satisfied Patients World-wide</p>
                </Button>

                <Button className="flex h-full flex-col items-center justify-start">
                    <h4 className="text-6xl lg:text-8xl">100+</h4>
                    <p className="text-wrap">Advanced Diagnostics Performed Daily</p>
                </Button>
            </div>
        </section>
    );
}

function QuoteSection() {
    return (
        <section className="section flex flex-col items-center gap-6 py-8 md:flex-row">
            <div className="relative aspect-3/2 h-fit w-full grow md:m-16">
                <Image src="/images/home-quote-img.jpg" alt="Hero Thumbnail" fill className="right-0 left-0 rounded-2xl object-cover" />
            </div>

            <div className="flex w-full grow flex-col justify-center gap-4 md:max-w-1/2">
                <Quote className="fill-foreground size-16" />
                <p className="relative">
                    Taking inspiration directly from the founders of Positive Psychology Abraham Maslow and Martin Seligman, we believe in
                    human greatness and the ability of each person to realize their best self. We will support you to live your life to the
                    fullest.
                    <DecorImage
                        src="/images/decor-underline.png"
                        alt="Decor Smile"
                        size={[240, 240]}
                        className="bottom-0 left-0 translate-y-2/3"
                    />
                </p>
                <Button className="mt-2 w-fit">SyNC Positive.</Button>
            </div>
        </section>
    );
}
