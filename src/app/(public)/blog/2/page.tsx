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
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    params: Promise<Record<string, string>>;
};

export default async function BlogSlugPage({ params }: Props) {
    const { slug } = await params;
    console.log(slug);

    const post = await getPost("2");
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

function HeroSection({ post, latestPosts }: { post: BlogPost; latestPosts: BlogPost[] }) {
    return (
        <section className="relative flex min-h-full grow flex-col gap-4 py-8 sm:py-12 md:py-16">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="flex grow flex-col gap-4">
                <span className="bg-primary font-popins w-fit rounded-sm px-2 py-1 text-xs font-medium">{post.type}</span>
                <h4 className="font-popins text-4xl font-semibold tracking-wide">{post.title}</h4>

                <div className="flex h-fit flex-col gap-6 md:flex-row">
                    <div className="flex h-fit grow flex-col gap-6">
                        <div className="text-muted flex items-center gap-4 text-sm">
                            <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
                                <Image src={post.authorImage} alt={post.author} fill />
                            </div>
                            <p className="font-popins text-sm font-normal">{post.author}</p>
                            <p className="font-popins text-sm font-normal">{post.date.format("MMMM DD, YYYY")}</p>
                        </div>
                        <div className="relative aspect-5/3 w-full">
                            <Image src={post.image} alt={post.title} fill className="rounded-xl object-cover" />
                        </div>

                        <BlogHeader>Signs of Autism in Adults: What to Look For?</BlogHeader>

                        <BlogP italic={true}>
                            Struggling with social cues or feeling overwhelmed by change ? Subtle signs of autism in adults might explain
                            the way you experience the world.
                        </BlogP>

                        <BlogP>
                            Here is a guide to understanding dysfunction, recognizing symptoms, and knowing when to seek professional help.
                            Getting an appropriate diagnosis can be life-altering!
                        </BlogP>

                        <BlogHeader>Introduction</BlogHeader>

                        <BlogP>
                            Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how a person thinks, feels, and
                            interacts with the world around them. People with autism may have difficulty understanding social cues, struggle
                            with communication, or prefer routines and specific interests.
                        </BlogP>

                        <BlogP>
                            Autism exists on a spectrum, meaning it looks different for everyone—some people need a lot of support in daily
                            life, while others may not. It’s not an illness but a different way of experiencing the world. With the right
                            support, autistic individuals can thrive in their unique way.
                        </BlogP>

                        <BlogHeader>Functional vs Dysfunctional Autism</BlogHeader>

                        <BlogP>
                            Individuals with autism often have unique strengths that can make certain aspects of life more functional,
                            structured, or successful. These tendencies can be assets in various situations, particularly when they align
                            with personal interests, career paths, or daily routines like hyperfocus on topics they are passionate about,
                            leading to deep expertise.
                        </BlogP>
                        <BlogP>
                            Autism can become dysfunctional when symptoms significantly interfere with daily life, relationships, and
                            responsibilities. This might include extreme difficulty understanding social cues, leading to isolation, sensory
                            sensitivities that make public spaces overwhelming, or rigid routines that create distress when disrupted.
                            Executive dysfunction can result in struggles with organization, time management, and self-care, while emotional
                            regulation challenges may cause intense meltdowns or shutdowns.{" "}
                        </BlogP>
                        <BlogP>
                            Autism symptoms often involve challenges with social communication, sensory processing, and flexibility. This
                            can manifest as difficulty maintaining eye contact, sensitivity to loud noises or bright lights, and a strong
                            preference for routines. When these difficulties lead to struggles at personal life or workplace, strained
                            relationships, or persistent anxiety, seeking support can be crucial for improving overall well-being.
                        </BlogP>

                        <BlogHeader>Signs to look out for:</BlogHeader>
                        <ul className="space-y-5 pl-8">
                            <li>
                                <BlogP>trouble understanding what other people are thinking or feeling</BlogP>
                            </li>
                            <li>
                                <BlogP>Choosing to be on your own or having a hard time making friends</BlogP>
                            </li>
                            <li>
                                <BlogP>Anxiety about social activities</BlogP>
                            </li>
                            <li>
                                <BlogP>Keeping a daily routine and getting upset if it changes</BlogP>
                            </li>
                            <li>
                                <BlogP>Having a hard time expressing how you feel</BlogP>
                            </li>
                            <li>
                                <BlogP>Taking things literally or not understanding sarcasm</BlogP>
                            </li>
                            <li>
                                <BlogP>Coming off as blunt, uninterested, or rude to others without meaning to</BlogP>
                            </li>
                            <li>
                                <BlogP>Avoiding eye contact</BlogP>
                            </li>
                            <li>
                                <BlogP>Having to consciously work out social rules/conversation topics before a social event</BlogP>
                            </li>
                        </ul>

                        <BlogHeader>When to consult a mental health professional?</BlogHeader>
                        <ul className="space-y-5 pl-8">
                            <li>
                                <BlogP>If symptoms significantly interfere with daily life or relationships.</BlogP>
                            </li>
                            <li>
                                <BlogP>If social challenges make it difficult to form or maintain friendships.</BlogP>
                            </li>
                            <li>
                                <BlogP>If sensory sensitivities cause distress in public places or daily routines.</BlogP>
                            </li>
                            <li>
                                <BlogP>If difficulties with change and routines lead to extreme anxiety or frustration.</BlogP>
                            </li>
                            <li>
                                <BlogP>If emotional regulation struggles result in frequent meltdowns or shutdowns.</BlogP>
                            </li>
                            <li>
                                <BlogP>If work or school challenges, like organization or burnout, affect performance.</BlogP>
                            </li>
                            <li>
                                <BlogP>If coping strategies no longer work, or symptoms worsen over time.</BlogP>
                            </li>
                        </ul>

                        <BlogHeader>Screening and Diagnosis</BlogHeader>
                        <BlogP>
                            Screening and Diagnosis begin with mental health professionals using clinical interviews and screening
                            assessments such as the Autism Spectrum Quotient (AQ) or other screening tools. A psychiatrist, psychologist, or
                            neurologist conducts a detailed assessment, which may include clinical interviews, behavioral observations,
                            cognitive tests, and reviewing developmental history.
                        </BlogP>

                        <BlogHeader>Myth Vs Facts</BlogHeader>
                        <BlogHeader>Autism Is Just a Quirk or Personality Trait </BlogHeader>
                        <BlogP>
                            Fact: Autism is a neurodevelopmental condition that affects communication, sensory processing, and daily life.
                        </BlogP>
                        <BlogP>
                            Myth: Autism can be &quot;cured.&quot; Fact: autism is not an illness; it is a neurological difference. Support and
                            accommodations help autistic individuals thrive.
                        </BlogP>
                        <BlogHeader>“Autistic People Lack Empathy”</BlogHeader>
                        <BlogP>
                            One of the most persistent myths about autism is that autistic individuals lack empathy. However, research and
                            lived experiences show a more nuanced reality.{" "}
                        </BlogP>
                        <BlogP>
                            Like Sheldon Cooper, autistic people experience empathy differently, not less and some autistic people may not
                            express emotions in a way that neurotypical individuals expect (e.g., less eye contact, different facial
                            expressions, or atypical social responses). This can lead to the false assumption that ‘they do not care’ when
                            in reality, they may be overwhelmed or unsure of how to respond.{" "}
                        </BlogP>
                        <BlogHeader>Actionable strategies</BlogHeader>

                        <ul className="space-y-5 pl-8">
                            <li>
                                <BlogP>
                                    Create Predictability and Structure in Daily Life: Use routines and schedules to reduce uncertainty and
                                    anxiety (e.g., planners, visual timetables, reminders)
                                </BlogP>
                            </li>
                            <li>
                                <BlogP>
                                    Focus on Strengths and Self-Growth: Identify personal strengths and interests, then use them to build
                                    confidence (e.g., creative outlets, problem-solving skills, special interests).
                                </BlogP>
                            </li>
                            <li>
                                <BlogP>
                                    Seek professional Support and build a Support Network: Work with specialists like psychiatrists,
                                    therapists, or psychologists to develop coping strategies.
                                </BlogP>
                            </li>
                        </ul>
                    </div>
                    <div className="flex min-w-1/4 flex-col gap-6">
                        <h3 className="font-popins text-2xl font-bold">Latest Post</h3>

                        <div className="grid-col-1 mb-4 grid gap-6">
                            {latestPosts && latestPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BlogHeader({ children }: { children: React.ReactNode }) {
    return <h4 className="font-inter text-muted text-2xl font-bold tracking-wide">{children}</h4>;
}

function BlogP({ children, italic = false }: { children: React.ReactNode; italic?: boolean }) {
    return <p className={cn("font-inter text-muted text-justify", italic ? "italic" : "")}>{children}</p>;
}
