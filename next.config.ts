import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
<<<<<<< HEAD
    domains: ["lh3.googleusercontent.com"],
=======
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
>>>>>>> upstream/v2
  },
};

export default nextConfig;
