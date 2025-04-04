import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default async function ServicesPage() {
    return (
        <>
            <main className="main relative overflow-x-clip">
                <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                <HeroSection />
            </main>

            <main className="main flex flex-col overflow-hidden py-8">
                <EvaluationMethodologiesSection />
            </main>

            <main className="main bg-secondary/20 flex flex-col">
                <ConsultationSection />
            </main>

            <main className="main flex flex-col">
                <PsychiatricConsultationsSection />
            </main>

            <main className="main bg-secondary/20 flex flex-col">
                <CounsellingAndPsychotherapy />
            </main>

            <main className="main overflow-hidden py-8">
                <HealthRequirementSection />
            </main>

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

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

            <div className="md:grow"></div>

            <div className="grid grow grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1">
                <div className="flex grow flex-col gap-6">
                    <div className="">
                        <h2 className="relative inline text-3xl font-bold md:text-5xl">
                            What we do
                            <br />
                            At{" "}
                            <span className="text-accent relative">
                                SyNC!
                                <DecorImage
                                    src="/images/decor-butterfly-2.png"
                                    alt="Decor Smile"
                                    size={[60, 60]}
                                    className="right-0 bottom-0 translate-x-full"
                                />
                            </span>
                        </h2>
                    </div>
                    <div className="bg-primary relative grow rounded-2xl p-8">
                        <h2 className="text-xl font-bold md:text-3xl">Mission</h2>
                        <p className="z-50 md:pb-34">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>

                        <DecorImage
                            src="/images/home-decore-3.png"
                            alt="Decor Highlight"
                            size={[120, 120]}
                            className="right-0 bottom-0 z-10 translate-x-1/3"
                        />
                    </div>
                </div>
                <div className="relative h-auto w-full">
                    <Image src={"/images/services-hero.jpg"} alt="Hero Thumbnail" fill className="h-full w-full rounded-2xl object-cover" />
                </div>
            </div>

            <div className="md:grow"></div>
        </section>
    );
}

