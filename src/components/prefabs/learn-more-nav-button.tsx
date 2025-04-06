"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LearnMoreNavButton() {
    const router = useRouter();

    return (
        <Button className="font-inter mt-2 w-fit rounded-xs px-8 py-6 text-lg font-medium" onClick={() => router.push("/about")}>
            Learn More
            <ArrowUpRight />
        </Button>
    );
}
