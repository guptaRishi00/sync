import { Star } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { getTestimonials } from "@/lib/strapi";
import { StrapiImage } from "../custom/StrapiImage";

export default async function TestimonialsSection() {
    const res = await getTestimonials();
    // const { testimonial } = res.testimonial;

    const testimonials = res.testimonial;

    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Bharat Agarwal",
    //         title: "Google Review",
    //         description:
    //             "I had a very nice experience at SyNC Positive Psychiatry. Dr. Vinod helped me understand my ADHD. The place is clean, calm, and has a soothing atmosphere. It's been a collaborative experience, in terms of choice of medication and lifestyle changes, and I feel more capable of tackling my ambitions after meeting him.",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Faheem M",
    //         title: "Google Review",
    //         description:
    //             "I had an excellent experience at SyNC Positive Psychiatry. The therapist showed a lot of knowledge and made the sessions enjoyable. The staff were very polite and helpful, and everything went smoothly. The clinic was tidy and had a soothing atmosphere, which made my visits more pleasant. I feel satisfied with my progress in my treatment.  And Dr Vinod is a fun person.",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Hema Narasimhan",
    //         title: "Google Review",
    //         description:
    //             "Dr Vinod is a very fine, great,friendly, understanding Doctor.He is upto date with his knowledge.His approach to patients are very commendable & Supportive graceful . Thank you very very much for making our life a smooth & better journey 🙏🙏🙏",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Hardik Aatreya Bharat Shah",
    //         title: "Google Review",
    //         description:
    //             "Dr. Vinod is phenomenal. Non judgement & gets to the source of things. If you are thinking about getting help or know someone who might need, this place will make a difference.",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Jinit Shah",
    //         title: "Google Review",
    //         description:
    //             "I had a really good experience at SyNC Positive Psychiatry. The therapy really helped me a lot. They provided me with the right medication and advice that made a big difference. I was worried all the time and now I feel almost totally better. I am much more confident now, and I appreciate the help I received. 🌟",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Prashant Singh",
    //         title: "Google Review",
    //         description:
    //             "My visit to SyNC Positive Psychiatry was like finally finding what i was looking for . The therapist was empathetic and attentive . She made me totally comfortable . The crew there was professional , always on the dot with time. if brain tune-ups are what you need, SyNC’s your jam! 🧠✨",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Cheryl Sreedharan",
    //         title: "Google Review",
    //         description:
    //             "Very pleased with the services offered here. A good practice is followed here, they first do an assessment, post this a consultation with Dr Vinod Kumar is scheduled. Dr Vinod Kumar is a veteran in mental health issues. A very peaceful and calm centre too.",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Ritesh Jain",
    //         title: "Google Review",
    //         description:
    //             "The best place for your Psychiatric and Psychological challenges. The facility has an experienced set of Psychologists and Dr. Vinod as a Psychiatric head, having the required knowledge and expertise to find out the root cause of your problems. ",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Yogi F",
    //         title: "Google Review",
    //         description:
    //             "Dr Vinod's new venture :) Gotta love a compassionate psych who doesn't abandon his clients and look after them even when transitioning to greener pastures. Hard to find such a caring and funny mental health service provider. Rashma is also great - love her work :) ",
    //         rating: 5,
    //     },
    //     {
    //         profile: "/images/google-logo.png",
    //         name: "Savitha Mahesh",
    //         title: "Google Review",
    //         description:
    //             "Dr Vinod is a Gem ! Commitment personified with expertise par excellence. All this with humility and humanity makes him truly phenomenal 🙏Stay blessed and continue to do what you do best..transform lives ♥️🤗",
    //         rating: 5,
    //     },
    // ];

    return (
        <section className="section py-8 md:py-12">
            <div className="w-full">
                <Carousel opts={{ align: "start" }} className="flex w-full flex-col gap-4">
                    <div className="relative flex items-center justify-between gap-4">
                        <div className="bg-primary font-popins inline w-fit rounded-md px-4 py-2 text-2xl font-semibold text-black">
                            Testimonials
                        </div>

                        <div className="bg-green flex gap-4 [&>button]:relative! [&>button]:top-0! [&>button]:left-0! [&>button]:translate-0!">
                            <CarouselPrevious variant="default" />
                            <CarouselNext variant="default" />
                        </div>

                        <div className="hidden grow md:block" />
                        <div className="relative aspect-561/418 w-12">
                            <Image src="/images/decor-quote.png" alt="Decor Butterfly" fill className="absolute object-cover" />
                        </div>
                    </div>
                    <CarouselContent className="py-8">
                        {testimonials.map((testimonial: any) => (
                            <CarouselItem key={testimonial.id} className="grow md:basis-1/3 lg:basis-1/4">
                                <div className="shadow-primary/20 flex h-full flex-col gap-4 rounded-md bg-white px-4 py-12 shadow-lg">
                                    <div className="flex flex-wrap items-end justify-between gap-4">
                                        <div className="relative size-12 shrink-0">
                                            <StrapiImage
                                                src={testimonial.profile.url}
                                                alt={testimonial.name}
                                                className="rounded-full object-cover"
                                            />
                                        </div>

                                        <div className="shrink-0 grow">
                                            <h3 className="text-base font-bold">{testimonial.name}</h3>
                                            <p className="text-muted text-sm">{testimonial.title}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-1">
                                            {Array.from({ length: testimonial.rating }, (_, i) => (
                                                <Star key={i} className="fill-primary stroke-primary size-4" />
                                            ))}
                                            {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                                                <Star key={i} className="stroke-primary size-4" />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-muted text-base">{testimonial.description}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
