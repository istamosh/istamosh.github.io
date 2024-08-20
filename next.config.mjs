/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist", // the distribution directory, then run it with npx serve ./dist
  images: {
    // loader: "default",
    // path: "",
    unoptimized: true, // using unoptimized images will make the image successfully load on npm build, but rendering the next/image compression feature useless
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
  // assetPrefix: "/", // this caused an error to the HMR
};

export default nextConfig;
