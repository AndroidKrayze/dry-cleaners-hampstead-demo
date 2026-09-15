/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/dry-cleaners-hampstead-demo",
  assetPrefix: "/dry-cleaners-hampstead-demo/",
  trailingSlash: true,
};

export default nextConfig;
