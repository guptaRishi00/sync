import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import { Button } from "@/components/ui/button";
import { CirclePlay, Library, Users, Video } from "lucide-react";
import Image from "next/image";

export default async function AcademyPage() {
    return (
        <>
            <main className="main relative overflow-x-clip">
                <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 hidden object-cover opacity-10" />
                <HeroSection />
            </main>

            <main className="main relative overflow-x-clip md:min-h-fit!">
                <WhatToGetSection />
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
        <section className="section relative flex flex-col gap-4 py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="grid grow auto-cols-min grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1">
                <div className="flex h-fit flex-col justify-center gap-6 md:mt-26 md:self-start">
                    <h2 className="relative inline text-3xl font-bold md:text-5xl">
                        Lorem Ipsum dolr Easily & Fun!
                        <br />
                        <span className="text-accent relative">Easily & Fun!</span>
                    </h2>
                    <p className="text-muted text-justify text-sm md:text-lg">
                        Elementa Academy offers a wide variety of chemistry classes and learning materials designed for all levels, from
                        beginner to advanced.
                    </p>

                    <div className="flex gap-2">
                        <Button variant="secondary" className="text-background w-fit">
                            Start Learning
                        </Button>

                        <Button variant="default" size="icon">
                            <CirclePlay />
                        </Button>
                    </div>

                    <DecorImage
                        src="/images/decor-stroke.png"
                        alt="Decor Butterfly"
                        size={[100, 100]}
                        className="relative bottom-0 left-0"
                    />
                </div>

                <div className="relative order-first aspect-5/6 h-fit max-h-[80vh] shrink md:order-last md:grow">
                    <div className="absolute top-1/8 left-1/8 flex flex-col items-start gap-4">
                        <div className="z-10 flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1">
                            <Button variant="default" size="icon" className="rounded-full">
                                <Video className="fill-white stroke-white" />
                            </Button>
                            <div className="mr-4">
                                <small className="text-muted text-sm">Live</small>
                                <h6 className="text-base font-bold">Class</h6>
                            </div>
                        </div>

                        <div className="z-10 flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1">
                            <Button variant="default" size="icon" className="rounded-full bg-[#EE1908]">
                                <Library className="fill-white stroke-white" />
                            </Button>
                            <div className="mr-4">
                                <small className="text-muted text-sm">Learning Resources</small>
                                <h6 className="text-base font-bold">203+</h6>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/3 z-10">
                        <div className="z-10 flex w-fit flex-col items-start gap-2 rounded-3xl bg-white px-3 py-1">
                            <div className="flex items-center gap-2">
                                <Button variant="default" size="icon" className="rounded-full">
                                    <Users className="fill-white stroke-white" />
                                </Button>
                                <div className="mr-4">
                                    <small className="text-muted text-sm">Online Students</small>
                                    <h6 className="text-base font-bold">98</h6>
                                </div>
                            </div>

                            <div className="flex px-2">
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-1.png" alt="User 1" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-2.png" alt="User 2" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-3.png" alt="User 3" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-4.png" alt="User 4" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-5.png" alt="User 5" fill className="h-full w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src="/images/academy-hero.png" alt="Hero Thumbnail" fill className="absolute object-cover" />
                </div>
            </div>

            <DecorImage
                src="/images/decor-table.png"
                alt="Decor Table"
                size={[100, 100]}
                className="bottom-0 left-1/2 md:-translate-x-1/2"
            />
        </section>
    );
}

function WhatToGetSection() {
    return (
        <section className="section flex flex-col gap-8 py-6">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[40fr_60fr] md:gap-16">
                <h2 className="relative inline text-3xl font-bold md:text-5xl">
                    What do you get at <span className="text-accent relative">SyNC Positive Academy?</span>
                </h2>
                <p className="text-muted text-justify text-sm md:text-lg">
                    Elementa Academy offers a wide variety of chemistry classes and learning materials designed for all levels, from
                    beginner to advanced.
                </p>
            </div>

            <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-6 md:grid-cols-4 [&>div]:flex [&>div]:flex-col [&>div]:overflow-hidden [&>div]:rounded-2xl [&>div]:p-8">
                <div className="to-primary from-primary-light col-span-2 items-center bg-gradient-to-r md:col-span-1">
                    <div className="relative mb-8 size-24">
                        <Image src="/images/decor-learning-video.png" alt="User 1" fill className="h-full w-full" />
                    </div>
                    <h6 className="w-full text-left text-base font-bold">Tutorial video</h6>
                    <p className="w-full text-left text-sm">Watch interesting and informative videos to learn various chemistry topics.</p>
                </div>
                <div className="relative col-span-2 bg-gradient-to-r from-white to-white">
                    <div className="relative mb-8 size-24">
                        <Image src="/images/decor-learning-quizzes.png" alt="User 1" fill className="h-full w-full" />
                    </div>
                    <h6 className="w-full text-left text-base font-bold">Discussion forum</h6>
                    <p className="w-1/2 text-left text-sm">
                        Join online discussion forums to exchange ideas with other students and get help from teachers.
                    </p>
                    <DecorImage
                        src="/images/decor-plant.png"
                        alt="Decor Plant"
                        size={[160, 160]}
                        className="absolute right-0 bottom-0 z-10"
                    />
                </div>
                <div className="to-primary-light/50 from-primary-light/60 col-span-2 items-center bg-gradient-to-r md:col-span-1">
                    <div className="relative mb-8 size-24">
                        <Image src="/images/decor-learning-forum.png" alt="User 1" fill className="h-full w-full" />
                    </div>
                    <h6 className="w-full text-left text-base font-bold">Practice and quizzes</h6>
                    <p className="w-full text-left text-sm">Test your understanding with challenging interactive exercises and quizzes.</p>
                </div>

                <div className="to-primary from-primary-light relative col-span-2 bg-gradient-to-r">
                    <div className="relative mb-8 size-24">
                        <Image src="/images/decor-learning-tutor.png" alt="User 1" fill className="h-full w-full" />
                    </div>
                    <h6 className="w-full text-left text-base font-bold">Discussion forum</h6>
                    <p className="w-1/2 text-left text-sm">
                        Join online discussion forums to exchange ideas with other students and get help from teachers.
                    </p>
                    <DecorImage
                        src="/images/decor-plant-2.png"
                        alt="Decor Plant"
                        size={[160, 160]}
                        className="absolute right-0 bottom-0 z-10"
                    />
                </div>
                <div className="to-primary-light/50 from-primary-light/60 relative col-span-2 bg-gradient-to-r">
                    <div className="relative mb-8 size-24">
                        <Image src="/images/decor-learning-material.png" alt="User 1" fill className="h-full w-full" />
                    </div>
                    <h6 className="w-full text-left text-base font-bold">Discussion forum</h6>
                    <p className="w-1/2 text-left text-sm">
                        Join online discussion forums to exchange ideas with other students and get help from teachers.
                    </p>
                    <DecorImage
                        src="/images/decor-plant-3.png"
                        alt="Decor Plant"
                        size={[500, 500]}
                        className="absolute top-0 right-0 z-10"
                    />
                </div>
            </div>
        </section>
    );
}

// Guidance from experienced tutors
// Our team of experienced and professional tutors is ready to help you answer questions and provide the guidance you need.
