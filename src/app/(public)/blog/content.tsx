import { BlogPost } from "@/actions/blog.action";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ContentOne({ post }: { post: BlogPost }) {
    return (
        <>
            <div className="relative aspect-5/3 w-full">
                <Image src={post.image} alt={post.title} fill className="rounded-xl object-cover" />
            </div>

            <BlogHeader>What is OCD?</BlogHeader>
            <BlogP>
                OCD, or Obsessive-Compulsive Disorder, is an anxiety-based disorder in which individuals experience unwanted and intrusive
                thoughts, images, or urges.
            </BlogP>
            <BlogP>
                These obsessions can cause extreme anxiety or discomfort, leading to the need to perform certain actions (compulsions) or
                rituals to neutralize or counteract these thoughts.
            </BlogP>

            <BlogP>
                These compulsions may be repetitive and are often done in a specific order or manner, creating a sense of relief but
                ultimately reinforcing the cycle of anxiety. The compulsions provide temporary comfort but do not address the root cause of
                the obsession, leading to a continuous loop of distress and ritualistic behavior.
            </BlogP>

            <BlogP>
                While many people use the term “OCD” to describe a preference for neatness or order, the disorder goes much deeper than
                that. OCD is not simply about liking things in a particular place; it’s about the overwhelming need to perform these actions
                to provide relief, even if the individual recognizes that the behaviors are irrational.
            </BlogP>

            <BlogHeader>What are the first signs of OCD?</BlogHeader>
            <BlogP>
                The first signs of OCD are often subtle and can easily be dismissed and misunderstood. People may start to notice repetitive
                thoughts or an overwhelming urge to perform certain actions that temporarily reduce their anxiety.
            </BlogP>
            <BlogP>
                Early symptoms include intrusive thoughts related to cleanliness, harm, or order, which may lead to behaviors like
                handwashing, checking, or arranging items in a particular way. A person might start avoiding situations or objects they
                associate with contamination or danger, etc, and they may feel a sense of relief once they perform a compulsive action, such
                as counting or cleaning, which are the common ones. Over time, these rituals can take up more and more time, interfering
                with daily activities and relationships.
            </BlogP>
            <BlogP>
                It is important to recognize these early signs and seek help before the condition becomes more disruptive. Although OCD may
                begin with seemingly harmless routines, it can evolve into a debilitating disorder without proper management.
            </BlogP>
            <BlogHeader>Functional vs dysfunctional routines</BlogHeader>
            <BlogP>
                Routines can be an important part of life, helping to structure the day and provide a sense of control. Functional routines
                are those that help people stay organized, maintain personal hygiene, or manage time effectively. For example, someone might
                have a routine of washing their hands before meals or organizing their desk at work to stay productive. These routines are
                reasonable and contribute to personal well-being without causing significant stress.
            </BlogP>
            <BlogP>
                On the other hand, dysfunctional routines are driven by the need to alleviate anxiety. For instance, a person with OCD may
                wash their hands repeatedly for hours, not because they are dirty, but because they feel an overwhelming need to make sure
                it’s clean, and failure to do so may lead to certain consequences, which may not always make sense. This behavior interferes
                with their ability to engage in normal activities, such as work or socializing, and leads to emotional distress.
            </BlogP>
            <BlogP>Recognizing the shift from functional to dysfunctional routines is crucial for seeking appropriate support.</BlogP>
            <BlogHeader>Myths vs Facts</BlogHeader>

            <BlogP>
                Several myths about OCD can contribute to misunderstandings and the stigmatization of those who suffer from the disorder.
            </BlogP>
            <BlogP>
                One common myth is that OCD is simply about being neat and organized. In reality, OCD is far more complex and involves a
                person being overwhelmed by intrusive thoughts and the compulsion to perform certain actions to alleviate anxiety.
            </BlogP>
            <BlogP>
                Another myth is that people with OCD can just “stop” their compulsive behaviors if they try harder. This is not the case.
                OCD is a mental health condition that often requires professional support, including Cognitive Behavioral Therapy (CBT) and
                sometimes medication. It is not something that people can simply “will away.”
            </BlogP>
            <BlogP>
                Finally, many people believe that everyone has a little bit of OCD. While many people may have preferences for cleanliness
                or order, OCD is a clinical disorder that significantly impairs a person’s ability to function. It’s not just about liking
                things in a certain way; it’s about the overwhelming need to perform rituals to prevent anxiety or perceived harm and how
                these compulsions may interfere with daily life.
            </BlogP>
            <BlogHeader>Actionable Tips to Manage OCD</BlogHeader>
            <BlogP>
                Managing OCD requires a multi-faceted approach. If you or someone you know is struggling with OCD, here are some actionable
                tips. (Keep in mind that a combination of all three is the most effective method rather than following only either of the
                three methods) :
            </BlogP>
            <ul className="space-y-5 pl-8">
                <li>
                    <BlogP>
                        1. Seek professional help: The first step in managing OCD is consulting with a mental health professional. Cognitive
                        Behavioral Therapy (CBT), specifically a form called Exposure and Response Prevention (ERP), is considered the gold
                        standard in managing OCD.
                    </BlogP>
                </li>
                <li>
                    <BlogP>
                        2. Practice mindfulness: Mindfulness and relaxation techniques can help reduce the anxiety associated with obsessive
                        thoughts. Focusing on the present moment rather than getting caught in the cycle of obsession and compulsion can
                        provide relief.
                    </BlogP>
                </li>
                <li>
                    <BlogP>
                        3. Create a support system: Having a strong support network of family, friends, or a support group can provide
                        encouragement and understanding. OCD can be isolating, but talking to others who understand the disorder can help
                        reduce feelings of isolation.
                    </BlogP>
                </li>
            </ul>
        </>
    );
}

