import { StrapiImage } from "@/components/custom/StrapiImage";
import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import CommitmentToPatientSection from "@/components/prefabs/commitement-to-patient-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import ProfileCard from "@/components/prefabs/profile-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getAboutData, getGlobalData } from "@/data/loader";
import { CircleCheck } from "lucide-react";

export default async function AboutPage() {
    const globalres = await getGlobalData();
    const { decor_tree, decor_chair, join_news_letter, header } = globalres;

    const res = await getAboutData();

    const herosection = res.blocks.find((block: any) => block.__component === "blocks.hero-section");
    const meetExperts = res.blocks.find((block: any) => block.__component === "aboutpage.meet-experts");
    const visionSection = res.blocks.find((block: any) => block.__component === "aboutpage.why-choose");
    const commitmentSection = res.blocks.find((block: any) => block.__component === "aboutpage.commitment-section");

    const { bg_image } = herosection;

    return (
        <>
            <main className="main relative overflow-x-clip">
                <StrapiImage src={bg_image?.url} alt="Hero" className="-z-50 object-cover opacity-10" />
                <HeroSection header={header} data={herosection} />
            </main>

            <main className="main relative overflow-x-clip md:min-h-fit!">
                <MeetOurExpertSection data={meetExperts} />
            </main>

            <main className="main bg-secondary/20 relative">
                <VisionSection data={visionSection} />
            </main>

            <main className="main md:min-h-fit!">
                <CommitmentToPatientSection data={commitmentSection} />
            </main>

            {/* <main className="main hidden overflow-hidden py-8"><HealthRequirementSection /></main> */}

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

                <JoinNewsLetter data={join_news_letter} />

                <DecorImage
                    src={decor_tree?.url}
                    alt="Decor Butterfly"
                    size={[600, 600]}
                    className="top-0 right-0 translate-x-1/6 -translate-y-1/3 opacity-70"
                />
                <DecorImage
                    src={decor_chair?.url}
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

function HeroSection(props: any) {
    const { header, data } = props;

    const { title, description, image, decor_image, small_component } = data;
    return (
        <section className="section relative flex flex-col gap-4 py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header logo={header.logo.url} />
            </div>

            <div className="md:grow"></div>

            <div className="grid grow grid-cols-1 grid-rows-1 gap-12 md:grid-cols-2">
                <div className="flex grow flex-col gap-10">
                    <div className="">
                        <h2 className="font-popins relative inline text-3xl leading-10 font-semibold md:text-5xl md:leading-18">
                            {title.split(" ")[0] + " "} <span className="text-accent">{title.split(" ")[1] + " "}</span>{" "}
                            {title.split(" ")[2] + " " + title.split(" ")[3]}
                        </h2>
                        <p className="text-muted font-popins text-justify text-sm font-medium md:text-lg">{description}</p>
                    </div>
                    <div className="bg-primary relative grow rounded-2xl p-8">
                        <h2 className="font-popins text-3xl font-semibold md:text-5xl">{small_component.title}</h2>
                        <p className="font-popins z-50 mt-6 text-lg leading-8 font-medium text-balance md:pb-24">
                            {small_component.description}
                        </p>

                        <DecorImage
                            src={decor_image.image?.url}
                            alt="Decor Highlight"
                            size={[150, 150]}
                            className="right-0 bottom-0 z-10 hidden translate-x-1/3 md:block"
                        />
                    </div>
                </div>
                <div className="relative aspect-square h-auto w-full md:aspect-auto">
                    <StrapiImage src={image?.url} alt="Hero Thumbnail" className="h-full w-full rounded-2xl object-cover" />
                </div>
            </div>

            <div className="md:grow"></div>
        </section>
    );
}

function MeetOurExpertSection({ data }: any) {
    // const profiles = [
    //     {
    //         name: "Dr.Vinod Kumar",
    //         designation: "Psychiatrist & Founder - SyNC Positive Psychiatry Foundation",
    //         about: "Embarking from the UK's renowned National Health Service to being the founder of SyNC Positive Psychiatry, Bangalore, Dr. Vinod Kumar brings over a decade of world-class psychiatric and psychotherapeutic expertise. With MRCPsych and specialized certifications in Liaison Psychiatry and Eating Disorders, his training spans diverse therapeutic modalities, shaping his comprehensive approach. Beyond the clinical, he sees how our stories, our very essence, are woven into the fabric of our well-being. Extending his holistic expertise, Dr. Kumar has established an innovative clinical service for Neurodivergence (ASD) and Adult ADHD, coupled with active research to improve mental health care. His mission? Personalized, dynamic mental health care that meets you where you are.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Vinod.jpg",
    //     },
    //     {
    //         name: "Dr. Balu Pitchiah",
    //         designation: "Consultant Psychiatrist | Brain Health & Peak Performance",
    //         about: "Dr. Balu Pitchiah is an internationally trained Consultant Psychiatrist with experience across the UK, UAE, and India. Known for his holistic, high-impact approach, he specializes in emotional wellness, neurodivergence, and high-performance mental health. With expertise in ADHD, ASD, anxiety, burnout, and behavioural patterns, he has supported over 25,000 individuals, particularly professionals and high achievers. He integrates Western psychiatry with insights from neuroeconomics, behavioural finance, and Eastern healing arts. A member of the Royal College of Psychiatrists and the American Psychiatric Association, Dr. Balu Pitchiah combines clinical care with functional wellness to promote sustainable brain and behavioural transformation.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Balu.jpg",
    //     },
    //     {
    //         name: "Dr. Poornima Chandrashekar",
    //         designation: "Clinical Psychologist. Expert in Child, Adolescent & Family Mental Health",
    //         about: "Dr. Poornima C, a Clinical Psychologist with over 14+ years of experience, specializes in child, adolescent, and family mental health. Holding an M.Phil. and Ph.D. from NIMHANS, she has contributed significantly to research in OCD, child psychiatry, and caregiver stress. Her client-centered approach, utilizing CBT and family interventions, is personalized to meet each individual's needs. A recognized expert, she presents research papers at conferences and publishes on parenting styles, and is trained in SPACE, a parent-based treatment for child anxiety and OCD. Outside of her professional life, she enjoys traveling, dining, and spending time with family and her dogs.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Poornima.jpeg",
    //     },
    //     {
    //         name: "Dr. Anupama Bajaj",
    //         designation: "Psychologist",
    //         about: "Anupama, with over 10+ years of experience, guides individuals, couples, and families through life's challenges, including ADHD, ASD, OCD, PTSD, anxiety, grief, sex, depression, phobias, insomnia, personality disorders, and relationship issues. Her journey, enriched by Art Therapy and a Ph.D. in Psychology, translates into a transformative, empathetic, and evidence-based approach, creating a safe space for clients. She empowers clients to break barriers and unlock self-growth, blending scientific knowledge with heartfelt support for a happier, healthier life.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr. Anupama Bajaj.jpeg",
    //     },
    //     {
    //         name: "Kala Bhandari",
    //         designation: "Counselling Psychologist",
    //         about: "Ms. Kala Bhandari, a compassionate Counsellor & Therapist, specializes in Behavioral, Relationship, Marriage, and Family Counselling. Certified in CBT and Personal Counselling, she employs a holistic, client-centered, and trauma-informed approach, integrating narrative therapy, mindfulness, and behavioral techniques. With mentorship from Dr. Vinod Kumar and her extensive experience, she guides individuals, couples in their marriage and families through challenges like anxiety, depression, adolescent concerns, and career/goal setting, creating a safe space for healing and positive transformation.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Kala.jpg",
    //     },
    //     {
    //         name: "Mehak Gill",
    //         designation: "Psychologist",
    //         about: "Mehak Gill, M.Sc. Clinical Psychology (Christ University) offers a joyful, compassionate, and empowering therapeutic approach. She creates a safe, supportive space where clients feel heard and valued, using an eclectic, solution-focused method that integrates empathy, self-care, and mindfulness. Tailoring sessions to build resilience and reshape thought patterns, she guides individuals through challenges like grief, anxiety, and ADHD, fostering clarity, strength, and well-being. With Mehak, therapy isn’t just about healing—it’s about thriving.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Mehek.jpg",
    //     },
    //     {
    //         name: "Esha Jiani",
    //         designation: "Psychologist",
    //         about: "Esha, holding a Master’s in Clinical Psychology, specializes in supporting young adults with relationship issues, anxiety, and emotional regulation. Her approach helps the client understand their experiences and provides them the skills to articulate their stories, fostering deeper self-awareness, self-compassion, and growth. Fluent in English and Hindi, she is passionate about guiding clients to achieve a more balanced and fulfilling life. Beyond therapy, Esha is deeply passionate about books in philosophy, psychology, fiction, art, nature, spirituality, and sports, believing that creativity and connection fuel emotional well-being—both in herself and in those she helps.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Esha.jpg",
    //     },
    //     {
    //         name: "P Kalyan",
    //         designation: "Psychologist",
    //         about: "Kalyan, M.Sc. Clinical Psychology offers a client-centered, analytical approach to therapy, specializing in ADHD, anxiety, interpersonal conflicts, emotional regulation, and autism. With 2+ years of experience and 100+ clients, he provides a trauma-informed, queer-affirmative space where clients feel seen and heard. Drawing from his own experience with ADHD and the queer community, and leveraging expertise from NIMHANS and PESI USA, he ensures his practice is informed by the latest research. Fluent in English, Hindi, and Telugu, Kalyan integrates mindfulness into his work. He helps clients navigate the ups and downs of life while teaching them to harness their intuitive abilities.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Kalyan.jpg",
    //     },
    //     {
    //         name: "Vani Mitti",
    //         designation: "Psychologist",
    //         about: "Vani Mitti, with a Master’s in Psychology from Annamalai University and specialized training in child psychology and counselling, brings over a decade of experience in child development centers, neuropsychiatry hospitals, and schools. Her expertise includes IQ, ASD, and ADHD assessments, and evidence-based therapies like Behavioral Therapy, CBT, and Habit Reversal Therapy. She also offers Parent Counselling to improve family dynamics. Fluent in English, Kannada, and Hindi, Vani creates a safe, supportive environment, tailoring therapy to individual needs with empathy and a solution-focused approach. Outside of work, she enjoys reading and singing and is dedicated to empowering clients to reach their full potential.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Vani.jpg",
    //     },
    //     {
    //         name: "Raunak Jain",
    //         designation: "Psychologist",
    //         about: "Raunak Jain, with a postgraduate degree in Clinical Psychology and experience from NIMHANS, creates a safe, empathetic, and collaborative therapeutic space. Utilizing a biopsychosocial approach and emphasizing the mind-body connection, she provides personalized, holistic care. Her expertise spans ADHD coaching, anxiety, depression, and relationship issues, integrating design thinking, positive psychology, and postmodern therapies, including narrative therapy and mindfulness. Outside of therapy, she enjoys exploring coffee and herbal teas, reflecting her commitment to curiosity and growth.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Raunak.jpg",
    //     },
    //     {
    //         name: "Dr. Harsh P Jain",
    //         designation: "Physician",
    //         about: "Dr. Harsh P Jain, MBBS, a physician on a path to pursue postgraduate studies in Psychiatry in the UK, is driven by a profound curiosity about the human mind and believes in the mind-body-emotion-energy connection.  His warm, approachable demeanor, coupled with fluency in English, Hindi, Tamil, and Marwari, fosters strong client connections. Passionate about neurodivergence, Dr. Jain focuses on ADHD and related disorders, using his personal experience to connect with and empower clients. His goal is to guide individuals toward more fulfilling and balanced lives, helping them navigate their unique challenges. In his downtime, Dr. Jain enjoys swimming, badminton, and adventure sports, always seeking ways to embrace life with energy and enthusiasm.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr. Harsh.jpg",
    //     },
    //     {
    //         name: "Anusha Kolloji",
    //         designation: "Psychologist",
    //         about: "Anusha practices a humanistic, growth-oriented approach in her work. Holding an MSc in Psychological Counseling from IIPR, Bengaluru, she is dedicated to creating a safe and supportive space where clients feel heard, understood, and empowered while catering in three languages: English, Hindi, and Telugu. She is experienced in the management of neurodivergence, anxiety, depression, and interpersonal and relationship issues. She has attended training and workshops from esteemed institutions like NIMHANS, Bengaluru, to stay updated with advancements in the mental health field. Beyond therapy, she enjoys painting, hiking, and volunteering, finding joy in creative expression and community work. When not working, she loves to spend time petting animals, exploring new food and places.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Anusha.jpg",
    //     },

    //     {
    //         name: "Darshana Kishore Gandhi",
    //         designation: "Clinical Psychologist",
    //         about: "Darshana Kishore Gandhi is an RCI-licensed Clinical Psychologist with an M.Phil in Clinical Psychology from DIMHANS, Dharwad. Her approach is integrative, client-centered, and insight-oriented, creating a safe space for healing and self-discovery. She works with emotional challenges, relationship issues, neurodivergence, addiction, and behavioral concerns, using evidence-based techniques while honoring each person’s unique journey. Beyond therapy, Darshana enjoys reading, writing, music, and dance, finding creativity essential to healing. Committed to lifelong learning, she continuously evolves as a practitioner, staying attuned to psychological advancements to offer thoughtful, effective care.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Darshana.jpg",
    //     },

    //     {
    //         name: "Richa Mehrotra",
    //         designation: "Clinical Psychologist",
    //         about: "Richa Mehrotra is an RCI-licensed Clinical Psychologist and Queer Affirmative Therapist with over four years of experience working with adolescents and adults. She specializes in depression, anxiety, obsessive-compulsive disorder (OCD), de-addiction, and interpersonal dynamics. She holds an M.Phil in Clinical Psychology from the Post Graduate Institute of Behaviour and Medical Sciences, Raipur. She has contributed to suicide prevention initiatives, including a project with the Mental Health Foundation, India, focused on Tihar Jail, Delhi. Richa adopts an eclectic therapeutic approach, tailoring interventions to meet the unique needs of clients and their families. She has a keen interest in cognitive, interpersonal, and diagnostic assessments. Fluent in English and Hindi, she is dedicated to providing a supportive and inclusive space for healing and growth.",
    //         // facebook: "https://www.facebook.com",
    //         // linkedin: "https://www.linkedin.com",
    //         // instagram: "https://www.instagram.com",
    //         profileImage: "/jpeg/profiles/Dr Richa.jpg",
    //     },
    // ];

    const { title, subtitle, decor_image, profiles } = data;

    return (
        <section className="section flex flex-col items-center py-8">
            <div className="font-popins relative flex items-center gap-2 font-semibold">
                <h2 className="text-xl font-bold md:text-4xl">{title}</h2>
                <div className="from-primary-light to-primary rounded-sm bg-linear-to-r p-4">
                    <h2 className="text-xl font-bold md:text-4xl">{subtitle}</h2>
                </div>
                <DecorImage
                    src={decor_image?.url}
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
                        {profiles.map((profile: any) => (
                            <CarouselItem key={profile.id} className="grow md:basis-1/2 lg:basis-1/3">
                                <ProfileCard {...profile} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="bg-green flex items-center justify-center gap-4 [&>button]:relative! [&>button]:top-0! [&>button]:left-0! [&>button]:translate-0!">
                        <CarouselPrevious variant="default" />
                        <CarouselNext variant="default" />
                        <CarouselPrevious variant="default" />
                        <CarouselNext variant="default" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

function VisionSection({ data }: any) {
    const { title, image, list, mission, vision } = data;

    return (
        <section className="section grid min-h-svh grid-cols-1 grid-rows-[auto_1fr] gap-6 py-12 md:grid-flow-col md:grid-cols-3 [&>div]:overflow-hidden [&>div]:rounded-2xl">
            <div className="bg-primary-light row-span-1 flex flex-col items-start justify-start gap-4 p-6 md:p-12">
                <h2 className="font-popins text-xl font-semibold md:text-3xl">{mission.title}</h2>
                <p className="font-popins text-base font-normal">{mission.description}</p>
            </div>

            <div className="flex flex-col items-start gap-8 bg-white p-6 md:col-span-2 md:p-12">
                <div className="flex flex-col items-start justify-start gap-8">
                    <h2 className="font-popins text-xl font-semibold md:text-3xl">{title}</h2>

                    <ul className="flex list-none flex-col items-start gap-3">
                        {list.map((item: any) => (
                            <li key={item.id} className="font-popins flex items-center gap-2 text-lg font-normal">
                                <CircleCheck size={14} className="stroke-secondary-light" />
                                {item.list}
                            </li>
                        ))}
                    </ul>
                </div>

                <BookAppointmentButton className="place-self-start" />
            </div>

            <div className="bg-primary flex flex-col items-start justify-start gap-4 p-6 md:p-12">
                <h2 className="font-popins text-xl font-semibold md:text-3xl">{vision.title}</h2>
                <p className="font-popins text-base font-normal">{vision.description}</p>
            </div>

            <div className="relative row-span-2 hidden md:block">
                <StrapiImage src={image?.url} alt="Hero Vision" className="object-cover" />
            </div>
        </section>
    );
}
