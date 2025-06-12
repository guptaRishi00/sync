"use server";

import { redirect, RedirectType } from "next/navigation";

const domain = "sync";

export const redirectToTopperStage = async (urlType: string, country?: string) => {
    const encodedCountry = Buffer.from(country || "India").toString("base64");

    // ✅ Manual URL construction (no API call)
    const url = `https://${domain}.pwens.com/${urlType}/sync?country=${encodedCountry}`;

    redirect(url, RedirectType.push);
};
