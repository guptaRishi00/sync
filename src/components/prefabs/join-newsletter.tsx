"use client";

import { addSubscribtion } from "@/actions/google-sheet.action";
import DecorImage from "@/components/prefabs/decor-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function JoinNewsLetter() {
    const [inputValue, setInputValue] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setInputValue("");
        }
    }, [isSuccess]);

    const handleSubmit = useCallback(async (email: string) => {
        if (email) {
            setIsProcessing(true);
            const status = await addSubscribtion(email);
            setIsProcessing(false);
            setIsSuccess(status);
        }
    }, []);

    return (
        <section className="section relative flex flex-col items-center gap-12 md:gap-16">
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

            <div className="flex flex-col gap-4 pb-12">
                <div className="flex">
                    <Input
                        type="email"
                        placeholder="Enter your Email Address"
                        className="bg-background border-secondary-light h-16 rounded-r-none placeholder:text-base"
                        size={45}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button
                        className="h-16 w-fit rounded-l-none px-8 text-base"
                        disabled={isProcessing || isSuccess}
                        onClick={() => handleSubmit(inputValue)}
                    >
                        Submit
                    </Button>
                </div>
                <span className="text-center text-base">{isSuccess ? "Thank you for subscribing!" : " "}</span>
            </div>

            <div>
                <p className="font-popins text-secondary text-center text-sm font-normal italic">
                    Disclaimer : We do not specialize in crisis intervention and emergency services.
                    <br />
                    We urge you to contact your nearest hospital if you experience distress or thoughts of suicide and self harm.
                </p>
            </div>
        </section>
    );
}
