"use client";

import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { StrapiImage } from "../custom/StrapiImage";

type Props = {
    name: string;
    designation: string;
    about: string;
    profileImage: { url: string } | string;

    facebook?: string;
    linkedin?: string;
    instagram?: string;
};

export default function ProfileCard({ name, designation, about, profileImage, facebook, linkedin, instagram }: Props) {
    const [showDetails, setShowDetails] = useState(false);

    const imgUrl = typeof profileImage === "string" ? profileImage : (profileImage?.url ?? "");

    return (
        <div className="flex aspect-3/4">
            <div className="group from-secondary to-secondary-light relative flex grow flex-col overflow-hidden rounded-2xl bg-radial p-2 transition-all duration-1000">
                <div className="relative aspect-square h-fit w-full overflow-hidden rounded-2xl transition-all duration-500">
                    <StrapiImage src={imgUrl} alt={name} className="absolute object-cover" />
                </div>

                <div className="group-hover:text-secondary group-hover:fill-secondary relative z-20 flex h-fit grow flex-col items-start justify-between gap-2 rounded-2xl fill-white p-4 text-white group-hover:bg-white">
                    <div>
                        <h4 className="font-popins text-xl font-semibold">{name}</h4>
                        <p className="font-popins mb-4 text-sm font-normal">{designation}</p>
                        <p className={cn("font-popins hidden text-justify text-sm font-normal", showDetails ? "block" : "")}>{about}</p>
                    </div>

                    <div className="hidden items-center gap-4 [&>svg]:size-6">
                        {instagram && (
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                            </svg>
                        )}
                        {facebook && (
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                            </svg>
                        )}
                        {linkedin && (
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        )}
                    </div>

                    <Button
                        variant="default"
                        size="icon"
                        onClick={() => setShowDetails((current) => !current)}
                        className={cn(
                            "absolute right-0 z-40 mr-4 hidden size-12 items-center rounded-full stroke-2 transition-all group-hover:flex",
                            showDetails ? "top-4 rotate-180" : "",
                        )}
                    >
                        <MoveUpRight strokeWidth={2} scale={120} className="fill-white! stroke-white stroke-3" />
                    </Button>
                </div>

                <StrapiImage src={imgUrl} alt={name} className="absolute -z-10 object-cover group-hover:z-10" />
            </div>
        </div>
    );
}
