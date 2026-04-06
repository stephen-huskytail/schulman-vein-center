/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
};

export default nextConfig;
