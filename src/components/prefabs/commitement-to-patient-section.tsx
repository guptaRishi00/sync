import CommitmentCard from "@/components/prefabs/commitment-card";
import Image from "next/image";

export default function CommitmentToPatientSection() {
    const commitments = [
        {
            title: "Patient Safety",
            description: "We prioritize patient safety and support, treating every patient like a family member.",
            imagePath: "/images/about-hero-1.jpg",
        },
        {
            title: "Ethical Care",
            description: "If we wouldn’t prescribe the same treatment to our own family, we know we need to rethink our approach.",
            imagePath: "/images/about-hero-1.jpg",
        },
        {
            title: "Empathetic Approach",
            description: "As professionals who have been in our clients' shoes, we deeply understand their experiences and needs.",
            imagePath: "/images/about-hero-1.jpg",
        },
    ];
    return (
        <section className="section flex flex-col gap-6 py-8">
            <div className="flex w-full flex-col gap-4">
                <h2 className="relative w-full text-3xl tracking-normal break-normal md:text-5xl">
                    Commitment to <br className="md:hidden" />
                    <span className="relative">
                        Patient Care
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="100"
                            className="bottom-0 left-0 -z-10 translate-y-1/2 object-contain"
                        />
                    </span>
                </h2>
                <p>Lorem ipsum dolor sit amet consecetetur.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {commitments.map((commitment, index) => (
                    <CommitmentCard key={index} {...commitment} />
                ))}
            </div>
        </section>
    );
}
