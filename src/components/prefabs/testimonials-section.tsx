import { Star } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function TestimonialsSection() {
    const testimonials = [
        {
            profile: "/images/testimonial-user-1.jpg",
            name: "John Doe",
            title: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
            rating: 5,
        },
        {
            profile: "/images/testimonial-user-1.jpg",
            name: "John Doe",
            title: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
            rating: 2,
        },
        {
            profile: "/images/testimonial-user-1.jpg",
            name: "John Doe",
            title: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
            rating: 3,
        },
        {
            profile: "/images/testimonial-user-1.jpg",
            name: "John Doe",
            title: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
            rating: 4,
        },
    ];

    return (
        <section className="section py-8 md:py-12">
            <div className="w-full">
                <Carousel opts={{ align: "start" }} className="flex w-full flex-col gap-4">
                    <div className="relative flex items-center justify-between gap-4">
                        <div className="bg-primary font-popins inline w-fit rounded-md px-4 py-2 text-2xl font-semibold text-black">
                            Testimonials
                        </div>

                        <div className="bg-green flex gap-4 [&>button]:relative! [&>button]:top-0! [&>button]:left-0! [&>button]:translate-0!">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>

                        <div className="hidden grow md:block" />
                        <div className="relative aspect-561/418 w-12">
                            <Image src="/images/decor-quote.png" alt="Decor Butterfly" fill className="absolute object-cover" />
                        </div>
                    </div>
                    <CarouselContent className="py-8">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="grow md:basis-1/3 lg:basis-1/4">
                                <div className="shadow-primary/20 flex flex-col gap-4 rounded-md bg-white p-4 shadow-lg">
                                    <div className="flex flex-wrap items-end justify-between gap-4">
                                        <div className="relative size-12 shrink-0">
                                            <Image
                                                src={testimonial.profile}
                                                alt={testimonial.name}
                                                fill
                                                className="rounded-full object-cover"
                                            />
                                        </div>

                                        <div className="shrink-0 grow">
                                            <h3 className="text-base font-bold">{testimonial.name}</h3>
                                            <p className="text-muted text-sm">{testimonial.title}</p>
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
                                    </div>

                                    <p className="text-muted text-sm">{testimonial.description}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
