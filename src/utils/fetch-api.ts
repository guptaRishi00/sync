export async function fetchAPI(url: any) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
            },
            cache: 'no-store',
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json") && response.ok) {
            const data = await response.json();
            return data.data;
        } else {
            return { status: response.status, statusText: response.statusText };
        }
    } catch (error) {
        console.error("Error GET data:", error);
        throw error;
    }
}
