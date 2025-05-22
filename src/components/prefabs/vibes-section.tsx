import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getVibe } from "@/lib/strapi";
import { StrapiImage } from "../custom/StrapiImage";

export default async function VibeSection() {
    const res = await getVibe();

    const { image, carousel } = res.vibe;

    return (
        <section className="section flex flex-col items-center justify-center gap-4 p-8 md:min-h-dvh md:gap-12">
            <div className="relative aspect-8/1 h-8 md:h-16">
                <StrapiImage src={image.url} alt="Decor New" width={800} height={100} className="" />
            </div>
            <div className="aspect-[3.75/3] w-4/5 md:w-3/4">
                <Carousel className="h-full">
                    <CarouselContent className="h-full">
                        {carousel.map((item: any) => (
                            <CarouselItem key={item.id}>
                                <Card className="h-full py-0">
                                    <CardContent className="relative flex h-full items-center justify-center">
                                        <StrapiImage src={item.url} alt="Carousel Image" className="rounded-2xl object-contain" />
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
