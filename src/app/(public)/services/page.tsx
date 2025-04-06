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

            <main className="main flex flex-col bg-[#AC9D81]/10">
                <ConsultationSection />
            </main>

            <main className="main flex flex-col">
                <PsychiatricConsultationsSection />
            </main>

            <main className="main flex flex-col bg-[#AC9D81]/10">
                <CounsellingAndPsychotherapy />
            </main>

            <main className="main hidden overflow-hidden py-8">
                <HealthRequirementSection />
            </main>

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

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
        <section className="section relative flex flex-col gap-4 py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="md:grow"></div>

            <div className="grid grow grid-cols-1 grid-rows-2 gap-12 md:grid-cols-2 md:grid-rows-1">
                <div className="flex grow flex-col gap-10">
                    <div className="">
                        <h2 className="font-popins relative inline text-5xl leading-24 font-semibold md:text-7xl">
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
                        <h2 className="font-popins hidden text-3xl font-semibold md:text-5xl">Lorem Ipsum</h2>
                        <p className="font-popins z-50 mt-6 text-2xl leading-10 font-medium md:pb-24">
                            We unlock the true brilliance of your mind and guide you toward your best self. Our first step in developing
                            personalised care for every individual is understanding and discovering their inner self. We back our reflection
                            by drawing upon the guided discovery that aligns with your essence. Our dedicated team ensures personalized and
                            effective care.
                        </p>

                        <DecorImage
                            src="/images/home-decore-3.png"
                            alt="Decor Highlight"
                            size={[200, 200]}
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
    // const _content = [
    //     {
    //         section: "screening",
    //         title: "Your Journey",
    //         description:
    //             "This 60-minute talk is designed to capture your genetic profile, neurobiological profile, and life story- in simple terms, the ‘hardware and software’ of your being.",
    //         points: ["A session with? A one-on-one session with a Therapist", "Where? Join us at our center or connect online."],
    //     },
    //     {
    //         section: "assessments",
    //         title: "Guided Discovery",
    //         description: "An essential part of the process is to gain an understanding of the individual.",
    //         points: [
    //             "What are these assessments? These check-ins help the therapist understand how you think, feel, and behave.",
    //             "Why are they required?  These assessments capture the nuances of your mind, providing deeper insight for you and the therapist.",
    //         ],
    //     },
    //     {
    //         section: "diagnosis",
    //         title: "Breakthrough",
    //         description:
    //             "This is the moment of clarity in your journey—where patterns, challenges, and strengths come into focus. With this clarity, you and the therapist can optimize a path for your well-being.",
    //         points: [
    //             "What happens here? You gain insight into the ‘why’ behind your thoughts and behaviors.",
    //             "Why is it important? It sets the direction for focused, effective healing.",
    //         ],
    //     },
    // ];

    const content = [
        {
            section: "screening",
            title: "Your Journey",
            description:
                "This 60-minute talk is designed to capture your genetic profile, neurobiological profile, and life story- in simple terms, the ‘hardware and software’ of your being.",
            points: ["A one-on-one session with a Therapist", "Join us at our center or connect online."],
        },
        {
            section: "assessments",
            title: "Guided Discovery",
            description: "An essential part of the process is to gain an understanding of the individual.",
            points: [
                "These check-ins help the therapist understand how you think, feel, and behave.",
                "These assessments capture the nuances of your mind, providing deeper insight for you and the therapist.",
            ],
        },
        {
            section: "diagnosis",
            title: "Breakthrough",
            description:
                "This is the moment of clarity in your journey—where patterns, challenges, and strengths come into focus. With this clarity, you and the therapist can optimize a path for your well-being.",
            points: [
                "You gain insight into the ‘why’ behind your thoughts and behaviors.",
                "It sets the direction for focused, effective healing.",
            ],
        },
    ];

    return (
        <section className="section relative flex grow flex-col items-center justify-center gap-6 md:gap-12">
            <h2 className="font-popins relative text-3xl font-semibold md:text-5xl">
                The Process, <span className="bg-primary rounded-sm px-1">Simplified</span>
            </h2>
            <p className="text-muted font-popins text-center text-sm font-normal md:text-lg">
                Your mental health journey doesn’t have to be overwhelming.
                <br />
                Here’s a simple, structured path to help you understand yourself better and begin healing.
            </p>

            <Tabs defaultValue="screening" className="w-full md:w-146 lg:w-246">
                <TabsList className="text-secondary relative mx-auto h-16 bg-white p-3 md:gap-12">
                    {content.map((item) => (
                        <TabsTrigger
                            className="data-[state=active]:bg-primary font-popins px-8 py-4 text-lg font-medium"
                            value={item.section}
                            key={item.section}
                        >
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
                        className="from-primary-light to-primary font-popins relative w-full rounded-2xl bg-linear-90 p-8 text-2xl md:p-16"
                    >
                        <p className="mb-8">{item.description}</p>
                        <ul className="mt-2 list-none space-y-1.5">
                            {item.points.map((point, index) => (
                                <li key={index}>• {point}</li>
                            ))}
                        </ul>

                        <div className="border-primary absolute bottom-0 left-1/2 w-68 -translate-x-1/2 translate-y-1/2 rounded-2xl border-3 bg-white p-3 text-center">
                            {item.title}
                        </div>

                        <DecorImage
                            src="/images/decor-plant-1.png"
                            alt="Decor Highlight"
                            size={[120, 120]}
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
                <span className="bg-primary font-popins rounded-sm px-4 text-5xl font-semibold">Counseling and Therapy</span>
            </h2>

            <div className="relative mb-10 grid w-full grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-12">
                <div className="relative mr-8 mb-16 aspect-49/50 w-full">
                    <Image
                        src="/images/decor-missin-bg.png"
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
                    <h2 className="font-popins relative hidden text-2xl font-semibold tracking-normal break-normal md:text-4xl">
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 hidden translate-y-2/3 object-contain"
                        />
                    </h2>
                    <DecorImage
                        src="/images/decor-smile-primary.png"
                        alt="Decor Smile"
                        size={[100, 100]}
                        className="top-0 left-0 -translate-y-full"
                    />
                    <div className="flex flex-col">
                        <p className="font-popins inline text-justify text-base font-medium md:leading-7">
                            Personalized mental health support designed to help individuals, couples, and groups navigate emotional
                            challenges, improve communication, and build lasting resilience.
                        </p>
                        <ul className="mt-4">
                            <li className="font-bold">
                                1. Individual Psychotherapy
                                <p className="font-normal">
                                    Explore your thoughts, emotions, and behaviors in a safe, one-on-one space with a licensed therapist to
                                    enhance self-awareness and well-being.
                                </p>
                            </li>
                            <li className="font-bold">
                                2. Marriage and Couples Counselling
                                <p className="font-normal">
                                    Work through relationship challenges and everyday stressors with your partner in a supportive setting
                                    guided by a professional counselor.
                                </p>
                            </li>
                            <li className="font-bold">
                                3. Group Coaching for ADHD
                                <p className="font-normal">
                                    Join a focused, coach-led group to strengthen executive functioning, reduce procrastination, and manage
                                    ADHD-related struggles effectively.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        <DecorImage
                            src="/images/decor-arrow.png"
                            alt="Decor Butterfly"
                            size={[67, 67]}
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
                size={[240, 240]}
                className="invisible bottom-0 left-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}

function PsychiatricConsultationsSection() {
    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-8 md:gap-12">
            <h2 className="font-popins relative text-3xl font-semibold md:mb-4 md:text-5xl">
                Psychiatric <span className="bg-primary rounded-sm px-4">Consultations</span>
            </h2>

            <div className="mb-10 grid w-full grid-cols-1 md:grid-cols-[60fr_40fr] md:gap-12">
                <div className="relative flex flex-col items-start justify-center gap-8">
                    <h2 className="font-popins relative hidden text-2xl font-semibold tracking-normal break-normal md:text-4xl">
                        Child Psychiatry
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 translate-y-2/3 object-contain"
                        />
                    </h2>
                    <DecorImage
                        src="/images/decor-smile-primary.png"
                        alt="Decor Smile"
                        size={[100, 100]}
                        className="top-0 left-0 -translate-y-full"
                    />
                    <div className="flex">
                        <div className="flex flex-col">
                            <p className="font-popins inline text-justify text-base font-medium md:leading-7">
                                Comprehensive psychiatric care tailored to individuals across all life stages—children, adults, and the
                                elderly—focused on diagnosing, treating, and managing a wide range of mental health conditions.
                            </p>
                            <ul className="mt-4">
                                <li className="font-bold">
                                    1. Child Psychiatry
                                    <p className="font-normal">
                                        Specialized support for emotional, behavioral, and developmental issues in children and
                                        adolescents—from early childhood through teenage years.
                                    </p>
                                </li>
                                <li className="font-bold">
                                    2. Adult Psychiatry
                                    <p className="font-normal">
                                        Clinical evaluation and treatment for a wide spectrum of adult mental health concerns, including
                                        anxiety, depression, mood disorders, and more.
                                    </p>
                                </li>
                                <li className="font-bold">
                                    3. Neurodivergence
                                    <p className="font-normal">
                                        Support for conditions like Adult ADHD, OCD, Autism Spectrum Disorder, Dyslexia, and Tourette
                                        Syndrome, recognizing and respecting different ways of thinking and processing.
                                    </p>
                                </li>

                                <li className="font-bold">
                                    4. Eating Disorders and Obesity
                                    <p className="font-normal">
                                        Psychiatric care for disordered eating patterns such as anorexia and bulimia, with an emphasis on
                                        both mental and physical health recovery.
                                    </p>
                                </li>

                                <li className="font-bold">
                                    5. Psychiatry of the Elderly
                                    <p className="font-normal">
                                        Geriatric-focused mental health services to manage conditions like dementia, late-life depression,
                                        anxiety, and substance misuse in older adults.
                                    </p>
                                </li>
                            </ul>
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
                        src="/images/patient-care-bg-2.png"
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
                size={[240, 240]}
                className="invisible right-0 bottom-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}

function CounsellingAndPsychotherapy() {
    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-8 md:gap-12">
            <h2 className="relative text-3xl font-bold md:mb-4 md:text-5xl">
                <span className="bg-primary font-popins rounded-sm px-4 text-5xl font-semibold">Psychological Assessments</span>
            </h2>

            <div className="relative mb-10 grid w-full grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-12">
                <div className="relative mr-8 mb-16 aspect-49/50 w-full">
                    <Image
                        src="/images/decor-export-service-1.png"
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
                    <h2 className="font-popins relative hidden text-2xl font-semibold tracking-normal break-normal md:text-4xl">
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 hidden translate-y-2/3 object-contain"
                        />
                    </h2>
                    <DecorImage
                        src="/images/decor-smile-primary.png"
                        alt="Decor Smile"
                        size={[100, 100]}
                        className="top-0 left-0 -translate-y-full"
                    />
                    <div className="flex flex-col">
                        <p className="font-popins inline text-justify text-base font-medium md:leading-7">
                            Scientifically designed tools to help uncover patterns in your thoughts, emotions, and behavior—offering
                            valuable insights for diagnosis, treatment planning, and personal understanding.
                        </p>
                        <ul className="mt-4">
                            <li className="font-bold">
                                1. Cognitive and Intelligence Testing
                                <p className="font-normal">
                                    Assess intellectual functioning, learning abilities, memory, and problem-solving skills.
                                </p>
                            </li>
                            <li className="font-bold">
                                2. Personality Assessments
                                <p className="font-normal">
                                    Understand personality traits, emotional functioning, and behavioral tendencies that influence your
                                    day-to-day life.
                                </p>
                            </li>
                            <li className="font-bold">
                                3. Neuropsychological Assessments
                                <p className="font-normal">
                                    In-depth evaluation of brain function related to conditions such as ADHD, dementia, or brain injury.
                                </p>
                            </li>

                            <li className="font-bold">
                                4. Emotional and Behavioral Assessments
                                <p className="font-normal">
                                    Identify emotional challenges, mood disorders, or behavioral patterns that may impact personal and
                                    social functioning.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        <DecorImage
                            src="/images/decor-arrow.png"
                            alt="Decor Butterfly"
                            size={[67, 67]}
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
                size={[240, 240]}
                className="invisible bottom-0 left-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}
