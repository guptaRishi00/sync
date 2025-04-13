"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Separator } from "../ui/separator";

export default function Header() {
    const router = useRouter();

    const onLogoClick = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="relative aspect-3454/574 w-40 cursor-pointer md:w-64" onClick={onLogoClick}>
                <Image src="/images/logo.png" alt="SYNC" fill className="object-contain" />
            </div>

            {/* Menu */}

            <Sheet>
                <SheetTrigger>
                    <div className="flex size-6 cursor-pointer flex-col items-end justify-between">
                        <span className="h-1 w-2/3 rounded-full bg-slate-950" />
                        <span className="h-1 w-full rounded-full bg-slate-950" />
                        <span className="h-1 w-4/5 rounded-full bg-slate-950" />
                    </div>
                </SheetTrigger>
                <SheetContent className="flex md:w-1/3 w-full flex-col justify-center sm:max-w-none">
                    <SheetHeader>
                        <SheetTitle className="hidden"></SheetTitle>
                        <SheetDescription className="hidden"></SheetDescription>
                    </SheetHeader>

                    <div className="font-popins relative flex flex-col items-center gap-6 md:gap-8">
                        <Link className="hover:text-primary text-2xl md:text-3xl" href="/">
                            Home
                        </Link>
                        <Separator className="bg-secondary h-[4px]! w-1/2!" />
                        <Link className="hover:text-primary text-2xl md:text-3xl" href="/about">
                            About
                        </Link>
                        <Separator className="bg-secondary h-[4px]! w-1/2!" />
                        <Link className="hover:text-primary text-2xl md:text-3xl" href="/services">
                            Services
                        </Link>
                        <Separator className="bg-secondary h-[4px]! w-1/2!" />
                        <Link className="hover:text-primary text-2xl md:text-3xl" href="/academy">
                            Academy
                        </Link>
                        <Separator className="bg-secondary h-[4px]! w-1/2!" />
                        <Link className="hover:text-primary text-2xl md:text-3xl" href="/blog">
                            Blog
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
