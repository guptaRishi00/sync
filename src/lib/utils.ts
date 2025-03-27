import { clsx, type ClassValue } from "clsx";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

// Extend Day.js with custom parsing format support
dayjs.extend(customParseFormat);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function withQuery(url: string, query: Record<string, string> = {}): string {
    if (!query || Object.keys(query).length === 0) {
        return url;
    }

    const params = new URLSearchParams(query).toString();

    return `${url}?${params}`;
}

export function uriBuilder(domain: string) {
    return (path: string, query?: Record<string, string>): string => {
        let uri = domain;

        if (path && !path.startsWith("/")) {
            path = "/" + path;
        }

        uri += path;

        uri += query ? "?" + new URLSearchParams(query).toString() : "";

        return uri;
    };
}
const dateFormat = "MMM DD, YYYY";
const timeFormat = "hh:mm:ss A";
const dateTimeFormat = `${dateFormat} ${timeFormat}`;

export function formatDate(date: Dayjs | string): string {
    return dayjs(date).format(dateFormat);
}

export function formatTime(date: Dayjs | string): string {
    return dayjs(date).format(timeFormat);
}

export function formatDateTime(date: Dayjs | string): string {
    return dayjs(date).format(dateTimeFormat);
}

export function frameMetadata(title: string, description?: string): Metadata {
    title = `SyNC | ${title}`;
    description = description || "Effortlessly organize, preview, and share images stored in Google Drive with Lobster.";
    return { title, description } as Metadata;
}

export function toSnakeCase(str: string): string {
    return str
        .replace(/\s+/g, "_")
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .replace(/-+/g, "_")
        .toLowerCase();
}
