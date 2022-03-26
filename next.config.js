const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? "/biehlerj.xyz/" : "",
    trailingSlash: true,
};

module.exports = nextConfig;