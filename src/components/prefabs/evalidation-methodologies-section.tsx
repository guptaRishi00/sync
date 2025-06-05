import { getHomePageData } from "@/data/loader";
// import { StrapiVideo } from "../custom/StrapiVideo";

export default async function EvaluationMethodologiesSection() {
    // const content = [
    //     {
    //         section: "Screening",
    //         title: "Begin Your Journey",
    //         titleColor: "text-[#F9B41E]",
    //         description:
    //             "This 60-minute talk is designed to capture your genetic profile, neurobiological profile, and life story in simple terms, the 'hardware and software' of your being. A session with a therapist, online or in-person, based on your convenience.",
    //         points: [],
    //     },
    //     {
    //         section: "Assessments",
    //         title: "Guided Discovery",
    //         titleColor: "text-[#F9B41E]",
    //         description:
    //             "An essential part of the process is to gain an understanding of your being. These check-ins help the therapist understand how you think, feel, and behave while capturing the nuances of your mind.",
    //         points: [],
    //     },
    //     {
    //         section: "Diagnosis",
    //         title: "Breakthrough",
    //         titleColor: "text-[#F9B41E]",
    //         description:
    //             "This is the moment of clarity in your journey—where patterns, challenges, and strengths come into focus. With this clarity, you and the therapist can optimize a path for your well-being.",
    //         points: [],
    //     },
    // ];

    const res = await getHomePageData();
    const evaluationMethodologies = res.blocks.find((block: any) => block.__component === "homepage.evaluation-methodologies");

    const { title, description } = evaluationMethodologies || {};

    return (
        <section className="section relative flex grow flex-col items-center justify-center gap-6 md:gap-12">
            <h2 className="font-popins relative text-2xl font-semibold md:text-5xl">
                {title.split(" ")[0] + " " + title.split(" ")[1] + " "}{" "}
                <span className="bg-primary rounded-sm px-1">{title.split(" ")[2]}</span>
            </h2>
            <p className="text-muted font-popins text-center text-sm font-normal text-balance md:text-lg">{description}</p>
            <div className="h-[36rem] w-5xl overflow-hidden rounded-2xl object-cover">
                <iframe
                    src="https://www.youtube.com/embed/lEnrMfKN31c?si=Rg19byPh5ZUMq6q2"
                    className="h-full w-full"
                    allowFullScreen
                    title="YouTube video player"
                />
            </div>

            {/* <div className="rounded-xl lg:p-6">
                <div className="overflow-hidden rounded-xl bg-[#FEF5E8]">
                    <div className="grid grid-cols-1 divide-y divide-[#F4D080] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
                        {content.map((item, index) => (
                            <div className="flex flex-col items-start p-20" key={index}>
                                <div className="mb-4 flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F4D080] to-[#F7B528] px-3">
                                    <span className="text-sm font-semibold text-[#320001]">{item.section}</span>
                                </div>
                                <h3 className={`mb-2 text-xl font-medium text-[#320001]`}>{item.title}</h3>
                                <p className="text-md text-[#320001]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </section>
    );
}
