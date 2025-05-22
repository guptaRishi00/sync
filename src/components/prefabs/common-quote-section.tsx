import DecorImage from "@/components/prefabs/decor-image";
import { getCommonSection } from "@/lib/strapi";
import { Quote } from "lucide-react";
import { StrapiImage } from "../custom/StrapiImage";

export default async function CommonQuoteSection() {
    const res = await getCommonSection();

    const { description, name, designation, image } = res.common_quote;
    return (
        <section className="section relative flex flex-col items-center gap-6 py-8 md:flex-row">
            <div className="relative aspect-3/3 h-fit w-full grow md:m-16">
                <StrapiImage src={image.url} alt="Hero Thumbnail" className="right-0 left-0 rounded-2xl object-contain" />
            </div>

            <div className="flex w-full grow flex-col justify-center gap-8 md:max-w-1/2">
                <Quote className="fill-foreground size-14" />
                <p className="font-popins relative text-lg font-medium">
                    {description}
                    <DecorImage
                        src="/images/decor-underline.png"
                        alt="Decor Smile"
                        size={[240, 240]}
                        className="bottom-0 left-0 translate-y-2/3"
                    />
                </p>
                <span className="font-inter mt-2 w-fit font-medium">
                    <b>{name}</b>
                    <br /> {designation}
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
