import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import CommitmentToPatientSection from "@/components/prefabs/commitement-to-patient-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import ProfileCard from "@/components/prefabs/profile-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
export default async function AboutPage() {
    return (
        <>
            <main className="main relative overflow-x-clip">
                <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                <HeroSection />
            </main>

            <main className="main relative overflow-x-clip md:min-h-fit!">
                <MeetOurExpertSection />
            </main>

            <main className="main bg-secondary/20 relative">
                <VisionSection />
            </main>

            <main className="main md:min-h-fit!">
                <CommitmentToPatientSection />
            </main>

            <main className="main hidden overflow-hidden py-8">
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

function HeroSection() {
    return (
        <section className="section flex flex-col gap-4 py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header />
            </div>

            <div className="flex flex-col items-start gap-5 md:items-start">
                <h2 className="font-popins relative inline text-3xl font-semibold md:text-5xl">
                    SyNC <span className="text-accent">Positive</span> Psychiatry Foundation
                    <DecorImage
                        src="/images/decor-smile.png"
                        alt="Decor Smile"
                        size={[42, 42]}
                        className="top-0 right-0 -translate-y-full md:translate-x-full"
                    />
                </h2>

                <p className="text-muted font-popins text-justify text-sm font-medium md:text-lg">
                    103-C, 30th Cross Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560070, India
                </p>
            </div>

            <div className="flex grow flex-col justify-center">
                <div className="grid-row-4 grid grow auto-rows-fr grid-cols-1 gap-8 py-4 md:grid-cols-2 md:grid-rows-2 [&_img]:overflow-hidden [&>div]:rounded-2xl">
                    <div className="relative row-span-2">
                        <Image src="/images/about-hero-1.jpg" alt="Hero Thumbnail" fill className="rounded-2xl object-cover" />

                        <DecorImage
                            src="/images/decor-plant.png"
                            alt="Decor Plant"
                            size={[286, 286]}
                            className="md:Translate-y-1/8 bottom-0 left-0 z-0 -translate-x-1/2 translate-y-1/4 scale-50"
                        />
                    </div>
                    <div className="relative grow">
                        <Image src="/images/about-hero-2.jpg" alt="Hero Thumbnail" fill className="rounded-2xl object-cover" />
                        <DecorImage
                            src="/images/decor-highlight-1.png"
                            alt="Decor Highlight"
                            size={[52, 52]}
                            className="top-0 right-0 translate-x-3/4 -translate-y-3/4"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h2 className="font-popins relative w-fit text-2xl font-semibold md:text-4xl">
                            About the clinic
                            <DecorImage
                                src="/images/decor-love-primary.png"
                                alt="Decor Love"
                                size={[32, 32]}
                                className="top-0 right-0 translate-x-full md:-translate-y-full"
                            />
                        </h2>
                        <p className="text-muted font-popins text-justify text-sm font-normal md:text-lg">
                            SyNC&apos; signifies the alignment of mind, body, and soul; it is our core philosophy. We prioritize
                            synchronizing these elements for a harmonizing approach.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MeetOurExpertSection() {
    const profiles = [
        {
            name: "Dr.Vinod Kumar",
            designation: "Psychiatrist & Founder - SyNC Positive Psychiatry Foundation",
            about: "Embarking from the UK's renowned National Health Service to being the founder of SyNC Positive Psychiatry, Bangalore, Dr. Vinod Kumar brings over a decade of world-class psychiatric and psychotherapeutic expertise. With MRCPsych and specialized certifications in Liaison Psychiatry and Eating Disorders, his training spans diverse therapeutic modalities, shaping his comprehensive approach. Beyond the clinical, he sees how our stories, our very essence, are woven into the fabric of our well-being. Extending his holistic expertise, Dr. Kumar has established an innovative clinical service for Neurodivergence (ASD) and Adult ADHD, coupled with active research to improve mental health care. His mission? Personalized, dynamic mental health care that meets you where you are.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Dr.Vinod Kumar.png",
        },
        {
            name: "Dr. Anupama Bajaj",
            designation: "Psychologist",
            about: "Anupama, with over 10+ years of experience, guides individuals, couples, and families through life's challenges, including ADHD, ASD, OCD, PTSD, anxiety, grief, sex, depression, phobias, insomnia, personality disorders, and relationship issues. Her journey, enriched by Art Therapy and a Ph.D. in Psychology, translates into a transformative, empathetic, and evidence-based approach, creating a safe space for clients. She empowers clients to break barriers and unlock self-growth, blending scientific knowledge with heartfelt support for a happier, healthier life.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Dr. Anupama Bajaj.png",
        },
        {
            name: "Dr Poornima Chandrashekar",
            designation: "Clinical Psychologist. Expert in Child, Adolescent & Family Mental Health",
            about: "Dr. Poornima C, a Clinical Psychologist with over 14+ years of experience, specializes in child, adolescent, and family mental health. Holding an M.Phil. and Ph.D. from NIMHANS, she has contributed significantly to research in OCD, child psychiatry, and caregiver stress. Her client-centered approach, utilizing CBT and family interventions, is personalized to meet each individual's needs. A recognized expert, she presents research papers at conferences and publishes on parenting styles, and is trained in SPACE, a parent-based treatment for child anxiety and OCD. Outside of her professional life, she enjoys traveling, dining, and spending time with family and her dogs.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Dr Poornima.png",
        },
        {
            name: "Kala Bhandari",
            designation: "Counselling Psychologist",
            about: "Ms. Kala Bhandari, a compassionate Counsellor & Therapist, specializes in Behavioral, Relationship, Marriage, and Family Counselling. Certified in CBT and Personal Counselling, she employs a holistic, client-centered, and trauma-informed approach, integrating narrative therapy, mindfulness, and behavioral techniques. With mentorship from Dr. Vinod Kumar and her extensive experience, she guides individuals, couples in their marriage and families through challenges like anxiety, depression, adolescent concerns, and career/goal setting, creating a safe space for healing and positive transformation.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Kala.png",
        },
        {
            name: "Mehek Gill",
            designation: "Psychologist",
            about: "Mehak Gill, M.Sc. Clinical Psychology (Christ University) offers a joyful, compassionate, and empowering therapeutic approach. She creates a safe, supportive space where clients feel heard and valued, using an eclectic, solution-focused method that integrates empathy, self-care, and mindfulness. Tailoring sessions to build resilience and reshape thought patterns, she guides individuals through challenges like grief, anxiety, and ADHD, fostering clarity, strength, and well-being. With Mehak, therapy isn’t just about healing—it’s about thriving.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Mehek.png",
        },
        {
            name: "Esha Jiani",
            designation: "Psychologist",
            about: "Esha, holding a Master’s in Clinical Psychology, specializes in supporting young adults with relationship issues, anxiety, and emotional regulation. Her approach helps the client understand their experiences and provides them the skills to articulate their stories, fostering deeper self-awareness, self-compassion, and growth. Fluent in English and Hindi, she is passionate about guiding clients to achieve a more balanced and fulfilling life. Beyond therapy, Esha is deeply passionate about books in philosophy, psychology, fiction, art, nature, spirituality, and sports, believing that creativity and connection fuel emotional well-being—both in herself and in those she helps.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Esha.png",
        },
        {
            name: "P Kalyan",
            designation: "Psychologist",
            about: "Kalyan, M.Sc. Clinical Psychology offers a client-centered, analytical approach to therapy, specializing in ADHD, anxiety, interpersonal conflicts, emotional regulation, and autism. With 2+ years of experience and 100+ clients, he provides a trauma-informed, queer-affirmative space where clients feel seen and heard. Drawing from his own experience with ADHD and the queer community, and leveraging expertise from NIMHANS and PESI USA, he ensures his practice is informed by the latest research. Fluent in English, Hindi, and Telugu, Kalyan integrates mindfulness into his work. He helps clients navigate the ups and downs of life while teaching them to harness their intuitive abilities.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Kalyan.png",
        },
        {
            name: "Vani Mitti",
            designation: "Psychologist",
            about: "Vani Mitti, with a Master’s in Psychology from Annamalai University and specialized training in child psychology and counselling, brings over a decade of experience in child development centers, neuropsychiatry hospitals, and schools. Her expertise includes IQ, ASD, and ADHD assessments, and evidence-based therapies like Behavioral Therapy, CBT, and Habit Reversal Therapy. She also offers Parent Counselling to improve family dynamics. Fluent in English, Kannada, and Hindi, Vani creates a safe, supportive environment, tailoring therapy to individual needs with empathy and a solution-focused approach. Outside of work, she enjoys reading and singing and is dedicated to empowering clients to reach their full potential.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Vani.png",
        },
        {
            name: "Raunak Jain",
            designation: "Psychologist",
            about: "Raunak Jain, with a postgraduate degree in Clinical Psychology and experience from NIMHANS, creates a safe, empathetic, and collaborative therapeutic space. Utilizing a biopsychosocial approach and emphasizing the mind-body connection, she provides personalized, holistic care. Her expertise spans ADHD coaching, anxiety, depression, and relationship issues, integrating design thinking, positive psychology, and postmodern therapies, including narrative therapy and mindfulness. Outside of therapy, she enjoys exploring coffee and herbal teas, reflecting her commitment to curiosity and growth.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Raunak.png",
        },
        {
            name: "Dr. Harsh P Jain",
            designation: "Physician",
            about: "Dr. Harsh P. Jain, MBBS, a physician on a path to pursue postgraduate studies in Psychiatry in the UK, is driven by a profound curiosity about the human mind and the mind-body-emotion-energ connection.  His warm, approachable demeanor, coupled with fluency in English, Hindi, Tamil, and Marwari, fosters strong client connections. Passionate about neurodivergence, Dr. Jain focuses on ADHD and related disorders, using his personal experience to connect with and empower clients. His goal is to guide individuals toward more fulfilling and balanced lives, helping them navigate their unique challenges. In his downtime, Dr. Jain enjoys swimming, badminton, and adventure sports, always seeking ways to embrace life with energy and enthusiasm.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Dr. Harsh.png",
        },
        {
            name: "Anusha Kolloji",
            designation: "Psychologist",
            about: "Anusha practices a humanistic, growth-oriented approach in her work. Holding an MSc in Psychological Counseling from IIPR, Bengaluru, she is dedicated to creating a safe and supportive space where clients feel heard, understood, and empowered while catering in three languages: English, Hindi, and Telugu. She is experienced in the management of neurodivergence, anxiety, depression, and interpersonal and relationship issues. She has attended training and workshops from esteemed institutions like NIMHANS, Bengaluru, to stay updated with advancements in the mental health field. Beyond therapy, she enjoys painting, hiking, and volunteering, finding joy in creative expression and community work. When not working, she loves to spend time petting animals, exploring new food and places.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Anusha Kolloji.png",
        },

        {
            name: "Darshana Kishore Gandhi",
            designation: "Clinical Psychologist",
            about: "Darshana Kishore Gandhi is an RCI-licensed Clinical Psychologist with an M.Phil in Clinical Psychology from DIMHANS, Dharwad. Her approach is integrative, client-centered, and insight-oriented, creating a safe space for healing and self-discovery. She works with emotional challenges, relationship issues, neurodivergence, addiction, and behavioral concerns, using evidence-based techniques while honoring each person’s unique journey. Beyond therapy, Darshana enjoys reading, writing, music, and dance, finding creativity essential to healing. Committed to lifelong learning, she continuously evolves as a practitioner, staying attuned to psychological advancements to offer thoughtful, effective care.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Darshana.png",
        },

        {
            name: "Richa Mehrotra",
            designation: "Clinical Psychologist",
            about: "Richa Mehrotra is an RCI-licensed Clinical Psychologist and Queer Affirmative Therapist with over four years of experience working with adolescents and adults. She specializes in depression, anxiety, obsessive-compulsive disorder (OCD), de-addiction, and interpersonal dynamics. She holds an M.Phil in Clinical Psychology from the Post Graduate Institute of Behaviour and Medical Sciences, Raipur. She has contributed to suicide prevention initiatives, including a project with the Mental Health Foundation, India, focused on Tihar Jail, Delhi. Richa adopts an eclectic therapeutic approach, tailoring interventions to meet the unique needs of clients and their families. She has a keen interest in cognitive, interpersonal, and diagnostic assessments. Fluent in English and Hindi, she is dedicated to providing a supportive and inclusive space for healing and growth.",
            // facebook: "https://www.facebook.com",
            // linkedin: "https://www.linkedin.com",
            // instagram: "https://www.instagram.com",
            profileImage: "/images/profiles/Richa.png",
        },
    ];

    return (
        <section className="section flex flex-col items-center py-8">
            <div className="font-popins relative flex items-center gap-2 font-semibold">
                <h2 className="text-2xl font-bold md:text-4xl">Meet Our</h2>
                <div className="from-primary-light to-primary rounded-sm bg-linear-to-r p-4">
                    <h2 className="text-2xl font-bold md:text-4xl">Expert Doctors</h2>
                </div>
                <DecorImage
                    src="/images/decor-love-primary.png"
                    alt="Decor Love"
                    size={[42, 42]}
                    className="top-0 -left-4 -translate-x-full rotate-y-180"
                />
            </div>

            <div className="w-full p-12">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="flex w-full flex-col gap-4"
                >
                    <CarouselContent className="">
                        {profiles.map((profile, index) => (
                            <CarouselItem key={index} className="grow md:basis-1/2 lg:basis-1/3">
                                <ProfileCard {...profile} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="bg-green flex items-center justify-center gap-4 [&>button]:relative! [&>button]:top-0! [&>button]:left-0! [&>button]:translate-0!">
                        <CarouselPrevious variant="default" />
                        <CarouselNext variant="default" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

function VisionSection() {
    const whyChooseUsList = [
        "Specialised care designed around you.",
        "Wellness beyond therapy.",
        "Ongoing care and connection - because well-being is a journey.",
        "Trusted space to grow and thrive.",
    ];
    return (
        <section className="section grid min-h-svh grid-flow-col grid-cols-1 grid-rows-6 gap-6 py-12 md:grid-cols-3 md:grid-rows-2 [&>div]:overflow-hidden [&>div]:rounded-2xl">
            <div className="bg-primary-light flex flex-col items-start justify-start gap-4 p-6 md:p-12">
                <h2 className="font-popins text-3xl font-semibold md:text-5xl">Mission</h2>
                <p className="font-popins text-lg font-normal">
                    Revolutionize brain health and emotional wellness. We have accessible and sustainable care solutions, empowering
                    individuals to achieve peace, productivity, and prosperity.
                </p>
            </div>
            <div className="col-span-2 flex flex-col items-start justify-between gap-8 bg-white p-6 md:p-12">
                <div className="flex flex-col items-start justify-start gap-8">
                    <h2 className="font-popins text-3xl font-semibold md:text-5xl">Why Choose Us?</h2>

                    <ul className="flex list-none flex-col items-start gap-3">
                        {whyChooseUsList.map((item, index) => (
                            <li key={index} className="font-popins flex items-center gap-2 text-lg font-normal">
                                <CircleCheck size={14} className="stroke-secondary-light" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <BookAppointmentButton className="place-self-start" />
            </div>
            <div className="bg-primary flex flex-col items-start justify-start gap-4 p-6 md:p-12">
                <h2 className="font-popins text-3xl font-semibold md:text-5xl">Vision</h2>
                <p className="font-popins text-lg font-normal">
                    To be a global leader in brain health optimization and emotional wellness, fostering innovation and community engagement
                    to create a healthier, more resilient world.
                </p>
            </div>
            <div className="relative row-span-2">
                <Image src="/images/decor-missin-bg.png" alt="Hero Vision" fill className="object-cover" />
            </div>
        </section>
    );
}
