"use client";

import { addSubscribtion } from "@/actions/google-sheet.action";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SudentSubscription() {
    const [email, setEmail] = useState("");

    const handleSubmit = useCallback(async (email: string) => {
        if (email) {
            await addSubscribtion(email, true);
        }
    }, []);

    return (
        <>
            <Input
                type="email"
                placeholder="Enter your Email Address"
                className="bg-background border-secondary-light h-16 rounded-r-none placeholder:text-base"
                size={45}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="h-16 w-fit rounded-l-none px-8 text-base" onClick={() => handleSubmit(email)}>
                Submit
            </Button>
        </>
    );
}
