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
        slug: "23324rsdff",
        authorImage: "/images/author-image-1.jpg",
        date: dayjs(),
        image: "/images/blog-post-1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "rf324rr234",
        authorImage: "/images/author-image-2.jpg",
        date: dayjs(),
        image: "/images/blog-post-2.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "kjh893g2j3",
        authorImage: "/images/author-image-7.jpg",
        date: dayjs(),
        image: "/images/blog-post-7.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "2342342342",
        authorImage: "/images/author-image-3.jpg",
        date: dayjs(),
        image: "/images/blog-post-3.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "erwei73ku2",
        authorImage: "/images/author-image-4.jpg",
        date: dayjs(),
        image: "/images/blog-post-4.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "98gdoidhg0",
        authorImage: "/images/author-image-5.jpg",
        date: dayjs(),
        image: "/images/blog-post-5.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "kjhw83jk23",
        authorImage: "/images/author-image-6.jpg",
        date: dayjs(),
        image: "/images/blog-post-6.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "kjh893k2j3",
        authorImage: "/images/author-image-7.jpg",
        date: dayjs(),
        image: "/images/blog-post-7.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slug: "oihe83ig23",
        authorImage: "/images/author-image-8.jpg",
        date: dayjs(),
        image: "/images/blog-post-8.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
];

export const getAllPosts = async () => posts;
export const getPost = async (slug: string) => posts.find((post) => post.slug === slug);
