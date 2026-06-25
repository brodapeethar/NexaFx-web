import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async redirects() {
    return [{ source: "/sign-in", destination: "/login", permanent: true }];
  },
};

export default nextConfig;
