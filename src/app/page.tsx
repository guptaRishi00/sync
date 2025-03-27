import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import DecorImage from "@/components/prefabs/decor-image";
import ExportServiceCard from "@/components/prefabs/export-service-card";
import Header from "@/components/prefabs/header";
import SimpleCard from "@/components/prefabs/simple-card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay, Mail, Quote } from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
                <footer className="section flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-6">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-center text-lg font-bold">© SyNC Positive Psychiatry Foundation | All rights reserved</h4>
                        <p>Powered by Hashigo Technologies</p>
                    </div>
                </footer>
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

function HealthRequirementSection() {
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

function VibeSection() {
    return (
        <section className="section flex flex-col items-center justify-center gap-12 p-8 md:min-h-dvh">
            <div className="relative aspect-8/1 h-8 md:h-16">
                <DecorImage src="/images/decor-vibes.png" alt="Decor New" size={[800, 100]} className="" />
            </div>
            <div className="aspect-5/3 w-4/5 md:w-3/4">
                <Carousel className="h-full">
                    <CarouselContent className="h-full">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card className="h-full py-0">
                                    <CardContent className="relative flex h-full items-center justify-center">
                                        <Image
                                            src={`/images/carousel-img-${index + 1}.jpg`}
                                            alt="Carousel Image"
                                            fill
                                            className="rounded-2xl object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant="default" />
                    <CarouselNext variant="default" />
                </Carousel>
            </div>
        </section>
    );
}

function ConnectToSyncSection() {
    return (
        <section className="section relative flex flex-col items-center gap-12 md:gap-16">
            <div className="bg-background flex items-center gap-4 rounded-2xl px-4">
                <div className="bg-primary rounded-sm p-2">
                    <h2 className="text-xl font-bold md:text-3xl">Connect</h2>
                </div>
                <h2 className="relative text-xl font-bold md:text-3xl">to SyNC</h2>
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
                <div className="embed-map-responsive overflow-hidden rounded-2xl md:rounded-r-none">
                    <div className="embed-map-container">
                        <iframe
                            className="embed-map-frame"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Sync%20positive&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        />
                        <a
                            href="https://sprunkiretake.net"
                            style={{
                                fontSize: "2px!important",
                                color: "gray!important",
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                zIndex: 1,
                                maxHeight: 1,
                                overflow: "hidden",
                            }}
                        >
                            sprunki retake
                        </a>
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: ".embed-map-responsive{position:relative;text-align:right;width:100%;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;}",
                        }}
                    />
                </div>

                <div className="bg-secondary/20 flex flex-col gap-4 rounded-2xl p-8 md:rounded-l-none">
                    <div className="flex gap-4">
                        <Input placeholder="Enter your Name" className="bg-background" size={48} />
                        <Input type="email" placeholder="Enter your Email Address" className="bg-background" />
                    </div>

                    <Input placeholder="Enter your Subject" className="bg-background" />

                    <Textarea placeholder="Message" className="bg-background grow" />

                    <Button className="w-full">Book an Appointment</Button>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <Mail className="fill-primary stroke-background size-16"></Mail>
                    <DecorImage
                        src="/images/decor-highlight-circle-2.png"
                        alt="Decor Highlight Circle 2"
                        size={[180, 180]}
                        className="absolute top-1/2 left-1/2 w-[160%] max-w-none -translate-1/2"
                    />
                </div>
                <h2 className="flex gap-4 text-xl font-bold md:text-3xl">
                    Join
                    <span className="text-secondary-light">SyNC</span>
                    <span className="relative">
                        Newsletter
                        <DecorImage
                            src="/images/decor-highlight-circle-1.png"
                            alt="Decor Highlight Circle 1"
                            size={[120, 120]}
                            className="absolute top-1/2 left-1/2 w-[110%] max-w-none -translate-1/2"
                        />
                    </span>
                </h2>
            </div>

            <div className="flex">
                <Input type="email" placeholder="Enter your Email Address" className="bg-background rounded-r-none" size={58} />
                <Button className="w-fit rounded-l-none">Subscribe</Button>
            </div>
        </section>
    );
}
