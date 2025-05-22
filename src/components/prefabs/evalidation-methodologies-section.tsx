import { getEvaluationSection } from "@/lib/strapi";

export default async function EvaluationMethodologiesSection() {
    const res = await getEvaluationSection();

    const { title, subtitle, video, content } = res.evaluation_method;

    return (
        <section className="section relative flex grow flex-col items-center justify-center gap-6 md:gap-12">
            <h2 className="font-popins relative text-2xl font-semibold md:text-5xl">
                {title.split(" ")[0]} {title.split(" ")[1]}, <span className="bg-primary rounded-sm px-1">{title.split(" ")[2]}</span>
            </h2>
            <p className="text-muted font-popins text-center text-sm font-normal text-balance md:text-lg">{subtitle}</p>
            <video
                controls
                preload="none"
                className="h-full w-5xl overflow-hidden rounded-2xl object-cover"
                poster="/jpeg/Subtract (1).png"
            >
                <source src="/videos/front-desk.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="text-muted font-popins text-center text-sm font-normal text-balance md:text-lg">{subtitle}</p>

            <div className="rounded-xl lg:p-6">
                <div className="overflow-hidden rounded-xl bg-[#FEF5E8]">
                    <div className="grid grid-cols-1 divide-y divide-[#F4D080] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
                        {content.map((item: any) => (
                            <div className="flex flex-col items-start p-20" key={item.id}>
                                <div className="mb-4 flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F4D080] to-[#F7B528] px-3">
                                    <span className="text-sm font-semibold text-[#320001]">{item.section}</span>
                                </div>
                                <h3 className={`mb-2 text-xl font-medium text-[#320001]`}>{item.title}</h3>
                                <p className="text-md text-[#320001]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
