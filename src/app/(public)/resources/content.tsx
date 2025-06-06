import { cn } from "@/lib/utils";
import Image from "next/image";

// Type definition based on the actual JSON structure
type BlogPost = {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
    authorImage: {
        url: string;
    };
};

export function ContentOne({ post }: { post: BlogPost }) {
    console.log("blog personal: ", post);

    const formatContent = (content: string) => {
        // Split content into sections and format each part
        const sections = content.split("\n\n");

        return sections
            .map((section, index) => {
                // Handle headers with **
                if (section.startsWith("**") && section.endsWith("**")) {
                    const headerText = section.replace(/\*\*/g, "");
                    return <BlogHeader key={index}>{headerText}</BlogHeader>;
                }

                // Handle regular paragraphs with inline bold formatting
                const formatInlineText = (text: string) => {
                    const parts = text.split(/(\*\*.*?\*\*)/g);
                    return parts.map((part, partIndex) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                            return <strong key={partIndex}>{part.replace(/\*\*/g, "")}</strong>;
                        }
                        return part;
                    });
                };

                // Handle numbered lists
                if (/^\d+\./.test(section)) {
                    const listItems = section.split("\n").filter((item) => item.trim());
                    return (
                        <BlogList key={index}>
                            {listItems.map((item, itemIndex) => (
                                <BlogListItem key={itemIndex}>{formatInlineText(item.replace(/^\d+\.\s*/, ""))}</BlogListItem>
                            ))}
                        </BlogList>
                    );
                }

                // Regular paragraphs
                if (section.trim()) {
                    return <BlogP key={index}>{formatInlineText(section)}</BlogP>;
                }

                return null;
            })
            .filter(Boolean);
    };

    return (
        <div className="mx-auto max-w-4xl space-y-6">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="relative aspect-video w-full">
                    <Image src={post.image} alt={post.title} fill className="rounded-xl object-cover" />
                </div>

                <div className="flex items-center gap-3">
                    <div>
                        <p className="font-inter text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="font-inter text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>
                </div>

                <BlogTitle>{post.title}</BlogTitle>
            </div>

            {/* Content Section - Formatted from post.content */}
            <div className="prose prose-lg max-w-none">{formatContent(post.content)}</div>
        </div>
    );
}

function BlogTitle({ children }: { children: React.ReactNode }) {
    return <h1 className="font-inter text-3xl leading-tight font-bold text-gray-900 md:text-4xl">{children}</h1>;
}

function BlogHeader({ children }: { children: React.ReactNode }) {
    return <h2 className="font-inter mt-8 mb-4 text-xl font-bold text-gray-800 md:text-2xl">{children}</h2>;
}

function BlogP({ children, italic = false }: { children: React.ReactNode; italic?: boolean }) {
    return <p className={cn("font-inter mb-4 text-base leading-relaxed text-gray-700", italic ? "italic" : "")}>{children}</p>;
}

function BlogList({ children }: { children: React.ReactNode }) {
    return <ol className="font-inter mb-4 space-y-3 pl-6 text-base leading-relaxed text-gray-700">{children}</ol>;
}

function BlogListItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="list-decimal marker:font-medium marker:text-blue-600">
            <div className="pl-2">{children}</div>
        </li>
    );
}

// Usage: Pass your API response data directly
// const post = responseData.data[0];
// <ContentOne post={post} />
