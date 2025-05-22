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
    const res = await api.get(
        "/homepage?populate[founder_note_section][populate][video]=true&populate[founder_note_section][populate][poster]=true",
    );
    return res.data.data;
}

export async function getEvaluationSection() {
    const res = await api.get(
        "/homepage?populate[evaluation_method][populate][video][populate]=*&populate[evaluation_method][populate][content]=*",
    );
    return res.data.data;
}

export async function getExpertService() {
    const res = await api.get(
        "/homepage?populate[expert_service][populate][cardDetails][populate]=imagePath&populate[expert_service][populate][why_us][populate]=image",
    );
    return res.data.data;
}

export async function getCommonSection() {
    const res = await api.get("/homepage?populate[common_quote][populate]=image");
    return res.data.data;
}

export async function getHealthRequirement() {
    const res = await api.get("/homepage?populate[health_requirement][populate][simple_card][populate]=image");
    return res.data.data;
}

export async function getVibe() {
    const res = await api.get("/homepage?populate[vibe][populate][image]=true&populate[vibe][populate][carousel]=true");
    return res.data.data;
}

export async function getTestimonials() {
    const res = await api.get("/homepage?populate[testimonial][populate]=profile");
    return res.data.data;
}

export async function getFeedback() {
    const res = await api.get(
        "/homepage?populate[feedback_section][populate][testimonial]=true&populate[feedback_section][populate][testimonial_mask]=true&populate[feedback_section][populate][qr_image]=true",
    );
    return res.data.data;
}

export async function getAboutHero() {
    const res = await api.get(
        "/about?populate[hero_section][populate][bg_image]=true&populate[hero_section][populate][about_clinic][populate]=image&populate[hero_section][populate][image]=true",
    );
    return res.data.data;
}

export async function getAboutMeetExpert() {
    const res = await api.get("/about?populate[meet_expert][populate][profiles][populate]=profileImage");
    return res.data.data;
}

export async function getAboutVision() {
    const res = await api.get(
        "/about?populate[vision_section][populate]=mission&populate[vision_section][populate]=vision&populate[vision_section][populate]=image&populate[vision_section][populate]=why",
    );
    return res.data.data;
}

export async function getAboutCommitment() {
    const res = await api.get(
        "/about?populate[commitment][populate][image]=true&populate[commitment][populate][commitments][populate][imagePath]=true",
    );
    return res.data.data;
}
