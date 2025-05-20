import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          // "https://deployment.com/api/:path*",
        "http://localhost:5000/api/:path*",
      },
    ];
  }
};

export default nextConfig;
