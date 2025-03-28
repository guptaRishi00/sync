import DecorImage from "@/components/prefabs/decor-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function ConnectToSyncSection() {
    return (
        <section className="section relative flex flex-col items-center gap-12 md:gap-16">
            <div className="bg-background flex items-center gap-4 rounded-2xl px-4">
                <div className="bg-primary rounded-sm p-2">
                    <h2 className="text-xl font-bold md:text-3xl">Connect</h2>
                </div>
                <h2 className="relative text-xl font-bold md:text-3xl">to SyNC</h2>
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
                <div className="embed-map-responsive overflow-hidden rounded-2xl md:rounded-r-none">
                    <div className="embed-map-container">
                        <iframe
                            className="embed-map-frame"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Sync%20positive&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        />
                        <a
                            href="https://sprunkiretake.net"
                            style={{
                                fontSize: "2px!important",
                                color: "gray!important",
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                zIndex: 1,
                                maxHeight: 1,
                                overflow: "hidden",
                            }}
                        >
                            sprunki retake
                        </a>
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: ".embed-map-responsive{position:relative;text-align:right;width:100%;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;}",
                        }}
                    />
                </div>

                <div className="bg-secondary/20 flex flex-col gap-4 rounded-2xl p-8 md:rounded-l-none">
                    <div className="flex gap-4">
                        <Input placeholder="Enter your Name" className="bg-background" size={48} />
                        <Input type="email" placeholder="Enter your Email Address" className="bg-background" />
                    </div>

                    <Input placeholder="Enter your Subject" className="bg-background" />

                    <Textarea placeholder="Message" className="bg-background grow" />

                    <Button className="w-full">Book an Appointment</Button>
                </div>
            </div>

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
                <h2 className="flex gap-4 text-xl font-bold md:text-3xl">
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
                <Input type="email" placeholder="Enter your Email Address" className="bg-background rounded-r-none" size={58} />
                <Button className="w-fit rounded-l-none">Subscribe</Button>
            </div>
        </section>
    );
}
