import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import DecorImage from "@/components/prefabs/decor-image";
import ExportServiceCard from "@/components/prefabs/export-service-card";
import Header from "@/components/prefabs/header";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { StrapiImage } from "@/components/custom/StrapiImage";

import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import EvaluationMethodologiesSection from "@/components/prefabs/evalidation-methodologies-section";
import FeedbackSection from "@/components/prefabs/feedback-section";
import Footer from "@/components/prefabs/footer";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import LearnMoreNavButton from "@/components/prefabs/learn-more-nav-button";
import Metrics from "@/components/prefabs/metrics";
import TestimonialsSection from "@/components/prefabs/testimonials-section";
import VibeSection from "@/components/prefabs/vibes-section";

import { getHeroSectionData, getHeaderData, getFounderNoteSection } from "@/lib/strapi";

export default async function HomePage() {
    const heroSection = await getHeroSectionData();

    const { background } = heroSection.hero_section;

    return (
        <>
            <main className="main relative">
                <StrapiImage src={background.url} alt="Hero" className="-z-50 object-cover opacity-10" />
                <HeroSection heroSection={heroSection} />
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

async function HeroSection({ heroSection }: any) {
    const { sub_title_one, title, sub_title_two, description, image } = heroSection.hero_section;

    const headerLogo = await getHeaderData();

    console.log(headerLogo.logo.url);

    return (
        <section className="section flex flex-col py-8 md:min-h-screen">
            <div className="mb-8 w-full">
                <Header logoUrl={headerLogo.logo.url} />
            </div>

            <div className="mt-30 flex grow flex-col items-center justify-normal gap-6 md:flex-row md:justify-between">
                <div className="flex flex-col gap-4 text-start md:max-w-1/2 md:gap-5 md:pr-16">
                    <h3 className="font-popins text-xl md:text-3xl">{sub_title_one}</h3>
                    <h2 className="font-popins text-3xl font-semibold md:text-5xl md:leading-tight">
                        {title.split(" ")[0]} <span className="text-accent">{title.split(" ")[1]}</span>
                        <br />
                        {title.split(" ")[2] + " " + title.split(" ")[3]}
                    </h2>
                    <h5 className="font-popins mb-2 text-sm font-medium opacity-80 md:text-lg">{sub_title_two}</h5>
                    <p className="text-muted font-popins mb-4 text-justify text-sm md:text-lg">{description}</p>
                    <BookAppointmentButton />
                </div>
                <div className="relative aspect-square h-full w-full md:w-1/2">
                    <StrapiImage src={image.url} alt={image.url} width={1200} height={800} className="rounded-3xl object-cover" />
                    <Button
                        variant="secondary"
                        className="from-secondary-light to-secondary text-background absolute right-0 bottom-0 hidden gap-2 rounded-3xl bg-gradient-to-br px-8 py-6 text-lg md:flex"
                    >
                        <div className="bg-background grid h-10 w-10 place-items-center rounded-full">
                            <Play className="fill-foreground stroke-foreground" />
                        </div>
                        <span>Watch Now</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}

async function FoundersNoteSection() {
    const res = await getFounderNoteSection();

    console.log("founder section: ", res);

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
            imagePath: "/jpeg/Consultation.jpg",
            title: "Consultations",
            description: "Discuss your needs with a professional and learn about your care options.",
        },
        {
            imagePath: "/jpeg/Individual therapy.jpg",
            title: "Individual Counseling & Therapy",
            description: "A safe and empowering space to navigate life’s journey with guidance.",
        },
        {
            imagePath: "/jpeg/ADHD group coaching.jpg",
            title: "Adhd Group Coaching Sessions",
            description: "Develop resilience, organization, and management skills in a shared group setting.",
        },
        {
            imagePath: "/jpeg/Asessment and diagnosis.jpg",
            title: "Assessment & Diagnosis",
            description:
                "A thoughtful conversation to explore your experiences, uncover their origins, and understand their impact on your well-being.",
        },
        {
            imagePath: "/jpeg/Psychiatric consultations.jpg",
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
                                src="/jpeg/why choose us1.jpg"
                                alt="Hero Thumbnail"
                                fill
                                className="right-0 left-0 rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    <div className="to-secondary from-secondary-light absolute bottom-0 left-0 z-10 w-68 rounded-2xl bg-linear-to-r px-5 py-5 text-white md:w-122 md:gap-16 md:px-8 md:py-8">
                        <h4 className="font-inter pb-4 text-lg font-extrabold md:text-2xl">Rejuvenate. Reconnect. Recharge.</h4>
                        <p className="font-inter text-sm font-normal md:text-sm">
                            We help you get re-connected to your best self and lead a happy and meaningful life.
                        </p>
                    </div>
                </div>
            </div>

            <Metrics />
        </section>
    );
}
