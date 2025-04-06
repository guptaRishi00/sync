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
    console.log(slug);

    const post = await getPost("1");
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

                        <BlogHeader>What is OCD?</BlogHeader>
                        <BlogP>
                            OCD, or Obsessive-Compulsive Disorder, is an anxiety-based disorder in which individuals experience unwanted and
                            intrusive thoughts, images, or urges.
                        </BlogP>
                        <BlogP>
                            These obsessions can cause extreme anxiety or discomfort, leading to the need to perform certain actions
                            (compulsions) or rituals to neutralize or counteract these thoughts.
                        </BlogP>

                        <BlogP>
                            These compulsions may be repetitive and are often done in a specific order or manner, creating a sense of relief
                            but ultimately reinforcing the cycle of anxiety. The compulsions provide temporary comfort but do not address
                            the root cause of the obsession, leading to a continuous loop of distress and ritualistic behavior.
                        </BlogP>

                        <BlogP>
                            While many people use the term “OCD” to describe a preference for neatness or order, the disorder goes much
                            deeper than that. OCD is not simply about liking things in a particular place; it’s about the overwhelming need
                            to perform these actions to provide relief, even if the individual recognizes that the behaviors are irrational.
                        </BlogP>

                        <BlogHeader>What are the first signs of OCD?</BlogHeader>
                        <BlogP>
                            The first signs of OCD are often subtle and can easily be dismissed and misunderstood. People may start to
                            notice repetitive thoughts or an overwhelming urge to perform certain actions that temporarily reduce their
                            anxiety.
                        </BlogP>
                        <BlogP>
                            Early symptoms include intrusive thoughts related to cleanliness, harm, or order, which may lead to behaviors
                            like handwashing, checking, or arranging items in a particular way. A person might start avoiding situations or
                            objects they associate with contamination or danger, etc, and they may feel a sense of relief once they perform
                            a compulsive action, such as counting or cleaning, which are the common ones. Over time, these rituals can take
                            up more and more time, interfering with daily activities and relationships.
                        </BlogP>
                        <BlogP>
                            It is important to recognize these early signs and seek help before the condition becomes more disruptive.
                            Although OCD may begin with seemingly harmless routines, it can evolve into a debilitating disorder without
                            proper management.
                        </BlogP>
                        <BlogHeader>Functional vs dysfunctional routines</BlogHeader>
                        <BlogP>
                            Routines can be an important part of life, helping to structure the day and provide a sense of control.
                            Functional routines are those that help people stay organized, maintain personal hygiene, or manage time
                            effectively. For example, someone might have a routine of washing their hands before meals or organizing their
                            desk at work to stay productive. These routines are reasonable and contribute to personal well-being without
                            causing significant stress.
                        </BlogP>
                        <BlogP>
                            On the other hand, dysfunctional routines are driven by the need to alleviate anxiety. For instance, a person
                            with OCD may wash their hands repeatedly for hours, not because they are dirty, but because they feel an
                            overwhelming need to make sure it’s clean, and failure to do so may lead to certain consequences, which may not
                            always make sense. This behavior interferes with their ability to engage in normal activities, such as work or
                            socializing, and leads to emotional distress.
                        </BlogP>
                        <BlogP>
                            Recognizing the shift from functional to dysfunctional routines is crucial for seeking appropriate support.
                        </BlogP>
                        <BlogHeader>Myths vs Facts</BlogHeader>

                        <BlogP>
                            Several myths about OCD can contribute to misunderstandings and the stigmatization of those who suffer from the
                            disorder.{" "}
                        </BlogP>
                        <BlogP>
                            One common myth is that OCD is simply about being neat and organized. In reality, OCD is far more complex and
                            involves a person being overwhelmed by intrusive thoughts and the compulsion to perform certain actions to
                            alleviate anxiety.
                        </BlogP>
                        <BlogP>
                            Another myth is that people with OCD can just “stop” their compulsive behaviors if they try harder. This is not
                            the case. OCD is a mental health condition that often requires professional support, including Cognitive
                            Behavioral Therapy (CBT) and sometimes medication. It is not something that people can simply “will away.”
                        </BlogP>
                        <BlogP>
                            Finally, many people believe that everyone has a little bit of OCD. While many people may have preferences for
                            cleanliness or order, OCD is a clinical disorder that significantly impairs a person’s ability to function. It’s
                            not just about liking things in a certain way; it’s about the overwhelming need to perform rituals to prevent
                            anxiety or perceived harm and how these compulsions may interfere with daily life.
                        </BlogP>
                        <BlogHeader>Actionable Tips to Manage OCD</BlogHeader>
                        <BlogP>
                            Managing OCD requires a multi-faceted approach. If you or someone you know is struggling with OCD, here are some
                            actionable tips. (Keep in mind that a combination of all three is the most effective method rather than
                            following only either of the three methods) :
                        </BlogP>
                        <ul className="space-y-5 pl-8">
                            <li>
                                <BlogP>
                                    1. Seek professional help: The first step in managing OCD is consulting with a mental health
                                    professional. Cognitive Behavioral Therapy (CBT), specifically a form called Exposure and Response
                                    Prevention (ERP), is considered the gold standard in managing OCD.
                                </BlogP>
                            </li>
                            <li>
                                <BlogP>
                                    2. Practice mindfulness: Mindfulness and relaxation techniques can help reduce the anxiety associated
                                    with obsessive thoughts. Focusing on the present moment rather than getting caught in the cycle of
                                    obsession and compulsion can provide relief.
                                </BlogP>
                            </li>
                            <li>
                                <BlogP>
                                    3. Create a support system: Having a strong support network of family, friends, or a support group can
                                    provide encouragement and understanding. OCD can be isolating, but talking to others who understand the
                                    disorder can help reduce feelings of isolation.{" "}
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

function BlogP({ children }: { children: React.ReactNode }) {
    return <p className="font-inter text-muted text-justify">{children}</p>;
}
