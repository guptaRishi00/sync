"use client";

import { addConnectDetails } from "@/actions/google-sheet.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCallback, useEffect, useState } from "react";

export default function ConnectToSyncSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }, [isSuccess]);

    const handleSubmit = useCallback(async (email: string, name: string, subject: string, message: string) => {
        if (email) {
            setIsProcessing(true);
            const status = await addConnectDetails(email, name, subject, message);
            setIsProcessing(false);
            setIsSuccess(status);
        }
    }, []);

    return (
        <section className="section relative flex flex-col items-center gap-12 md:gap-16">
            <div className="bg-background font-popins flex items-center gap-4 rounded-4xl px-4 text-2xl font-semibold md:text-4xl">
                <div className="from-primary-light to-primary rounded-sm bg-linear-to-r p-4">
                    <h2 className="">Connect</h2>
                </div>
                <h2 className="">to SyNC</h2>
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

                <div className="flex flex-col gap-4 rounded-4xl bg-[#EEE3D3] px-8 py-12 md:rounded-l-none">
                    <div className="flex gap-4">
                        <Input
                            placeholder="Enter your Name"
                            className="bg-background border-secondary h-16 placeholder:text-base"
                            size={48}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="email"
                            placeholder="Enter your Email Address"
                            className="bg-background border-secondary h-16 placeholder:text-base"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <Input
                        placeholder="Enter your Subject"
                        className="bg-background border-secondary h-16 placeholder:text-base"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <Textarea
                        placeholder="Message"
                        className="bg-background border-secondary h-16 grow placeholder:text-base"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <Button
                        className="w-full py-6 text-base"
                        disabled={isProcessing || isSuccess}
                        onClick={() => handleSubmit(email, name, subject, message)}
                    >
                        Send your message
                    </Button>

                    <span className="text-center text-base">
                        {isSuccess ? "We have recieved your message, we will get back to you shortly" : " "}
                    </span>
                </div>
            </div>
        </section>
    );
}
