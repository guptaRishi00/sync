import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import DecorImage from "@/components/prefabs/decor-image";
import ExportServiceCard from "@/components/prefabs/export-service-card";
import Header from "@/components/prefabs/header";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import EvaluationMethodologiesSection from "@/components/prefabs/evalidation-methodologies-section";
import FeedbackSection from "@/components/prefabs/feedback-section";
import Footer from "@/components/prefabs/footer";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import LearnMoreNavButton from "@/components/prefabs/learn-more-nav-button";
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
                    size={[230, 230]}
                    className="right-0 bottom-0 translate-x-1/2 -rotate-45"
                />
            </main>

            <main className="main flex flex-col overflow-hidden py-8">
                <EvaluationMethodologiesSection />
            </main>

            <main className="main py-8">
                <ExpertServicesSection />
            </main>

            <main className="main bg-secondary/20 md:min-h-fit!">
                <CommonQuoteSection />
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
                    size={[600, 600]}
                    className="top-0 right-0 translate-x-1/6 -translate-y-1/3 opacity-70"
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
                <div className="flex flex-col gap-4 text-start md:max-w-1/2 md:gap-5 md:pr-16">
                    <h3 className="font-popins text-xl md:text-3xl">
                        Come find your <b>best version </b> at
                    </h3>
                    <h2 className="font-popins text-3xl font-semibold md:text-5xl md:leading-18">
                        SyNC <span className="text-accent">Positive</span>
                        <br />
                        Psychiatry Foundation.
                    </h2>
                    <h5 className="font-popins mb-2 text-sm font-medium opacity-80 md:text-lg">A holistic approach to your well-being.</h5>
                    <p className="text-muted font-popins mb-4 text-justify text-sm md:text-lg">
                        SyNC Positive Psychiatry is a space to become the best version of yourself. SyNC - To synergize, connect, and align
                        your mind, body, emotions, and energy. We guide you on this journey for you to always be prepared when the universe
                        comes knocking.
                    </p>
                    <BookAppointmentButton />
                </div>
                <div className="relative aspect-5/5 h-full w-full">
                    <Image src="/images/home-hero-bg.jpg" alt="Hero Thumbnail" fill className="hero-video object-cover" />
                    <Button
                        variant="secondary"
                        className="from-secondary-light to-secondary text-background absolute right-0 bottom-0 flex gap-2 rounded-3xl bg-linear-to-br px-8 py-10 text-lg"
                    >
                        <div className="bg-background grid h-fit scale-120 place-items-center rounded-full p-2">
                            <Play className="fill-foreground stroke-foreground" />
                        </div>
                        {" "}
                        <span>Watch Now</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function FoundersNoteSection() {
    return (
        <section className="section flex flex-col items-center justify-center gap-2 py-8 md:min-h-dvh">
            <h2 className="font-popins relative mb-4 text-3xl font-semibold italic md:text-5xl">
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
            <p className="text-muted font-popins text-center text-sm md:pb-6 md:text-xl">Optimizing brain health like never before.</p>
            <div className="relative mt-4 aspect-1920/1080 w-full md:w-2/3">
                <DecorImage
                    src="/images/decor-new.png"
                    alt="Decor New"
                    size={[44, 44]}
                    className="-translate-x-1/2 -translate-y-full md:-translate-full"
                />

                <video controls preload="none" className="h-full overflow-hidden rounded-2xl object-cover" poster="/images/home-video.jpg">
                    <source src="/videos/what is sync yt.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

function ExpertServicesSection() {
    const cardDetails = [
        {
            imagePath: "/images/decor-export-service-1.png",
            title: "Consultations",
            description: "Discuss your needs with a professional and learn about your care options.",
        },
        {
            imagePath: "/images/decor-export-service-2.png",
            title: "Individual Counseling & Therapy",
            description: "A safe and empowering space to navigate life’s journey with guidance.",
        },
        {
            imagePath: "/images/decor-export-service-3.png",
            title: "Adhd Group Coaching Sessions",
            description: "Develop resilience, organization, and management skills in a shared group setting.",
        },
        {
            imagePath: "/images/decor-export-service-4.png",
            title: "Assessment & Diagnosis",
            description:
                "A thoughtful conversation to explore your experiences, uncover their origins, and understand their impact on your well-being.",
        },
        {
            imagePath: "/images/decor-export-service-5.png",
            title: "Psychiatric Consultations",
            description:
                "Expert psychiatric care for depression, anxiety, addiction, ADHD, neurodivergence, schizophrenia, mood disorders, and more.",
        },
        {
            imagePath: "/images/decor-export-service-1.png",
            title: "Book an Appointment",
            isBookAppointment: true,
        },
    ];

    return (
        <section className="section flex flex-col items-center gap-12 pt-4 md:gap-16">
            <div className="font-popins flex items-center gap-4 text-xl font-semibold md:text-4xl">
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

            <div className="my-6 flex flex-col-reverse items-start gap-4 md:flex-row">
                <div className="relative mt-8 flex flex-col gap-6 pr-12 text-center md:max-w-1/2 md:text-start">
                    <Button
                        variant="outline"
                        className="hover:bg-background border-primary font-inter w-fit rounded-full bg-white font-normal"
                    >
                        WHY US?
                    </Button>
                    <h2 className="font-inter text-2xl font-semibold md:text-4xl">Together, We Grow!!</h2>
                    <p className="text-foreground font-inter text-justify text-sm font-normal md:text-lg">
                        We trust that seeking help is a sign of strength, a truth we understand from our own experiences. We partner with
                        you to reconnect with your best self and achieve a happy, meaningful life. We are here to help because everyone
                        needs a nudge sometimes.
                    </p>

                    <LearnMoreNavButton />
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

                    <div className="to-secondary from-secondary-light absolute bottom-0 left-0 z-10 w-68 rounded-2xl bg-linear-to-r px-8 py-12 text-white md:w-122 md:gap-16">
                        <h4 className="font-inter pb-4 text-lg font-extrabold md:text-2xl">Rejuvenate. Reconnect. Recharge.</h4>
                        <p className="font-inter text-sm font-normal md:text-sm">
                            We help you get re-connected to your best self and lead a happy and meaningful life.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-8 grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
                <Button className="flex h-58 w-full flex-col items-center justify-center rounded-2xl">
                    <h4 className="font-sora text-5xl font-bold lg:text-7xl">10+</h4>
                    <p className="font-popins text-lg font-normal text-wrap">Certified Specialists.</p>
                </Button>

                <Button className="flex h-58 flex-col items-center justify-center rounded-2xl">
                    <h4 className="font-sora text-5xl font-bold lg:text-7xl">10k+</h4>
                    <p className="font-popins text-lg font-normal text-wrap">Satisfied Patients World-wide</p>
                </Button>

                <Button className="flex h-58 flex-col items-center justify-center rounded-2xl">
                    <h4 className="font-sora text-5xl font-bold lg:text-7xl">100+</h4>
                    <p className="font-popins text-lg font-normal text-wrap">Advanced Diagnostics Performed</p>
                </Button>
            </div>
        </section>
    );
}
