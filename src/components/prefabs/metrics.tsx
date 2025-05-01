"use client";

import useIsVisible from "@/hooks/is-visible.hook";
import dynamic from "next/dynamic";
import { Ref, useEffect, useState } from "react";
import { Button } from "../ui/button";

let loadedCallback: (() => void) | null = null;

const Odometer = dynamic(
    async () => {
        const mod = await import("react-odometerjs");
        if (loadedCallback != null) {
            loadedCallback();
        }
        return mod;
    },
    {
        ssr: false,
        loading: () => 0,
    },
);

export default function Metrics() {
    const [odometerLoaded, setOdometerLoaded] = useState(false);

    loadedCallback = () => {
        setOdometerLoaded(true);
    };

    const [specialistsValue, setSpecialistsValue] = useState(0);
    const [specialistsVisible, specialistsRef] = useIsVisible();

    useEffect(() => {
        if (!specialistsVisible || !odometerLoaded) {
            return;
        }
        const timeoutId = setTimeout(() => setSpecialistsValue(10), 0);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [specialistsVisible, odometerLoaded]);

    const [clientsValue, setClientsValue] = useState(0);
    const [clientsVisible, clientsRef] = useIsVisible();
    useEffect(() => {
        if (!clientsVisible || !odometerLoaded) {
            return;
        }
        const timeoutId = setTimeout(() => setClientsValue(2300), 0);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [clientsVisible, odometerLoaded]);

    const [assessmentsValue, setAssessmentsValue] = useState(0);
    const [assessmentsVisible, assessmentsRef] = useIsVisible();
    useEffect(() => {
        if (!assessmentsVisible || !odometerLoaded) {
            return;
        }
        const timeoutId = setTimeout(() => setAssessmentsValue(1800), 0);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [assessmentsVisible, odometerLoaded]);

    return (
        <div className="mb-8 grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
            <Button
                className="flex h-42 w-full flex-col items-center justify-center rounded-2xl md:h-58"
                ref={assessmentsRef as Ref<HTMLButtonElement>}
            >
                <h4 className="font-sora flex items-center text-5xl font-bold lg:text-7xl">
                    <Odometer value={assessmentsValue} format="(,ddd)" />+
                </h4>
                <p className="font-popins text-lg font-normal text-wrap">Assessments</p>
            </Button>

            <Button
                className="flex h-42 flex-col items-center justify-center rounded-2xl md:h-58"
                ref={clientsRef as Ref<HTMLButtonElement>}
            >
                <h4 className="font-sora flex items-center text-5xl font-bold lg:text-7xl">
                    <Odometer value={clientsValue} format="(,ddd)" />+
                </h4>
                <p className="font-popins text-lg font-normal text-wrap">Clients</p>
            </Button>

            <Button
                className="flex h-42 flex-col items-center justify-center rounded-2xl md:h-58"
                ref={specialistsRef as Ref<HTMLButtonElement>}
            >
                <h4 className="font-sora flex items-center text-5xl font-bold lg:text-7xl">
                    <Odometer value={specialistsValue} format="(,ddd)" />+
                </h4>
                <p className="font-popins text-lg font-normal text-wrap">Specialists</p>
            </Button>
        </div>
    );
}
