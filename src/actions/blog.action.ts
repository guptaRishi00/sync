"use server";

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
}

const posts: BlogPost[] = [
    {
        slug: "1",
        authorImage: "/images/author-image-1.jpg",
        date: dayjs(),
        image: "/images/blog-post-1.jpeg",
        title: "Understanding Obsessive Compulsive related disorders.",
        content: "Content",
        type: "Mental Health",
        author: "SyNC Positive Psychiatry Foundation",
    },
    {
        slug: "2",
        authorImage: "/images/author-image-2.jpg",
        date: dayjs(),
        image: "/images/blog-post-2.jpeg",
        title: "Signs of Autism in Adults: What to Look For",
        content: "Content",
        type: "Mental Health",
        author: "SyNC Positive Psychiatry Foundation",
    },
    {
        slug: "kjh893g2j3",
        authorImage: "/images/author-image-7.jpg",
        date: dayjs(),
        image: "/images/blog-post-3.jpeg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "SyNC Positive Psychiatry Foundation",
    },
];

export const getAllPosts = async () => posts;
export const getPost = async (slug: string) => posts.find((post) => post.slug === slug);
