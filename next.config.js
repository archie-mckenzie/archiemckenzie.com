/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      outputFileTracingIncludes: {
        '*': ['./gt_config.json'],
      },
  },
};

export default nextConfig;
