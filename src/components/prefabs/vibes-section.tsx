import DecorImage from "@/components/prefabs/decor-image";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function VibeSection() {
    return (
        <section className="section flex flex-col items-center justify-center gap-4 p-8 md:min-h-dvh md:gap-12">
            <div className="relative aspect-8/1 h-8 md:h-16">
                <DecorImage src="/images/decor-vibes.png" alt="Decor New" size={[800, 100]} className="" />
            </div>
            <div className="aspect-5/3 w-4/5 md:w-3/4">
                <Carousel className="h-full">
                    <CarouselContent className="h-full">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card className="h-full py-0">
                                    <CardContent className="relative flex h-full items-center justify-center">
                                        <Image
                                            src={`/images/carousel-img-${index + 1}.jpg`}
                                            alt="Carousel Image"
                                            fill
                                            className="rounded-2xl object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious variant="default" className="md:size-12" />
                    <CarouselNext variant="default" className="md:size-12" />
                </Carousel>
            </div>
        </section>
    );
}
