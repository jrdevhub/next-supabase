import type { NextConfig } from "next";

/*
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
*/

const nextConfig: NextConfig = {
    basePath: "/next-supabase",
    poweredByHeader: false,
    output: "export",
    images: {
        unoptimized: true,
    },
    /*
    i18n: {
        locales: ['en', 'cs'],
        defaultLocale: 'en',
    },
    */
};

export default nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
