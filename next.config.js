const isProd = process.env.NODE_ENV === "production";


/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? "/" : "",
    trailingSlash: true,
    images: {
        loader: "cloudinary",
        path: "https://res.cloudinary.com/dpnmq46pq/image/upload/"
    }
};

module.exports = nextConfig;
