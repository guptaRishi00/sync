import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import DecorImage from "@/components/prefabs/decor-image";
import ExportServiceCard from "@/components/prefabs/export-service-card";
import Header from "@/components/prefabs/header";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, Quote } from "lucide-react";
import Image from "next/image";

import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import FeedbackSection from "@/components/prefabs/feedback-section";
import Footer from "@/components/prefabs/footer";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import TestimonialsSection from "@/components/prefabs/testimonials-section";
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
                    size={[440, 440]}
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

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

                <TestimonialsSection />

                <FeedbackSection />

                <JoinNewsLetter />

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

            <div className="fixed right-12 bottom-12 hidden items-end justify-start gap-4">
                <BookAppointmentButton className="shadow" />
                <Button
                    variant="default"
                    size="icon"
                    className="bg-green-500 fill-green-500 stroke-white stroke-3 shadow hover:bg-green-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                    </svg>
                </Button>
            </div>

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
                    <h3 className="font-popins text-xl md:text-3xl">
                        Come find your <b>best version</b> at
                    </h3>
                    <h2 className="font-popins text-3xl font-semibold md:text-5xl">
                        SyNC <span className="text-accent">Positive</span> <br /> Psychatry Foundation
                    </h2>
                    <h5 className="font-popins text-sm font-medium opacity-80 md:text-lg">A holistic approach to your health.</h5>
                    <p className="text-muted font-popins text-justify text-sm md:text-lg">
                        We pioneer in providing services for optimizing your brain health like no one does. A well-rounded team of
                        Psychiatrists and Psychologists, each carefully trained and handpicked to best cater to your needs.
                    </p>
                    <BookAppointmentButton />
                </div>
                <div className="relative aspect-6/5 h-full w-full">
                    <Image src="/images/home-hero-bg.jpg" alt="Hero Thumbnail" fill className="hero-video object-cover" />
                    <Button
                        variant="secondary"
                        className="from-secondary-light to-secondary text-background absolute right-0 bottom-0 flex bg-linear-to-r px-12 py-8 text-lg"
                    >
                        <div className="bg-background grid h-fit place-items-center rounded-full p-2">
                            <Play className="fill-foreground stroke-foreground" />
                        </div>
                        Watch
                    </Button>
                </div>
            </div>
        </section>
    );
}

function FoundersNoteSection() {
    return (
        <section className="section flex flex-col items-center justify-center gap-2 py-8 md:min-h-dvh">
            <h2 className="font-popins relative text-3xl font-semibold italic md:text-5xl">
                Hear From Our Founder
                <DecorImage
                    src="/images/decor-highlight.png"
                    alt="Decor Highlight"
                    size={[16, 16]}
                    className="top-0 left-1/4 -translate-y-full"
                />
                <DecorImage
                    src="/images/decor-highlight.png"
                    alt="Decor Highlight"
                    size={[16, 16]}
                    className="bottom-0 left-3/4 translate-y-full rotate-180"
                />
            </h2>
            <p className="text-muted font-popins text-center text-sm md:pb-6 md:text-lg">
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
            <div className="font-popins flex items-center gap-4 text-2xl font-semibold md:text-4xl">
                <div className="from-primary-light to-primary rounded-sm bg-linear-to-r p-4">
                    <h2 className="">Expert Services</h2>
                </div>
                <h2 className="relative">
                    - At SyNC
                    <DecorImage
                        src="/images/decor-love.png"
                        alt="Decor Love"
                        size={[24, 24]}
                        className="top-0 right-0 translate-x-full -translate-y-full"
                    />
                </h2>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
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
                    <Button
                        variant="outline"
                        className="hover:bg-background border-primary font-inter w-fit rounded-full bg-white font-normal"
                    >
                        Why Us?
                    </Button>
                    <h2 className="font-inter text-2xl font-semibold md:text-4xl">We Help to Get Solutions</h2>
                    <p className="text-muted font-inter text-justify text-sm font-normal md:text-lg">
                        We don&apos;t believe seeking help or support makes you mentally ill or signifies a disability. All of us need a
                        nudge sometimes. And more importantly, we have been there in your position as a client and patient, so we know what
                        it feels like. With an exceptional team of trained mental health professionals who know what it means to be in your
                        shoes, we will provide you the best care, with proven results.
                    </p>
                    <Button className="font-inter mt-2 w-fit rounded-xs px-8 py-6 text-lg font-medium">
                        Lear More <ArrowUpRight />
                    </Button>

                    <DecorImage src="/images/decor-smile.png" alt="Decor Smile" size={[34, 34]} className="bottom-0 left-1/3" />

                    <DecorImage
                        src="/images/decor-butterfly.png"
                        alt="Decor Butterfly"
                        size={[58, 58]}
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

                    <div className="to-secondary from-secondary-light absolute bottom-0 left-0 z-10 w-68 rounded-2xl bg-linear-to-r p-8 text-white md:w-82 md:gap-16">
                        <h4 className="font-inter pb-2 text-lg font-extrabold md:text-3xl">Our mission is simple</h4>
                        <p className="font-inter text-sm font-normal md:text-sm">
                            We will help you get re-connected to your best self and lead a happy and meaningful life.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
                <Button className="flex h-44 w-full flex-col items-center justify-center rounded-2xl">
                    <h4 className="font-sora text-5xl font-bold lg:text-7xl">10+</h4>
                    <p className="font-popins text-lg font-normal text-wrap">Certified Specialists.</p>
                </Button>

                <Button className="flex h-44 flex-col items-center justify-center rounded-2xl">
                    <h4 className="font-sora text-5xl font-bold lg:text-7xl">10k+</h4>
                    <p className="font-popins text-lg font-normal text-wrap">Satisfied Patients World-wide</p>
                </Button>

                <Button className="flex h-44 flex-col items-center justify-center rounded-2xl">
                    <h4 className="font-sora text-5xl font-bold lg:text-7xl">100+</h4>
                    <p className="font-popins text-lg font-normal text-wrap">Advanced Diagnostics Performed Daily</p>
                </Button>
            </div>
        </section>
    );
}

function QuoteSection() {
    return (
        <section className="section flex flex-col items-center gap-6 py-8 md:flex-row">
            <div className="relative aspect-519/352 h-fit w-full grow md:m-16">
                <Image src="/images/home-quote-img.jpg" alt="Hero Thumbnail" fill className="right-0 left-0 rounded-2xl object-cover" />
            </div>

            <div className="flex w-full grow flex-col justify-center gap-8 md:max-w-1/2">
                <Quote className="fill-foreground size-14" />
                <p className="font-popins relative text-lg font-medium">
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
                <Button className="font-inter mt-2 w-fit font-medium">SyNC Positive</Button>
            </div>
        </section>
    );
}
