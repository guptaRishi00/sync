import { BlogPost } from "@/actions/blog.action";
import { BlogHeaderCard } from "@/components/prefabs/blog-card-header";
import Image from "next/image";
import Link from "next/link";

export default function BlogHeroCard({ latestPost }: { latestPost: BlogPost }) {
    return (
        <Link href={`/blog/${latestPost.slug}`}>
            <div className="relative aspect-5/6 md:aspect-9/4">
                <Image src={latestPost.image} fill alt={latestPost.title} className="rounded-2xl object-cover" />
                <div className="absolute bottom-0 flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-4 md:left-6 md:w-96 md:translate-y-1/6 lg:w-112">
                    <BlogHeaderCard post={latestPost} />
                </div>
            </div>
        </Link>
    );
}
