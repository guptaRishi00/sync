"use client";

import { addSubscribtion } from "@/actions/google-sheet.action";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SudentSubscription() {
    const [email, setEmail] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setEmail("");
        }
    }, [isSuccess]);

    const handleSubmit = useCallback(async (email: string) => {
        if (email) {
            setIsProcessing(true);
            const success = await addSubscribtion(email, true);
            setIsSuccess(success);
            setIsProcessing(false);
        }
    }, []);

    return (
        <>
            <div className="flex flex-col items-start gap-4">
                <div className="flex">
                    <Input
                        type="email"
                        placeholder="Enter your Email Address"
                        className="bg-background border-secondary-light h-16 rounded-r-none placeholder:text-base"
                        size={45}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        className="h-16 w-fit rounded-l-none px-8 text-base"
                        disabled={isProcessing || isSuccess}
                        onClick={() => handleSubmit(email)}
                    >
                        Submit
                    </Button>
                </div>

                <span className="text-center text-base">{isSuccess ? "Thank you for subscribing!" : " "}</span>
            </div>
        </>
    );
}
