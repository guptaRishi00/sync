import { getAllPosts } from "@/actions/blog.action";
import { ContentOne } from "@/app/(public)/resources/content";
import { BlogCard } from "@/components/prefabs/blog-card";
// import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
// import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
// import VibeSection from "@/components/prefabs/vibes-section";
import { getGlobalData, getPost } from "@/data/loader";
import Image from "next/image";

type Props = {
    params: Promise<Record<string, string>>;
};

export default async function BlogDetailPage({ params }: Props) {
    const { blogId } = await params;

    const post = await getPost(blogId);
    const latestPosts = (await getAllPosts()).slice(1, 5);

    console.log("slug: ", post);

    const globalres = await getGlobalData();
    const { join_news_letter, header } = globalres;
    const footerLinks = globalres.footer;
    return (
        <>
            <main className="main relative flex overflow-x-clip">
                <Image src="/images/blog-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                {post && <HeroSection post={post} latestPosts={latestPosts} header={header} />}
            </main>

            <main className="main bg-secondary/10 hidden md:min-h-fit!">{/* <CommonQuoteSection /> */}</main>

            <main className="main bg-secondary/20 hidden md:min-h-fit!">{/* <VibeSection /> */}</main>

            <main className="main hidden overflow-hidden py-8">{/* <HealthRequirementSection /> */}</main>

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

                <JoinNewsLetter data={join_news_letter} />

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
                <Footer data={footerLinks} />
            </main>
        </>
    );
}

function HeroSection({ post, latestPosts, header }: any) {
    return (
        <section className="section relative flex min-h-full grow flex-col gap-4 py-8 sm:py-12 md:py-16">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header logo={header.logo.url} />
            </div>

            <div className="flex grow flex-col gap-4">
                <span className="bg-primary font-popins w-fit rounded-sm px-2 py-1 text-xs font-medium">{post.type}</span>
                <h4 className="font-popins text-4xl font-semibold tracking-wide">{post.title}</h4>
                <div className="text-muted flex flex-col items-start gap-1 text-sm">
                    <div className="relative hidden size-9 shrink-0 overflow-hidden rounded-full">
                        <Image src={post.authorImage} alt={post.author} fill />
                    </div>
                    <p className="font-popins text-sm font-normal">{post.author}</p>
                    <p className="font-popins text-sm font-normal">{post.date.format("MMMM DD, YYYY")}</p>
                </div>
                <div className="flex h-fit flex-col gap-10 md:flex-row">
                    <div className="flex h-fit grow flex-col gap-6">{post.slug && <ContentOne post={post} />}</div>
                    <div className="flex min-w-1/4 flex-col gap-6">
                        <h3 className="font-popins text-xl font-semibold">Latest Post</h3>

                        <div className="grid-col-1 mb-4 grid gap-6">
                            {latestPosts && latestPosts.map((post: any) => <BlogCard key={post.slug} post={post} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
