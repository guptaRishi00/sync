import { BlogPost } from "@/actions/blog.action";
import Image from "next/image";

export function BlogHeaderCard({ post }: { post: BlogPost }) {
    return (
        <>
            <span className="bg-primary font-popins w-fit rounded-sm px-2 py-1 text-xs font-medium">{post.type}</span>
            <h4 className="font-popins text-xl font-semibold tracking-wide">{post.title}</h4>
            <div className="text-muted flex flex-col items-start gap-2 text-sm">
                <div className="relative hidden size-9 shrink-0 overflow-hidden rounded-full">
                    <Image src={post.authorImage} alt={post.author} fill />
                </div>
                <p className="font-popins text-sm font-normal">{post.author}</p>
                <p className="font-popins text-sm font-normal">{post.date.format("MMMM DD, YYYY")}</p>
            </div>
        </>
    );
}
