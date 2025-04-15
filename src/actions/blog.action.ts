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
    reviewedBy: string;
}

const posts: BlogPost[] = [
    {
        slug: "understanding_obsessive_compulsive_related_disorders",
        authorImage: "/images/author-image-1.jpg",
        date: dayjs(),
        image: "/images/blog-post-1.jpeg",
        title: "Understanding Obsessive Compulsive related disorders.",
        content: "Content",
        type: "Mental Health",
        author: "Muriel Dsouza Franky",
        reviewedBy: "SyNC Positive Psychiatry Foundation",
    },
    {
        slug: "signs_of_autism_in_adults_what_to_look_for",
        authorImage: "/images/author-image-2.jpg",
        date: dayjs(),
        image: "/images/blog-post-2.jpeg",
        title: "Signs of Autism in Adults: What to Look For",
        content: "Content",
        type: "Mental Health",
        author: " Anusha Kolloji",
        reviewedBy: "SyNC Positive Psychiatry Foundation",
    },
    {
        slug: "how_to_get_an_adhd_diagnosis_a_step_by_step_guide",
        authorImage: "/images/author-image-7.jpg",
        date: dayjs(),
        image: "/images/blog-post-3.jpeg",
        title: "How to Get an ADHD Diagnosis: A Step-by-Step Guide",
        content: "Content",
        type: "Mental Health",
        author: "Sanjana Mehta",
        reviewedBy: "SyNC Positive Psychiatry Foundation",
    },
];

export const getAllPosts = async () => posts;
export const getPost = async (slug: string) => posts.find((post) => post.slug === slug);
