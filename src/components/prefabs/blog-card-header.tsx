import { BlogPost } from "@/actions/blog.action";
import Image from "next/image";

export function BlogHeaderCard({ post }: { post: BlogPost }) {
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
