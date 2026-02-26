/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
