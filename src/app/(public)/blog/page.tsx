import { BlogPost, getAllPosts } from "@/actions/blog.action";
import { BlogCard } from "@/components/prefabs/blog-card";
import BlogHeroCard from "@/components/prefabs/blog-hero-card";
import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import VibeSection from "@/components/prefabs/vibes-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function BlogPage() {
    const posts = await getAllPosts();
    const sorted = posts.sort((a, b) => b.date.diff(a.date));
    const latestPost = sorted[0];

    return (
        <>
            <main className="main relative overflow-x-clip md:min-h-fit!">
                <Image src="/images/blog-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                {latestPost && <HeroSection latestPost={latestPost} />}
            </main>

            <main className="main py-8 md:min-h-fit!">
                <BlogListSection posts={sorted} />
            </main>

            <main className="main bg-secondary/10 md:min-h-fit!">
                <CommonQuoteSection />
            </main>

            <main className="main bg-secondary/20 md:min-h-fit!">
                <VibeSection />
            </main>

            <main className="main hidden overflow-hidden py-8">
                <HealthRequirementSection />
            </main>

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

                <JoinNewsLetter />

                <DecorImage
                    src="/images/home-decore-tree-branch.png"
                    alt="Decor Butterfly"
                    size={[600, 600]}
                    className="top-0 right-0 translate-x-1/6 -translate-y-1/3 opacity-70"
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
                <BlogHeroCard latestPost={latestPost} />
            </div>
        </section>
    );
}

function BlogListSection({ posts }: { posts: BlogPost[] }) {
    return (
        <section className="section">
            <div className="mb-4">
                <h3 className="text-2xl font-bold">Latest Post</h3>
            </div>
            <div className="grid-col-1 mb-4 grid gap-6 md:grid-cols-3">
                {posts && posts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>

            <div className="flex w-full justify-center">
                <Button variant="secondary" className="font-inter rounded-sm px-6 py-4 font-medium text-white">
                    View All Post
                </Button>
            </div>
        </section>
    );
}
