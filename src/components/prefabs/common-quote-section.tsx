import DecorImage from "@/components/prefabs/decor-image";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function CommonQuoteSection() {
    return (
        <section className="section relative flex flex-col items-center gap-6 py-8 md:flex-row">
            <div className="relative aspect-3/2 h-fit w-full grow md:m-16">
                <Image src="/images/academy-quote-bg.jpg" alt="Hero Thumbnail" fill className="right-0 left-0 rounded-2xl object-cover" />
            </div>

            <div className="flex w-full grow flex-col justify-center gap-4 md:max-w-1/2">
                <Quote className="fill-foreground size-16" />
                <p className="relative">
                    Taking inspiration directly from the founders of Positive Psychology Abraham Maslow and Martin Seligman, we believe in
                    human greatness and the ability of each person to realize their best self. We will support you to live your life to the
                    fullest.
                    <DecorImage
                        src="/images/decor-underline.png"
                        alt="Decor Smile"
                        size={[240, 240]}
                        className="bottom-0 left-0 translate-y-2/3"
                    />
                </p>
                <Button className="mt-2 w-fit">SyNC Positive.</Button>
            </div>

            <DecorImage
                src="/images/decor-light.png"
                alt="Decor light"
                size={[120, 120]}
                className="right-0 bottom-0 opacity-40 lg:opacity-100"
            />
        </section>
    );
}
