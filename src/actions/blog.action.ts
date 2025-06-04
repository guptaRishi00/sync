"use server";

import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

export interface BlogPost {
    image: string;
    title: string;
    content: string;
    author: string;
    authorImage: string;
    date: Dayjs;
    type: string;
    slug: string;
    reviewedBy: string;
}

// Get raw Strapi response
export const getStrapiData = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-posts?populate=*`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
    });
    return response.data;
};

// Transform to BlogPost[]
export const getAllPosts = async (): Promise<BlogPost[]> => {
    const { data } = await getStrapiData();

    return data.map((item: any): BlogPost => {
        const attrs = item;
        return {
            title: attrs.title,
            content: attrs.content,
            author: attrs.author,
            reviewedBy: attrs.reviewedBy,
            slug: attrs.slug,
            type: attrs.type,
            date: dayjs(attrs.date),
            image: attrs.image?.url || "",
            authorImage: attrs.authorImage?.url || "",
        };
    });
};

// Filter by slug
export const getPost = async (slug: string): Promise<BlogPost | undefined> => {
    const allPosts = await getAllPosts();
    return allPosts.find((post) => post.slug === slug);
};
