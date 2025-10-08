import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "celebrated-wealth-76f0bbd82e.media.strapiapp.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
