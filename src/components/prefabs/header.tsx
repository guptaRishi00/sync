"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Separator } from "../ui/separator";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import Image from "next/image";

type HeaderProps = {
    logoUrl: string;
};

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Academy", href: "/academy" },
    { label: "Resources", href: "/resources" },
];

export default function Header() {
    const router = useRouter();
    const scrollY = useScrollPosition();

    const isScrolled = scrollY > 10;

    const onLogoClick = useCallback(() => {
        router.push("/");
    }, [router]);

    return (
        <div className="w-full">
            <div
                className={`fixed top-0 right-0 left-0 z-50 w-full px-5 py-5 transition-all duration-300 lg:px-10 lg:py-5 ${
                    isScrolled ? "bg-white/70 shadow-md backdrop-blur-md" : "bg-transparent"
                }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="relative aspect-[167/86] w-40 cursor-pointer md:w-64" onClick={onLogoClick}>
                        <Image src="/images/logo.png" alt="SYNC" width={167} height={86} className="h-full w-full object-contain" />
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger>
                            <div className="flex size-6 cursor-pointer flex-col items-end justify-between">
                                <span className="h-1 w-2/3 rounded-full bg-slate-950" />
                                <span className="h-1 w-full rounded-full bg-slate-950" />
                                <span className="h-1 w-4/5 rounded-full bg-slate-950" />
                            </div>
                        </SheetTrigger>
                        <SheetContent className="flex w-full flex-col justify-center sm:max-w-none md:w-1/3">
                            <SheetHeader>
                                <SheetTitle className="hidden" />
                                <SheetDescription className="hidden" />
                            </SheetHeader>

                            <nav className="font-popins relative flex flex-col items-center gap-6 md:gap-8">
                                {NAV_LINKS.map(({ label, href }, idx) => (
                                    <div key={label} className="flex flex-col items-center gap-2">
                                        <Link href={href} className="hover:text-primary text-2xl md:text-3xl">
                                            {label}
                                        </Link>
                                        {idx < NAV_LINKS.length - 1 && <Separator className="bg-secondary h-1 w-1/2" />}
                                    </div>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
