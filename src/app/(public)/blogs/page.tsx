import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import VibeSection from "@/components/prefabs/vibes-section";
import { Button } from "@/components/ui/button";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";

interface BlogPost {
    image: string;
    title: string;
    content: string;
    author: string;
    authorImage: string;
    date: Dayjs;
    type: string;
    slugId: string;
}

const posts: BlogPost[] = [
    {
        slugId: "23324rsdff",
        authorImage: "/images/author-image-1.jpg",
        date: dayjs(),
        image: "/images/blog-post-1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "rf324rr234",
        authorImage: "/images/author-image-2.jpg",
        date: dayjs(),
        image: "/images/blog-post-2.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "kjh893g2j3",
        authorImage: "/images/author-image-7.jpg",
        date: dayjs(),
        image: "/images/blog-post-7.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "2342342342",
        authorImage: "/images/author-image-3.jpg",
        date: dayjs(),
        image: "/images/blog-post-3.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "erwei73ku2",
        authorImage: "/images/author-image-4.jpg",
        date: dayjs(),
        image: "/images/blog-post-4.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "98gdoidhg0",
        authorImage: "/images/author-image-5.jpg",
        date: dayjs(),
        image: "/images/blog-post-5.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "kjhw83jk23",
        authorImage: "/images/author-image-6.jpg",
        date: dayjs(),
        image: "/images/blog-post-6.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "kjh893k2j3",
        authorImage: "/images/author-image-7.jpg",
        date: dayjs(),
        image: "/images/blog-post-7.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
    {
        slugId: "oihe83ig23",
        authorImage: "/images/author-image-8.jpg",
        date: dayjs(),
        image: "/images/blog-post-8.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur",
        content: "Content",
        type: "Mental Health",
        author: "Jason Francisco",
    },
];

export default async function BlogsPage() {
    const sorted = posts.sort((a, b) => b.date.diff(a.date));
    const latestPost = sorted[0];

    return (
        <>
            <main className="main relative overflow-x-clip md:min-h-fit!">
                <Image src="/images/blogs-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                {latestPost && <HeroSection latestPost={latestPost} />}
            </main>

            <main className="main py-8">
                <BlogListSection posts={sorted} />
            </main>

            <main className="main bg-secondary/10 md:min-h-fit!">
                <CommonQuoteSection />
            </main>

            <main className="main bg-secondary/20 md:min-h-fit!">
                <VibeSection />
            </main>

            <main className="main overflow-hidden py-8">
                <HealthRequirementSection />
            </main>

            <main className="main relative overflow-hidden py-12">
                <ConnectToSyncSection />

                <DecorImage
                    src="/images/home-decore-tree-branch.png"
                    alt="Decor Butterfly"
                    size={[400, 400]}
                    className="top-0 right-0 translate-x-1/6 -translate-y-1/4"
                />
                <DecorImage
                    src="/images/home-decore-5.png"
                    alt="Home Decore 5"
                    size={[450, 450]}
                    className="absolute right-0 bottom-0 translate-1/4 opacity-60 sm:translate-1/10"
                />
            </main>

            <main className="main bg-primary py-8 md:min-h-0">
                <Footer />
            </main>
        </>
    );
}

function HeroSection({ latestPost }: { latestPost: BlogPost }) {
    return (
        <section className="section relative flex flex-col gap-4 py-8 sm:py-12 md:py-16">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="">
                <div className="relative aspect-4/5 md:aspect-video">
                    <Image src={latestPost.image} fill alt={latestPost.title} className="rounded-2xl object-cover" />
                    <div className="absolute bottom-0 flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 md:left-6 md:w-96 md:translate-y-1/6 lg:w-112">
                        <BlogHeaderCard post={latestPost} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function BlogHeaderCard({ post }: { post: BlogPost }) {
    return (
        <>
            <span className="bg-primary w-fit rounded-sm px-2 py-1 text-xs font-bold">{post.type}</span>
            <h4 className="text-lg font-bold tracking-wide">{post.title}</h4>
            <div className="text-muted flex items-center gap-4 text-sm">
                <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
                    <Image src={post.authorImage} alt={post.author} fill />
                </div>
                <p>{post.author}</p>
                <p>{post.date.format("MMMM DD, YYYY")}</p>
            </div>
        </>
    );
}

function BlogListSection({ posts }: { posts: BlogPost[] }) {
    return (
        <section className="section">
            <div className="mb-4">
                <h3 className="text-2xl font-bold">Latest Post</h3>
            </div>
            <div className="grid-col-1 mb-4 grid gap-6 md:grid-cols-3">
                {posts && posts.map((post) => <BlogCard key={post.slugId} post={post} />)}
            </div>

            <div className="flex w-full justify-center">
                <Button variant="secondary" className="text-white">
                    Load All Post
                </Button>
            </div>
        </section>
    );
}

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-3">
            <div className="relative aspect-4/3">
                <Image src={post.image} alt={post.author} fill className="cover rounded-lg" />
            </div>
            <div className="flex flex-col items-start gap-2">
                <BlogHeaderCard post={post} />
            </div>
        </div>
    );
}
