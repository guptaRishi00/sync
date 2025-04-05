import Image from "next/image";
import DecorImage from "./decor-image";

export default function FeedbackSection() {
    return (
        <section className="section py-8 md:pt-12">
            <div className="relative z-10 w-full rounded-2xl bg-[#0059B8] md:aspect-video lg:bg-transparent">
                <Image src="/images/home-bg-testimonial.png" alt="Testimonials Background" fill className="absolute -z-50 object-contain" />
                <Image
                    src="/images/home-bg-testimonial-mask.png"
                    alt="Testimonials Background"
                    fill
                    className="absolute -z-30 object-contain"
                />

                <div className="flex h-full flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex flex-col gap-4 p-12 md:max-w-1/2">
                        <h4 className="font-inter text-background text-xl md:text-3xl">We Value Your Feedback!</h4>
                        <p className="font-lato text-base text-white md:text-xl">
                            Your opinion matters to us. If you&apos;ve enjoyed our services, we’d love to hear your thoughts! Share your
                            experience by leaving a review—it helps us improve and continue providing the best for you.
                        </p>

                        <div className="relative mt-4 aspect-square w-62">
                            <Image
                                src="/images/qr-code.svg"
                                alt="QR Code"
                                fill
                                className="stroke-primary absolute -z-50 rounded-2xl object-contain"
                            />
                        </div>
                    </div>

                    <div className="bg-primary-light [&>h4]:font-inter [&>p]:font-popins relative -z-40 rounded-2xl p-12 shadow-2xl lg:w-1/3 [&>h4]:mb-2 [&>h4]:text-xl [&>h4]:font-semibold md:[&>h4]:text-3xl [&>p]:mb-4 [&>p]:text-base md:[&>p]:text-lg">
                        <h4 className="">Location</h4>
                        <p className="mb-4 text-lg">
                            103-C, 30th Cross Rd, <br />
                            7th Block, Jayanagar, <br />
                            Bengaluru, <br />
                            Karnataka 560070 <br />
                        </p>
                        <h4>Phone Number</h4>
                        <p>+91 81053 39647</p>
                        <h4>E-Mail</h4>
                        <p className="pb-42">support@syncpositivepsychatry.com</p>

                        <DecorImage src="/images/decor-cat.png" alt="Cat Decor" size={[200, 200]} className="right-0 bottom-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
