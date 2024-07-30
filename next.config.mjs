/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
console.log(process.env.NODE_ENV);

const nextConfig = isProd ? {
  distDir: 'demo',
  reactStrictMode: true,
  output: 'export',
  basePath: '/blmnex/demo',
  assetPrefix: '/blmnex/demo/',
  // images: {
  //   unoptimized: true,
  // },
} : {
  reactStrictMode: true,
  output: 'export',
};

export default nextConfig;
