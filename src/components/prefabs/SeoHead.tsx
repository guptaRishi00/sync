// components/SeoHead.tsx
import Head from "next/head";

export type SeoProps = {
    metaTitle?: string | null;
    metaDescription?: string | null;
    keywords?: string | null;
    metaRobots?: string | null;
    metaViewport?: string | null;
    canonicalURL?: string | null;
    structuredData?: string | null;
    metaImage?: {
        url?: string | null;
        alternativeText?: string | null;
    } | null;
    socialNetwork?: {
        title?: string | null;
        description?: string | null;
        socialNetworks?: string | null;
        image?: {
            url?: string | null;
            alternativeText?: string | null;
        } | null;
    } | null;
};

export default function SeoHead(seo: SeoProps) {
    const { metaTitle, metaDescription, keywords, metaRobots, metaViewport, canonicalURL, structuredData, metaImage } = seo || {};

    const ogImage = metaImage?.url || seo.socialNetwork?.image?.url;

    // console.log("about page seo: ", ogImage);

    return (
        <Head>
            {metaTitle && <title>{metaTitle}</title>}
            {metaDescription && <meta name="description" content={metaDescription} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {metaRobots && <meta name="robots" content={metaRobots} />}
            {metaViewport && <meta name="viewport" content={metaViewport} />}
            {canonicalURL && <link rel="canonical" href={canonicalURL} />}

            {/* Open Graph */}
            {metaTitle && <meta property="og:title" content={metaTitle} />}
            {metaDescription && <meta property="og:description" content={metaDescription} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {canonicalURL && <meta property="og:url" content={canonicalURL} />}
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            {metaTitle && <meta name="twitter:title" content={metaTitle} />}
            {metaDescription && <meta name="twitter:description" content={metaDescription} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Structured Data */}
            {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />}
        </Head>
    );
}
