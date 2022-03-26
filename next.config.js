/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === "production" ? "/name-of-repository" : ""
};

module.exports = nextConfig;