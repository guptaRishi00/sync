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
    const { metaTitle, metaDescription, keywords, metaRobots, metaViewport, canonicalURL, structuredData, metaImage, socialNetwork } =
        seo || {};

    const ogTitle = socialNetwork?.title || metaTitle;
    const ogDescription = socialNetwork?.description || metaDescription;
    const ogImage = metaImage?.url || socialNetwork?.image?.url;
    const twitterImageAlt = socialNetwork?.image?.alternativeText || metaImage?.alternativeText;

    return (
        <Head>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-M3VKCX5SJR"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M3VKCX5SJR');
          `,
                }}
            />

            {/* Basic Meta */}
            {metaTitle && <title>{metaTitle}</title>}
            {metaDescription && <meta name="description" content={metaDescription} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {metaRobots && <meta name="robots" content={metaRobots} />}
            <meta name="viewport" content={metaViewport || "width=device-width, initial-scale=1"} />
            {canonicalURL && <link rel="canonical" href={canonicalURL} />}

            {/* Open Graph */}
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && <meta property="og:description" content={ogDescription} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {canonicalURL && <meta property="og:url" content={canonicalURL} />}
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            {ogTitle && <meta name="twitter:title" content={ogTitle} />}
            {ogDescription && <meta name="twitter:description" content={ogDescription} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
            {twitterImageAlt && <meta name="twitter:image:alt" content={twitterImageAlt} />}

            {/* Structured Data */}
            {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />}
        </Head>
    );
}
