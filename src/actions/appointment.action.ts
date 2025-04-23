"use server";
import { redirect, RedirectType } from "next/navigation";

const domain = "sync";
const key = "7d1b11ad-8572-4bfe-b210-28c1f52145b8";

export const redirectToTopperStage = async (urlType: string, country?: string) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

    // Get the Auth Token
    const authResponse = await fetch(`https://${domain}.pwens.com/api/GenerateToken/${domain}/${key}`);
    const authBody = await authResponse.json();
    const token = authBody["token"];

    // Fetch the URL
    const apiResponse = await fetch(`https://${domain}.pwens.com/api/GenerateURL/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ urlType, countryName: country || "India" }),
    });

    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "1";

    const apiBody = await apiResponse.json();
    const url = apiBody["url"];

    redirect(url, RedirectType.push);
};
