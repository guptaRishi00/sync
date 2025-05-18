import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
});

export async function getHeaderData() {
    const res = await api.get("/homepage?populate=logo");
    return res.data.data;
}

export async function getHeroSectionData() {
    const res = await api.get("/homepage?populate[hero_section][populate][image]=true&populate[hero_section][populate][background]=true");
    return res.data.data;
}

export async function getFounderNoteSection() {
    const res = await api.get("/homepage?populate[founder_note_section][populate][video]=true");
    return res.data.data;
}
