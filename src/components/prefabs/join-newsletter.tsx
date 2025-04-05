import DecorImage from "@/components/prefabs/decor-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function JoinNewsLetter() {
    return (
        <section className="section relative flex flex-col items-center gap-12 pb-12 md:gap-16">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <Mail className="fill-primary stroke-background size-16"></Mail>
                    <DecorImage
                        src="/images/decor-highlight-circle-2.png"
                        alt="Decor Highlight Circle 2"
                        size={[180, 180]}
                        className="absolute top-1/2 left-1/2 w-[160%] max-w-none -translate-1/2"
                    />
                </div>
                <h2 className="font-popins flex gap-4 text-2xl font-semibold md:text-4xl">
                    Join
                    <span className="text-secondary-light">SyNC</span>
                    <span className="relative">
                        Newsletter
                        <DecorImage
                            src="/images/decor-highlight-circle-1.png"
                            alt="Decor Highlight Circle 1"
                            size={[120, 120]}
                            className="absolute top-1/2 left-1/2 w-[110%] max-w-none -translate-1/2"
                        />
                    </span>
                </h2>
            </div>

            <div className="flex">
                <Input
                    type="email"
                    placeholder="Enter your Email Address"
                    className="bg-background border-secondary-light h-16 rounded-r-none"
                    size={58}
                />
                <Button className="h-16 w-fit rounded-l-none px-8">Submit</Button>
            </div>
        </section>
    );
}
