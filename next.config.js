const isProd = process.env.NODE_ENV === "production";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
    assetPrefix: isProd ? "/" : "",
    trailingSlash: true,

    images: {
        loader: "cloudinary",
        path: "https://res.cloudinary.com/dpnmq46pq/image/upload/"
    },

    webpack: (config, { dev, isServer }) => {
        if (!dev && isServer) {
            const originalEntry = config.entry;

            config.entry = async () => {
                const entries = await originalEntry();

                return { ...entries };
            };
        }
        return config;
    }
});

module.exports = nextConfig;