export function ContentTwo({ post }: { post: BlogPost }) {
    return (
        <>
            <div className="relative aspect-5/3 w-full">
                <Image src={post.image} alt={post.title} fill className="rounded-xl object-cover" />
            </div>

            <BlogHeader>Signs of Autism in Adults: What to Look For?</BlogHeader>

            <BlogP italic={true}>
                Struggling with social cues or feeling overwhelmed by change ? Subtle signs of autism in adults might explain the way you
                experience the world.
            </BlogP>

            <BlogP>
                Here is a guide to understanding dysfunction, recognizing symptoms, and knowing when to seek professional help. Getting an
                appropriate diagnosis can be life-altering!
            </BlogP>

            <BlogHeader>Introduction</BlogHeader>

            <BlogP>
                Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how a person thinks, feels, and interacts with
                the world around them. People with autism may have difficulty understanding social cues, struggle with communication, or
                prefer routines and specific interests.
            </BlogP>

            <BlogP>
                Autism exists on a spectrum, meaning it looks different for everyone—some people need a lot of support in daily life, while
                others may not. It’s not an illness but a different way of experiencing the world. With the right support, autistic
                individuals can thrive in their unique way.
            </BlogP>

            <BlogHeader>Functional vs Dysfunctional Autism</BlogHeader>

            <BlogP>
                Individuals with autism often have unique strengths that can make certain aspects of life more functional, structured, or
                successful. These tendencies can be assets in various situations, particularly when they align with personal interests,
                career paths, or daily routines like hyperfocus on topics they are passionate about, leading to deep expertise.
            </BlogP>
            <BlogP>
                Autism can become dysfunctional when symptoms significantly interfere with daily life, relationships, and responsibilities.
                This might include extreme difficulty understanding social cues, leading to isolation, sensory sensitivities that make
                public spaces overwhelming, or rigid routines that create distress when disrupted. Executive dysfunction can result in
                struggles with organization, time management, and self-care, while emotional regulation challenges may cause intense
                meltdowns or shutdowns.
            </BlogP>
            <BlogP>
                Autism symptoms often involve challenges with social communication, sensory processing, and flexibility. This can manifest
                as difficulty maintaining eye contact, sensitivity to loud noises or bright lights, and a strong preference for routines.
                When these difficulties lead to struggles at personal life or workplace, strained relationships, or persistent anxiety,
                seeking support can be crucial for improving overall well-being.
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
                Screening and Diagnosis begin with mental health professionals using clinical interviews and screening assessments such as
                the Autism Spectrum Quotient (AQ) or other screening tools. A psychiatrist, psychologist, or neurologist conducts a detailed
                assessment, which may include clinical interviews, behavioral observations, cognitive tests, and reviewing developmental
                history.
            </BlogP>

            <BlogHeader>Myth Vs Facts</BlogHeader>
            <BlogHeader>Autism Is Just a Quirk or Personality Trait </BlogHeader>
            <BlogP>Fact: Autism is a neurodevelopmental condition that affects communication, sensory processing, and daily life.</BlogP>
            <BlogP>
                Myth: Autism can be &quot;cured.&quot; Fact: autism is not an illness; it is a neurological difference. Support and
                accommodations help autistic individuals thrive.
            </BlogP>
            <BlogHeader>“Autistic People Lack Empathy”</BlogHeader>
            <BlogP>
                One of the most persistent myths about autism is that autistic individuals lack empathy. However, research and lived
                experiences show a more nuanced reality.
            </BlogP>
            <BlogP>
                Like Sheldon Cooper, autistic people experience empathy differently, not less and some autistic people may not express
                emotions in a way that neurotypical individuals expect (e.g., less eye contact, different facial expressions, or atypical
                social responses). This can lead to the false assumption that ‘they do not care’ when in reality, they may be overwhelmed or
                unsure of how to respond.
            </BlogP>
            <BlogHeader>Actionable strategies</BlogHeader>

            <ul className="space-y-5 pl-8">
                <li>
                    <BlogP>
                        Create Predictability and Structure in Daily Life: Use routines and schedules to reduce uncertainty and anxiety
                        (e.g., planners, visual timetables, reminders)
                    </BlogP>
                </li>
                <li>
                    <BlogP>
                        Focus on Strengths and Self-Growth: Identify personal strengths and interests, then use them to build confidence
                        (e.g., creative outlets, problem-solving skills, special interests).
                    </BlogP>
                </li>
                <li>
                    <BlogP>
                        Seek professional Support and build a Support Network: Work with specialists like psychiatrists, therapists, or
                        psychologists to develop coping strategies.
                    </BlogP>
                </li>
            </ul>
        </>
    );
}