function EvaluationMethodologiesSection() {
    const content = [
        {
            section: "screening",
            title: "Screening",
            description:
                "(Screening Content) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
            points: [
                "Lorem ipsum dolor sit amet, consectetuer",
                "Aliquam tincidunt mauris eu risus.",
                "Vestibulum auctor dapibus neque.",
                "Nunc dignissim risus id metus.",
            ],
        },
        {
            section: "assessments",
            title: "Assessments",
            description:
                "(Assessment Content) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
            points: [
                "Lorem ipsum dolor sit amet, consectetuer",
                "Aliquam tincidunt mauris eu risus.",
                "Vestibulum auctor dapibus neque.",
                "Nunc dignissim risus id metus.",
            ],
        },
        {
            section: "diagnosis",
            title: "Diagnosis",
            description:
                "(Diagnosis Content) Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
            points: [
                "Lorem ipsum dolor sit amet, consectetuer",
                "Aliquam tincidunt mauris eu risus.",
                "Vestibulum auctor dapibus neque.",
                "Nunc dignissim risus id metus.",
            ],
        },
    ];

    return (
        <section className="section relative flex grow flex-col items-center justify-center gap-6 md:gap-12">
            <h2 className="relative text-3xl font-bold md:text-5xl">
                Our Evaluation <br className="md:hidden" />
                <span className="bg-primary rounded-sm px-1">Methodologies</span>
            </h2>
            <p className="text-muted text-center text-sm md:text-lg">
                Lorem Ipsum dolor sit amet consectetur Lorem <br /> Ipsum dolor sit amet consectetur
            </p>

            <Tabs defaultValue="screening" className="w-full md:w-146">
                <TabsList className="text-secondary relative mx-auto h-16 bg-white p-3 md:gap-12">
                    {content.map((item) => (
                        <TabsTrigger className="data-[state=active]:bg-primary" value={item.section} key={item.section}>
                            {item.title}
                        </TabsTrigger>
                    ))}

                    <DecorImage
                        src="/images/decor-butterfly.png"
                        alt="Decor Butterfly"
                        size={[44, 44]}
                        className="top-0 left-0 -translate-full"
                    />
                    <DecorImage
                        src="/images/decor-highlight.png"
                        alt="Decor Highlight"
                        size={[12, 12]}
                        className="top-0 right-0 z-20 translate-x-full -translate-y-full rotate-90"
                    />
                </TabsList>
                <div className="p-1"></div>
                {content.map((item) => (
                    <TabsContent
                        key={item.section}
                        value={item.section}
                        className="from-primary-light to-primary relative w-full rounded-2xl bg-linear-90 p-5"
                    >
                        <p className="">{item.description}</p>
                        <ul className="mt-2 list-none space-y-1.5">
                            {item.points.map((point, index) => (
                                <li key={index}>
                                    {index + 1}. {point}
                                </li>
                            ))}
                        </ul>

                        <div className="border-primary absolute bottom-0 left-1/2 w-38 -translate-x-1/2 translate-y-1/2 rounded-2xl border-3 bg-white p-3 text-center">
                            {item.title}
                        </div>

                        <DecorImage
                            src="/images/decor-plant-1.png"
                            alt="Decor Highlight"
                            size={[80, 80]}
                            className="right-0 bottom-0 z-40 translate-y-1/6"
                        />

                        <DecorImage
                            src="/images/decor-butterfly-2.png"
                            alt="Decor Smile"
                            size={[100, 100]}
                            className="border-primary top-1/2 right-0 z-20 translate-x-1/2 -translate-y-1/2 rounded-2xl border-3 bg-white p-4"
                        />

                        <DecorImage
                            src="/images/decor-highlight.png"
                            alt="Decor Highlight"
                            size={[16, 16]}
                            className="bottom left-0 z-20 -translate-x-full translate-y-full -rotate-90"
                        />
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}

function ConsultationSection() {
    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-8 md:gap-12">
            <h2 className="relative text-3xl font-bold md:mb-4 md:text-5xl">
                <span className="bg-primary rounded-sm px-1">Consultation</span>
            </h2>

            <div className="relative mb-10 grid w-full grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-12">
                <div className="relative mr-8 mb-16 aspect-49/50 w-full">
                    <Image
                        src="/images/services-bg-1.jpg"
                        fill
                        sizes="100vw"
                        alt="Service BG"
                        className="z-20 h-full w-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] object-cover"
                    />

                    <DecorImage
                        src="/images/decor-matrix.png"
                        alt="Decor Butterfly"
                        size={[160, 160]}
                        className="right-0 bottom-0 z-10 -translate-x-1/8 translate-y-1/4 stroke-3 md:translate-y-1/2"
                    />
                </div>

                <div className="relative flex flex-col items-start justify-center gap-8">
                    <h2 className="relative text-3xl tracking-normal break-normal md:text-5xl">
                        Consulation
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 translate-y-2/3 object-contain"
                        />
                        <DecorImage
                            src="/images/decor-smile-primary.png"
                            alt="Decor Smile"
                            size={[58, 58]}
                            className="top-0 left-0 -translate-y-full"
                        />
                    </h2>
                    <div className="flex">
                        <p className="inline text-justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="relative ml-6 h-full w-12 md:w-5">
                            <DecorImage
                                src="/images/decor-highlight-3.png"
                                alt="Decor Butterfly"
                                size={[500, 500]}
                                className="top-0 left-0"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <DecorImage
                            src="/images/decor-arrow.png"
                            alt="Decor Butterfly"
                            size={[60, 60]}
                            className="right-0 bottom-0 z-10 translate-x-[120%] stroke-3"
                        />
                        <BookAppointmentButton />
                    </div>
                </div>

                <DecorImage src="/images/decor-butterfly.png" alt="Decor Butterfly" size={[44, 44]} className="top-0 right-0" />
            </div>

            <DecorImage
                src="/images/decor-leaves-1.png"
                alt="Decor Butterfly"
                size={[180, 180]}
                className="invisible bottom-0 left-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}

function PsychiatricConsultationsSection() {
    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-8 md:gap-12">
            <h2 className="relative text-3xl font-bold md:mb-4 md:text-5xl">
                Psychiatric <span className="bg-primary rounded-sm px-1">Consultation</span>
            </h2>

            <div className="mb-10 grid w-full grid-cols-1 md:grid-cols-[60fr_40fr] md:gap-12">
                <div className="relative flex flex-col items-start justify-center gap-8">
                    <h2 className="relative text-3xl tracking-normal break-normal md:text-5xl">
                        Child Psychiatry
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 translate-y-2/3 object-contain"
                        />
                        <DecorImage
                            src="/images/decor-smile-primary.png"
                            alt="Decor Smile"
                            size={[58, 58]}
                            className="top-0 left-0 -translate-y-full"
                        />
                    </h2>
                    <div className="flex">
                        <div className="relative mr-6 h-full w-12 md:w-5">
                            <DecorImage
                                src="/images/decor-highlight-3.png"
                                alt="Decor Butterfly"
                                size={[500, 500]}
                                className="top-0 left-0"
                            />
                        </div>
                        <div>
                            <p className="inline text-justify">
                                Child and adolescent psychiatry is a branch of medicine that focuses on the diagnosis, treatment, and
                                prevention of mental health disorders in children and adolescents. Psychiatrists who specialize in this
                                field are trained to work with young people, ranging from infancy through adolescence, who are experiencing
                                emotional, behavioral, or developmental problems.
                            </p>
                            <div className="relative mt-8 w-fit">
                                <DecorImage
                                    src="/images/decor-arrow.png"
                                    alt="Decor Butterfly"
                                    size={[60, 60]}
                                    className="right-0 bottom-0 z-10 translate-x-[120%] stroke-3"
                                />
                                <BookAppointmentButton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative order-first mr-8 mb-16 aspect-49/50 w-full md:order-last">
                    <Image
                        src="/images/services-bg-2.jpg"
                        fill
                        sizes="100vw"
                        alt="Service BG"
                        className="z-20 h-full w-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] object-cover"
                    />

                    <DecorImage
                        src="/images/decor-matrix.png"
                        alt="Decor Butterfly"
                        size={[160, 160]}
                        className="right-0 bottom-0 z-10 -translate-x-1/8 translate-y-1/4 stroke-3 md:left-0 md:translate-x-1/8 md:translate-y-1/2"
                    />
                </div>
            </div>

            <DecorImage
                src="/images/decor-leaves-1.png"
                alt="Decor Butterfly"
                size={[180, 180]}
                className="invisible right-0 bottom-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}

function CounsellingAndPsychotherapy() {
    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-8 md:gap-12">
            <h2 className="relative text-3xl font-bold md:mb-4 md:text-5xl">
                <span className="bg-primary rounded-sm px-1">Counselling</span> and Psychotherapy
            </h2>

            <div className="relative mb-10 grid w-full grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-12">
                <div className="relative mr-8 mb-16 aspect-49/50 w-full">
                    <Image
                        src="/images/services-bg-1.jpg"
                        fill
                        sizes="100vw"
                        alt="Service BG"
                        className="z-20 h-full w-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] object-cover"
                    />

                    <DecorImage
                        src="/images/decor-matrix.png"
                        alt="Decor Butterfly"
                        size={[160, 160]}
                        className="right-0 bottom-0 z-10 -translate-x-1/8 translate-y-1/4 stroke-3 md:translate-y-1/2"
                    />
                </div>

                <div className="relative flex flex-col items-start justify-center gap-8">
                    <h2 className="relative text-3xl tracking-normal break-normal md:text-5xl">
                        Individual Psychotherapy
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 translate-y-2/3 object-contain"
                        />
                        <DecorImage
                            src="/images/decor-smile-primary.png"
                            alt="Decor Smile"
                            size={[58, 58]}
                            className="top-0 left-0 -translate-y-full"
                        />
                    </h2>
                    <div className="flex">
                        <p className="inline text-justify">
                            A 60-minute session where psychologists take a brief history of your background and identify what struggles you
                            have been going through. By doing so, the psychologist will be able to decide which assessment to administer and
                            which approach to take for treatment. This service is best for people who are starting their mental health
                            journey for the first time at Sync positive.
                        </p>
                        <div className="relative ml-6 h-full w-12 md:w-5">
                            <DecorImage
                                src="/images/decor-highlight-3.png"
                                alt="Decor Butterfly"
                                size={[500, 500]}
                                className="top-0 left-0"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <DecorImage
                            src="/images/decor-arrow.png"
                            alt="Decor Butterfly"
                            size={[60, 60]}
                            className="right-0 bottom-0 z-10 translate-x-[120%] stroke-3"
                        />
                        <BookAppointmentButton />
                    </div>
                </div>

                <DecorImage src="/images/decor-butterfly.png" alt="Decor Butterfly" size={[44, 44]} className="top-0 right-0" />
            </div>

            <DecorImage
                src="/images/decor-leaves-1.png"
                alt="Decor Butterfly"
                size={[180, 180]}
                className="invisible right-0 bottom-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}
