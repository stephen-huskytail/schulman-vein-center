/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress responses
  compress: true,

  // Aggressive image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.schulmanveincenter.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "schulmanvein.wpengine.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "schulmanvein.wpengine.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // Faster builds + smaller bundles
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