export function ContentThree({ post }: { post: BlogPost }) {
    return (
        <>
            <div className="relative aspect-5/3 w-full">
                <Image src={post.image} alt={post.title} fill className="rounded-xl object-cover" />
            </div>

            <BlogHeader>How to Get an ADHD Diagnosis: A Step-by-Step Guide</BlogHeader>

            <BlogP italic={true}>
                ADHD impacts everyday life in subtle and significant ways. Here is a guide to understanding dysfunction, recognizing
                symptoms, and knowing when to seek professional help. Getting an appropriate diagnosis can be life-altering!
            </BlogP>

            <BlogHeader>Introduction</BlogHeader>
            <BlogP>
                Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects attention, impulsivity, or
                hyperactivity. While often associated with children, many adults also struggle with undiagnosed ADHD, impacting their
                careers, relationships, and self-esteem. Recognizing ADHD is the first step toward a better life. Some individuals with ADHD
                function comparatively well in daily life by using coping mechanisms, while others experience significant struggles.
            </BlogP>
            <BlogP>This guide explores how ADHD presents in daily life and the step-by-step process to get diagnosed.</BlogP>
            <BlogHeader>Functional vs. Dysfunctional ADHD in Daily Life</BlogHeader>
            <BlogP>
                Some individuals with ADHD develop compensatory strategies that allow them to function relatively well. These might include
                using calendars, setting reminders, breaking tasks into small steps, or engaging in highly structured work environments.
                While challenges still exist, they do not significantly disrupt daily life. Many individuals try to have fixed routines and
                strict time management regimes, and when those plans get affected due to unforeseen circumstances, it may lead to distress,
                frustration, and irritability. Individuals who are great at portraying everything is alright, may eventually face burnout or
                exhaustion.
            </BlogP>
            <BlogP>
                However, ADHD can become dysfunctional when symptoms interfere with essential responsibilities. This includes chronic
                forgetfulness that leads to missed deadlines, impulsivity that affects relationships, or an inability to complete tasks that
                results in job loss. Dysfunctional ADHD can negatively impact self-care, relationships, and professional growth, making it
                important to seek help when these issues become overwhelming.
            </BlogP>
            <BlogP>ADHD symptoms include difficulty focusing, impulsivity, and hyperactivity.</BlogP>
            <BlogP>
                This might look like zoning out during conversations, starting tasks but never finishing them, or acting on impulses without
                thinking. Many adults with ADHD struggle with time management, forgetfulness, and emotional regulation. They may also
                experience constant mental restlessness, making it hard to relax or stay organized.
            </BlogP>

            <BlogHeader>Step-by-Step Guide to Getting an ADHD Diagnosis</BlogHeader>
            <BlogHeader>Step 1: Recognize the Symptoms</BlogHeader>
            <BlogP>Before seeking a diagnosis, familiarize yourself with the symptoms of ADHD in adults. Common signs include:</BlogP>
            <ul className="space-y-5 pl-8">
                <li>
                    <BlogP> Difficulty maintaining focus on tasks</BlogP>
                </li>
                <li>
                    <BlogP> Procrastination</BlogP>
                </li>
                <li>
                    <BlogP> Impulsive/hyperactive in speech or actions</BlogP>
                </li>
                <li>
                    <BlogP> Poor time management</BlogP>
                </li>
                <li>
                    <BlogP> Struggles with organization</BlogP>
                </li>
                <li>
                    <BlogP> Frequent forgetfulness</BlogP>
                </li>
                <li>
                    <BlogP> Restlessness or difficulty relaxing</BlogP>
                </li>
            </ul>

            <BlogHeader>Step 2: Take a Self-Assessment</BlogHeader>
            <BlogP>
                While online tools are not a substitute for a professional diagnosis, they can help determine if you should seek further
                evaluation. Consider taking a validated ADHD self-screening test like the Adult ADHD Self-Report Scale (ASRS).\
            </BlogP>
            <BlogHeader>Step 3: Find a Qualified Professional</BlogHeader>
            <BlogP>Look for a mental health provider or medical professional specializing in ADHD evaluations. Options include:</BlogP>
            <ul className="space-y-5 pl-8">
                <li>
                    <BlogP>Psychologists</BlogP>
                </li>
                <li>
                    <BlogP>Psychiatrists</BlogP>
                </li>
                <li>
                    <BlogP>Primary care physicians (who may refer you to a specialist)</BlogP>
                </li>
            </ul>

            <BlogP>
                <strong>Tip:</strong> Search online using &quot;ADHD Diagnosis Near Me&quot; to find specialists in your area.
            </BlogP>
            <BlogHeader>Step 4: Schedule an Evaluation</BlogHeader>
            <BlogP>Once you find a provider, schedule an appointment. You may discuss:</BlogP>

            <ul className="space-y-5 pl-8">
                <li>
                    <BlogP>Your day-to-day difficulties, issues that are bothering you, worrying you, or keeping you up at night.</BlogP>
                </li>
                <li>
                    <BlogP>The kind of environment you grew up in.</BlogP>
                </li>
                <li>
                    <BlogP>Childhood behaviors (if possible, bring past school records or ask family members for insights)</BlogP>
                </li>
            </ul>

            <BlogHeader>Step 5: Undergo Comprehensive Testing</BlogHeader>
            <BlogP>A professional ADHD evaluation typically includes:</BlogP>
            <ul className="space-y-5 pl-8">
                <li>
                    <BlogP>Clinical interviews</BlogP>
                </li>
                <li>
                    <BlogP>Behavioral assessments</BlogP>
                </li>
                <li>
                    <BlogP>Questionnaires (filled out by you and possibly close family or friends)</BlogP>
                </li>
            </ul>

            <BlogP>This process ensures an accurate diagnosis and rules out other potential conditions.</BlogP>
            <BlogHeader>Step 6: Receive Your Diagnosis and Management Plan</BlogHeader>

            <BlogP>
                After an assessment, your provider will determine whether you meet the criteria for ADHD. If diagnosed, they may discuss
                management options such as:
            </BlogP>

            <ul className="space-y-5 pl-8">
                <li>
                    <BlogP>Medication (stimulants or non-stimulants)</BlogP>
                </li>
                <li>
                    <BlogP>Cognitive Behavioral Therapy (CBT)</BlogP>
                </li>
                <li>
                    <BlogP>Coaching or executive function support</BlogP>
                </li>
                <li>
                    <BlogP>Lifestyle adjustments (diet, exercise, mindfulness)</BlogP>
                </li>
            </ul>

            <BlogHeader>The Psychological Perspective on ADHD</BlogHeader>
            <BlogP>
                From a psychological standpoint, ADHD is viewed as a disorder of executive function—affecting working memory,
                self-regulation, and impulse control. Therapists and psychologists assess how ADHD impacts an individual&apos;s daily life
                and mental health using a detailed interview.
            </BlogP>
            <BlogP>
                Managements often involve behavioral interventions like Cognitive Behavioral Therapy (CBT), which helps individuals develop
                coping mechanisms, improve time management, and regulate emotions. The psychological perspective focuses on behavior
                modification, environmental structuring, and emotional resilience to help individuals manage their ADHD symptoms
                effectively.
            </BlogP>
            <BlogHeader>FAQs</BlogHeader>

            <BlogHeader>1. Can I get an ADHD diagnosis online? </BlogHeader>
            <BlogP>
                Yes, some telehealth services offer ADHD evaluations, but it is always advised to have an in-person appointment and ensure
                the provider is licensed and follows proper diagnostic protocols.
            </BlogP>

            <BlogHeader>2. How long does the ADHD diagnosis process take? </BlogHeader>
            <BlogP>It varies from place to place but typically involves one to three appointments.</BlogP>

            <BlogHeader>3. Can ADHD be misdiagnosed? </BlogHeader>
            <BlogP>
                Yes. Conditions like anxiety, depression, and sleep disorders share and mask symptoms with ADHD. A thorough evaluation helps
                ensure accuracy.
            </BlogP>
            <BlogP>
                If you suspect you have ADHD, don’t hesitate to seek a professional evaluation. Getting diagnosed can be life-changing,
                providing clarity and access to helpful managements.
            </BlogP>
            <BlogP>Poll: Have you been diagnosed with ADHD as an adult? Share your experience in the comments!</BlogP>
        </>
    );
}

function BlogHeader({ children }: { children: React.ReactNode }) {
    return <h4 className="font-inter text-muted text-2xl font-bold tracking-wide">{children}</h4>;
}

function BlogP({ children, italic = false }: { children: React.ReactNode; italic?: boolean }) {
    return <p className={cn("font-inter text-muted text-justify", italic ? "italic" : "")}>{children}</p>;
}
