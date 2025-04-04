import { BlogPost, getAllPosts, getPost } from "@/actions/blog.action";
import { BlogCard } from "@/components/prefabs/blog-card";
import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import VibeSection from "@/components/prefabs/vibes-section";
import Image from "next/image";

type Props = {
    params: Promise<Record<string, string>>;
};

export default async function BlogSlugPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);
    const latestPosts = (await getAllPosts()).slice(1, 5);

    return (
        <>
            <main className="main relative flex overflow-x-clip">
                <Image src="/images/blog-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                {post && <HeroSection post={post} latestPosts={latestPosts} />}
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

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

                <JoinNewsLetter />

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

function HeroSection({ post, latestPosts }: { post: BlogPost; latestPosts: BlogPost[] }) {
    return (
        <section className="relative flex min-h-full grow flex-col gap-4 py-8 sm:py-12 md:py-16">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="flex grow flex-col gap-4">
                <span className="bg-primary w-fit rounded-sm px-2 py-1 text-xs font-bold">{post.type}</span>
                <h4 className="text-2xl font-bold tracking-wide">{post.title}</h4>

                <div className="flex h-fit flex-col gap-6 md:flex-row">
                    <div className="flex h-fit grow flex-col gap-6">
                        <div className="text-muted flex items-center gap-4 text-sm">
                            <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
                                <Image src={post.authorImage} alt={post.author} fill />
                            </div>
                            <p>{post.author}</p>
                            <p>{post.date.format("MMMM DD, YYYY")}</p>
                        </div>
                        <div className="relative aspect-5/3 w-full">
                            <Image src={post.image} alt={post.title} fill className="rounded-xl object-cover" />
                        </div>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo
                            dictumst urna. Malesuada at ut quis mi sit augue. In orci et neque nisl et eu mauris donec mi. Arcu lectus
                            fringilla fermentum eu elementum eget viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo
                            dolor ultricies ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur
                            facilisis diam vulputate nunc elit ornare. Gravida lorem iaculis convallis quis in proin ultricies eget. Massa
                            nullam commodo vel viverra at tortor volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et enim quam
                            eu lobortis et habitant sollicitudin quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque. Semper
                            morbi augue turpis aliquet quam. Lacus dignissim adipiscing velit vel. Tristique congue ut faucibus lorem
                            malesuada. Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget
                            commodo dictumst urna. Malesuada at ut quis mi sit augue. In orci et neque nisl et eu mauris donec mi. Arcu
                            lectus fringilla fermentum eu elementum eget viverra accumsan. Aliquet in massa volutpat id diam auctor arcu.
                            Justo dolor ultricies ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est.
                            Consectetur facilisis diam vulputate nunc elit ornare. Gravida lorem iaculis convallis quis in proin ultricies
                            eget. Massa nullam commodo vel viverra at tortor volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et
                            enim quam eu lobortis et habitant sollicitudin quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque.
                            Semper morbi augue turpis aliquet quam. Lacus dignissim adipiscing velit vel. Tristique congue ut faucibus lorem
                            malesuada.
                        </p>

                        <h4 className="text-2xl font-bold tracking-wide">Lorem Ipsum Dolor Sit</h4>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo
                            dictumst urna. Malesuada at ut quis mi sit augue. In orci et neque nisl et eu mauris donec mi. Arcu lectus
                            fringilla fermentum eu elementum eget viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo
                            dolor ultricies ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur
                            facilisis diam vulputate nunc elit ornare. Gravida lorem iaculis convallis quis in proin ultricies eget. Massa
                            nullam commodo vel viverra at tortor volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et enim quam
                            eu lobortis et habitant sollicitudin quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque. Semper
                            morbi augue turpis aliquet quam. Lacus dignissim adipiscing velit vel. Tristique congue ut faucibus lorem
                            malesuada. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc elit ornare.
                            Gravida lorem iaculis convallis quis in proin ultricies eget. Massa nullam commodo vel viverra at tortor
                            volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et enim quam eu lobortis et habitant sollicitudin
                            quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque. Semper morbi augue turpis aliquet quam. Lacus
                            dignissim adipiscing velit vel. Tristique congue ut faucibus lorem malesuada. Lorem ipsum dolor sit amet
                            consectetur. Duis felis aenean ullamcorper in. Lectus ipsum justo eget commodo dictumst urna. Malesuada at ut
                            quis mi sit augue. In orci et neque nisl et eu mauris donec mi. Arcu lectus fringilla fermentum eu elementum
                            eget viverra accumsan. Aliquet in massa volutpat id diam auctor arcu. Justo dolor ultricies ultricies ipsum
                            tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc elit
                            ornare. Gravida lorem iaculis convallis quis in proin ultricies eget. Massa nullam commodo vel viverra at tortor
                            volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et enim quam eu lobortis et habitant sollicitudin
                            quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque. Semper morbi augue turpis aliquet quam. Lacus
                            dignissim adipiscing velit vel. Tristique congue ut faucibus lorem malesuada. A sollicitudin etiam imperdiet dui
                            duis est. Consectetur facilisis diam vulputate nunc elit ornare. Gravida lorem iaculis convallis quis in proin
                            ultricies eget. Massa nullam commodo vel viverra at tortor volutpat laoreet. Est porta cursus justo fermentum
                            ipsum id. Et enim quam eu lobortis et habitant sollicitudin quis eu. Aliquet aliquam tellus nisl erat dignissim
                            scelerisque. Semper morbi augue turpis aliquet quam. Lacus dignissim adipiscing velit vel. Tristique congue ut
                            faucibus lorem malesuada. Lorem ipsum dolor sit amet consectetur. Duis felis aenean ullamcorper in. Lectus ipsum
                            justo eget commodo dictumst urna. Malesuada at ut quis mi sit augue. In orci et neque nisl et eu mauris donec
                            mi. Arcu lectus fringilla fermentum eu elementum eget viverra accumsan. Aliquet in massa volutpat id diam auctor
                            arcu. Justo dolor ultricies ultricies ipsum tellus ullamcorper. A sollicitudin etiam imperdiet dui duis est.
                            Consectetur facilisis diam vulputate nunc elit ornare. Gravida lorem iaculis convallis quis in proin ultricies
                            eget. Massa nullam commodo vel viverra at tortor volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et
                            enim quam eu lobortis et habitant sollicitudin quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque.
                            Semper morbi augue turpis aliquet quam. Lacus dignissim adipiscing velit vel. Tristique congue ut faucibus lorem
                            malesuada. A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc elit ornare.
                            Gravida lorem iaculis convallis quis in proin ultricies eget. Massa nullam commodo vel viverra at tortor
                            volutpat laoreet. Est porta cursus justo fermentum ipsum id. Et enim quam eu lobortis et habitant sollicitudin
                            quis eu. Aliquet aliquam tellus nisl erat dignissim scelerisque. Semper morbi augue turpis aliquet quam. Lacus
                            dignissim adipiscing velit vel. Tristique congue ut faucibus lorem malesuada.
                        </p>
                    </div>
                    <div className="flex min-w-1/4 flex-col gap-6">
                        <h3 className="text-2xl font-bold">Latest Post</h3>

                        <div className="grid-col-1 mb-4 grid gap-6">
                            {latestPosts && latestPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
