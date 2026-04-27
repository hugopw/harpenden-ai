// When deployed under www.ainightschool.org/harpenden-ai we serve
// from a sub-path. Toggle locally with HARPENDEN_BASE_PATH="" to run
// at the root for development convenience.
const basePath =
  process.env.HARPENDEN_BASE_PATH !== undefined
    ? process.env.HARPENDEN_BASE_PATH
    : "/harpenden-ai";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
