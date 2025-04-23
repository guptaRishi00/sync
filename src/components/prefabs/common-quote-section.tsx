import DecorImage from "@/components/prefabs/decor-image";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function CommonQuoteSection() {
    return (
        <section className="section relative flex flex-col items-center gap-6 py-8 md:flex-row">
            <div className="relative aspect-519/352 h-fit w-full grow md:m-16">
                <Image src="/jpeg/slide 6.jpg" alt="Hero Thumbnail" fill className="right-0 left-0 rounded-2xl object-cover" />
            </div>

            <div className="flex w-full grow flex-col justify-center gap-8 md:max-w-1/2">
                <Quote className="fill-foreground size-14" />
                <p className="font-popins relative text-lg font-medium">
                    At SyNC Positive Psychiatry Foundation, we believe that every individual has the inner strength to grow, heal, and
                    thrive. Our approach is centered on empowering you to discover your potential, cultivate resilience, and lead a life
                    filled with purpose and well-being.
                    <DecorImage
                        src="/images/decor-underline.png"
                        alt="Decor Smile"
                        size={[240, 240]}
                        className="bottom-0 left-0 translate-y-2/3"
                    />
                </p>
                <span className="font-inter mt-2 w-fit font-medium">
                    <b>Dr. Vinod Kumar,</b>
                    <br /> Founder, SyNC Positive Psychiatry Foundation
                </span>
            </div>

            <DecorImage
                src="/images/decor-light.png"
                alt="Decor light"
                size={[120, 120]}
                className="right-0 bottom-0 hidden opacity-40 md:block lg:opacity-100"
            />
        </section>
    );
}
