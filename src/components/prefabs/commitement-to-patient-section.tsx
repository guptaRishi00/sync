import CommitmentCard from "@/components/prefabs/commitment-card";
import { getAboutCommitment } from "@/lib/strapi";
import Image from "next/image";
import { StrapiImage } from "../custom/StrapiImage";

export default async function CommitmentToPatientSection() {
    const res = await getAboutCommitment();

    const { title, image, commitments } = res.commitment;
    // const commitments = [
    //     {
    //         title: "Comfort",
    //         description: "We prioritize patient safety and support, treating every patient like a family member.",
    //         imagePath: "/jpeg/Comfort.jpg",
    //     },
    //     {
    //         title: "Ethical",
    //         description: "Healing is deeply personal. We only recommend care options that we’d trust for our own families.",
    //         imagePath: "/jpeg/right side 2.jpg",
    //     },
    //     {
    //         title: "Empathetic",
    //         description: "As professionals who have been in our clients' shoes, we deeply understand their needs.",
    //         imagePath: "/jpeg/empathetic.jpg",
    //     },
    // ];
    return (
        <section className="section flex flex-col gap-12 py-16">
            <div className="font-popins flex w-full flex-col gap-4">
                <h2 className="relative w-full text-center text-3xl font-semibold tracking-normal break-normal md:text-5xl">
                    {title.split(" ")[0] + " " + title.split(" ")[1] + " " + title.split(" ")[2]}
                    <br className="md:hidden" />
                    <span className="relative">
                        {title.split(" ")[3] + " " + title.split(" ")[4]}
                        <StrapiImage
                            src={image.url}
                            alt="Decor Highlight"
                            className="bottom-0 left-0 -z-10 translate-y-1/2 object-contain"
                        />
                    </span>
                </h2>
                <p className="hidden text-lg font-normal">Lorem ipsum dolor sit amet consecetetur.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {commitments.map((commitment: any) => (
                    <CommitmentCard key={commitment.id} {...commitment} />
                ))}
            </div>
        </section>
    );
}
