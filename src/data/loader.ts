import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import dayjs from "dayjs";
import { BlogPost } from "@/actions/blog.action";
import axios from "axios";

const homePageQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        bg_image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "elements.logo": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "homepage.founder-note": {
                    populate: "*",
                },
                "homepage.evaluation-methodologies": {
                    populate: "*",
                },
                "homepage.expert-services": {
                    populate: {
                        cardDetails: {
                            populate: {
                                imagePath: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        bookAppointment: true,
                    },
                },
                "homepage.why-us": {
                    populate: {
                        why_us: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                                small_component: true,
                            },
                        },
                    },
                },
                "homepage.common-quote": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "homepage.health-requirement": {
                    populate: {
                        simple_card: true,
                    },
                },
                "homepage.vibe-section": {
                    populate: {
                        carousel: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.testimonials": {
                    populate: {
                        testimonials: {
                            populate: {
                                profile: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.feedback": {
                    populate: {
                        qr_code: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        cat: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.book-appointment-button": {
                    populate: "*",
                },
            },
            seo: {
                populate: {
                    metaImage: {
                        fields: ["url", "alternativeText"],
                    },
                    socialNetwork: {
                        populate: {
                            image: {
                                fields: ["url", "alternativeText"],
                            },
                        },
                    },
                },
            },
        },
    },
});

export async function getHomePageData() {
    const path = "/api/home-page";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = homePageQuery;

    return await fetchAPI(url.href);
}

const globalQuery = qs.stringify({
    populate: {
        header: {
            populate: {
                logo: {
                    fields: ["url", "alternativeText"],
                },
            },
        },
        join_news_letter: {
            populate: {
                decor_circle: {
                    fields: ["url", "alternativeText"],
                },
                decor_circle2: {
                    fields: ["url", "alternativeText"],
                },
            },
        },
        decor_tree: {
            fields: ["url", "alternativeText"],
        },
        decor_chair: {
            fields: ["url", "alternativeText"],
        },
        decor_butterfly1: {
            fields: ["url", "alternativeText"],
        },
        footer: true,
    },
});

export async function getGlobalData() {
    const path = "/api/global";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = globalQuery;
    return await fetchAPI(url.href);
}

const aboutQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        bg_image: {
                            fields: ["url", "alternativeText"],
                        },
                        image: {
                            fields: ["url", "alternativeText"],
                        },

                        small_component: true,
                    },
                },
                "aboutpage.meet-experts": {
                    populate: {
                        profiles: {
                            populate: {
                                profileImage: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "aboutpage.why-choose": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        list: true,
                        mission: true,
                        vision: true,
                    },
                },
                "aboutpage.commitment-section": {
                    populate: {
                        commitment: {
                            populate: {
                                imagePath: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
            },
        },
        seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                socialNetwork: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
    },
});

export async function getAboutData() {
    const path = "/api/about-page";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = aboutQuery;
    return await fetchAPI(url.href);
}

const serviceQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        bg_image: { fields: ["url", "alternativeText"] },
                        image: { fields: ["url", "alternativeText"] },
                    },
                },
                "elements.info-section": {
                    populate: {
                        image: { fields: ["url", "alternativeText"] },

                        list: true,
                    },
                },
                "servicepage.consultations": {
                    populate: {
                        consultations: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },

                                list: true,
                            },
                        },
                    },
                },
                "servicepage.assessments": {
                    populate: {
                        assessments: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },

                                list: true,
                            },
                        },
                    },
                },
            },
        },
        seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                socialNetwork: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
    },
});

export async function getServiceData() {
    const path = "/api/service-page";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = serviceQuery;
    return await fetchAPI(url.href);
}

const academyQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        bg_image: { fields: ["url", "alternativeText"] },
                        image: { fields: ["url", "alternativeText"] },
                    },
                },
                "academypage.what-to-get": {
                    populate: {
                        clinical_training: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        discussion_forum: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        practice: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        Learning: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        Expert: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                    },
                },
                "academypage.points-to-join": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },

                        points: true,
                    },
                },
                "academypage.subscribe-section": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },

                        faq: true,
                    },
                },
            },
        },
        seo: {
            populate: {
                metaImage: {
                    fields: ["url", "alternativeText"],
                },
                socialNetwork: {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
            },
        },
    },
});

export async function getAcademyData() {
    const path = "/api/academy";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = academyQuery;
    return await fetchAPI(url.href);
}

export const getPost = async (slug: string): Promise<BlogPost | null> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
        });

        const post = response.data?.data?.[0];
        if (!post) return null;

        const attrs = post;

        return {
            title: attrs.title,
            content: attrs.content,
            author: attrs.author,
            reviewedBy: attrs.reviewedBy,
            slug: attrs.slug,
            type: attrs.type,
            date: dayjs(attrs.date),
            image: attrs.image?.url || "", // or `attrs.image?.data?.attributes?.url`
            authorImage: attrs.authorImage?.url || "", // or `attrs.authorImage?.data?.attributes?.url`,
            youtube_links: attrs.youtube_link,
        };
    } catch (err) {
        console.error("Error fetching post by slug:", err);
        return null;
    }
};
