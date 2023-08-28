/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${process.env.NEXT_PUBLIC_API_ENDPOINT}:${process.env.NEXT_PUBLIC_API_PORT}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
