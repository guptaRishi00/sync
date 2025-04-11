import { BlogPost } from "@/actions/blog.action";
import { BlogHeaderCard } from "@/components/prefabs/blog-card-header";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link className="text-2xl md:text-3xl" href={`/blog/${post.slug}`}>
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white px-3 py-5 transition-transform hover:scale-101 hover:cursor-pointer">
                <div className="relative aspect-4/3">
                    <Image src={post.image} alt={post.author} fill className="rounded-lg object-cover" />
                </div>
                <div className="flex shrink-0 flex-col items-start gap-2">
                    <BlogHeaderCard post={post} />
                </div>
            </div>
        </Link>
    );
}
