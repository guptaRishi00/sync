import DecorImage from "@/components/prefabs/decor-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EvaluationMethodologiesSection() {
    const content = [
        {
            section: "Screening",
            title: "Begin Your Journey",
            description:
                "This 60-minute talk is designed to capture your genetic profile, neurobiological profile, and life story- in simple terms, the ‘hardware and software’ of your being. A session with a therapist, online or in-person, based on your convenience.",
            points: [],
        },
        {
            section: "Assessments",
            title: "Get Guided Discovery",
            description:
                "An essential part of the process is to gain an understanding of your being. These check-ins help the therapist understand how you think, feel, and behave while capturing the nuances of your mind.",
            points: [],
        },
        {
            section: "Diagnosis",
            title: "Breakthrough",
            description:
                "This is the moment of clarity in your journey—where patterns, challenges, and strengths come into focus. With this clarity, you and the therapist can optimize a path for your well-being.",
            points: [],
        },
    ];

    return (
        <section className="section relative flex grow flex-col items-center justify-center gap-6 md:gap-12">
            <h2 className="font-popins relative text-2xl font-semibold md:text-5xl">
                The Process, <span className="bg-primary rounded-sm px-1">Simplified</span>
            </h2>
            <p className="text-muted font-popins text-center text-sm font-normal text-balance md:text-lg">
                Your mental health journey doesn’t have to be overwhelming.
                <br />
                Here’s a simple, structured path to help you understand yourself better and begin healing.
            </p>

            <Tabs defaultValue="Screening" className="w-full md:w-146 lg:w-246">
                <TabsList className="text-secondary relative mx-auto flex h-56 flex-col bg-white p-3 md:h-16 md:flex-row md:gap-12">
                    {content.map((item) => (
                        <TabsTrigger
                            className="data-[state=active]:bg-primary font-popins px-8 py-4 font-medium md:text-lg"
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
                        className="from-primary-light to-primary font-popins relative min-h-80 w-full rounded-xl bg-linear-90 p-8 text-sm md:p-16 md:text-xl"
                    >
                        <p className="mb-8 px-6">{item.description}</p>
                        <ul className="mt-2 list-none space-y-1.5">
                            {item.points.map((point, index) => (
                                <li key={index}>• {point}</li>
                            ))}
                        </ul>

                        <div className="border-primary absolute bottom-0 left-1/2 w-78 -translate-x-1/2 translate-y-1/2 rounded-2xl border-3 bg-white p-3 text-center">
                            {item.section}
                        </div>

                        <DecorImage
                            src="/images/decor-plant-1.png"
                            alt="Decor Highlight"
                            size={[120, 120]}
                            className="right-0 h-38 md:h-auto bottom-0 translate-y-1/6 object-contain"
                        />

                        <DecorImage
                            src="/images/decor-butterfly-2.png"
                            alt="Decor Smile"
                            size={[100, 100]}
                            className="border-primary top-1/3 right-0 z-20 translate-x-1/2 -translate-y-1/2 rounded-2xl border-3 bg-white p-4"
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
