/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'demo',
  reactStrictMode: true,
  output: "export",
  basePath: '/blmnex/demo',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
