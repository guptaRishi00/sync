"use client";

import DecorImage from "@/components/prefabs/decor-image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
    className?: string;
};

export default function BookAppointmentButton({ className }: Props) {
    const [openDialog, setOpenDialog] = useState(false);
    const [openBookTypeDialog, setOpenBookTypeDialog] = useState(false);
    const [openFollowupDialog, setOpenFollowupDialog] = useState(false);

    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

    const success = useCallback((position: GeolocationPosition) => {
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    }, []);

    // Prompt for location if permission is not granted
    const getLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
                if (permissionStatus.state === "denied") {
                    window.location.href = "app-settings:location";
                } else {
                    navigator.geolocation.getCurrentPosition(success);
                }
            });
        } else {
            // Set Default Location of India
            setLocation({ latitude: 20.5937, longitude: 78.9629 });
        }
    }, [success]);

    const onBookAppointmentClick = useCallback(() => {
        if (location.latitude === 0) {
            getLocation();
            setOpenDialog(true);
        } else {
            setOpenBookTypeDialog(true);
        }
    }, [location, getLocation]);

    const onContinueClick = useCallback(() => {
        setOpenBookTypeDialog(true);
        setOpenDialog(false);
    }, []);

    const onBookTypeClick = useCallback((type: "with-assessment" | "without-assessment" | "follow-up") => {
        if (type === "follow-up") {
            setOpenFollowupDialog(true);
        }
        // TODO: Redirect
        setOpenBookTypeDialog(false);
    }, []);

    // If permission is already granted, get location
    useEffect(() => {
        navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
                getLocation();
            }
        });
    }, [getLocation]);

    return (
        <>
            <Button className={cn("w-fit rounded-xs", className)} onClick={onBookAppointmentClick}>
                Book an Appointment
            </Button>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="h-148 overflow-hidden sm:max-w-[625px]">
                    <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                    <DialogHeader className="flex flex-col items-center gap-6 pt-12">
                        <DialogTitle className="relative text-xl font-bold md:text-3xl">
                            Help Us Personalize Your Care
                            <DecorImage
                                src="/images/decor-smile.png"
                                alt="Decor Smile"
                                size={[28, 28]}
                                className="right-0 bottom-0 translate-x-full translate-y-1/2"
                            />
                        </DialogTitle>
                        <DialogDescription className="text-foreground text-center text-sm font-bold opacity-80 md:text-lg">
                            At Sync Positive Psychiatry, we aim to connect you with the most suitable services and professionals near you.
                            By allowing location access, we can provide tailored care options based on your region. Your privacy is
                            important to us, and your information will be used solely to enhance your experience.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="relative mt-4 w-full">
                        <Button type="submit" className="mx-auto w-2/3" disabled={location.latitude === 0} onClick={onContinueClick}>
                            Continue
                        </Button>
                    </DialogFooter>
                    <DecorImage
                        src="/images/decor-leaves.png"
                        alt="Decor Leaves"
                        size={[186, 186]}
                        className="right-0 bottom-0 translate-x-1/5 translate-y-1/4 opacity-80"
                    />
                </DialogContent>
            </Dialog>

            <Dialog open={openBookTypeDialog} onOpenChange={setOpenBookTypeDialog}>
                <DialogContent className="h-148 overflow-hidden sm:max-w-[625px]">
                    <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                    <DialogHeader className="flex flex-col items-center gap-2 pt-12 md:gap-6">
                        <DialogTitle className="relative text-lg font-bold md:text-3xl">
                            Choose How You’d Like to Book
                            <DecorImage
                                src="/images/decor-smile.png"
                                alt="Decor Smile"
                                size={[28, 28]}
                                className="right-0 bottom-0 translate-x-full translate-y-1/2"
                            />
                        </DialogTitle>
                        <DialogDescription className="text-foreground text-center text-sm font-bold opacity-80 md:text-lg">
                            Select the option that best fits your current need
                        </DialogDescription>
                    </DialogHeader>

                    <div className="bg-secondary-light cursor-pointer rounded-2xl p-6" onClick={() => onBookTypeClick("with-assessment")}>
                        <h5 className="text-sm font-bold text-white md:text-lg">With Assessment</h5>
                        <p className="text-sm text-white">
                            Start with a comprehensive assessment to help us understand your needs and guide you better.
                        </p>
                    </div>
                    <div className="bg-primary cursor-pointer rounded-2xl p-6" onClick={() => onBookTypeClick("without-assessment")}>
                        <h5 className="text-sm font-bold text-white md:text-lg">Without Assessment</h5>
                        <p className="text-sm text-white">Proceed directly to booking if you already know the service you require.</p>
                    </div>
                    <div className="bg-accent cursor-pointer rounded-2xl p-6" onClick={() => onBookTypeClick("follow-up")}>
                        <h5 className="text-sm font-bold text-white md:text-lg">Follow-Up</h5>
                        <p className="text-sm text-white">
                            For follow-up appointments, please contact our team directly through WhatsApp for quick assistance and
                            scheduling.
                        </p>
                    </div>

                    <DecorImage
                        src="/images/decor-leaves.png"
                        alt="Decor Leaves"
                        size={[186, 186]}
                        className="right-0 bottom-0 translate-x-1/5 translate-y-1/4 opacity-80"
                    />
                </DialogContent>
            </Dialog>

            <Dialog open={openFollowupDialog} onOpenChange={setOpenFollowupDialog}>
                <DialogContent className="h-148 overflow-hidden sm:max-w-[625px]">
                    <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                    <DialogHeader className="flex h-full flex-col items-center gap-6 pt-12">
                        <DialogTitle className="relative text-xl font-bold md:text-3xl">
                            Follow-Up Appointment
                            <DecorImage
                                src="/images/decor-smile.png"
                                alt="Decor Smile"
                                size={[28, 28]}
                                className="right-0 bottom-0 translate-x-full translate-y-1/2"
                            />
                        </DialogTitle>
                        <DialogDescription className="text-foreground text-center text-sm font-bold opacity-80 md:text-lg">
                            We’re here to assist you with your follow-up scheduling
                        </DialogDescription>
                        <div className="bg-secondary-light flex flex-col items-center justify-center gap-6 rounded-2xl p-12 text-white">
                            <span className="z-20">
                                For follow-up consultations, we kindly request you to reach out to our team via WhatsApp. This will help us
                                assist you faster and find the most convenient slot for you.
                            </span>
                            <Button className="z-10 w-fit px-6 text-lg">
                                <svg
                                    className="scale-125"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#fff"
                                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                                    ></path>
                                    <path
                                        fill="#cfd8dc"
                                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                                    ></path>
                                    <path
                                        fill="#40c351"
                                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                Chat with Us
                            </Button>
                        </div>
                    </DialogHeader>

                    <DecorImage
                        src="/images/decor-leaves.png"
                        alt="Decor Leaves"
                        size={[186, 186]}
                        className="right-0 bottom-0 translate-x-1/5 translate-y-1/4 opacity-80"
                    />

                    <DecorImage
                        src="/images/decor-plant.png"
                        alt="Decor Plant"
                        size={[286, 286]}
                        className="bottom-0 left-0 z-0 -translate-x-1/4 opacity-60 md:opacity-90"
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
