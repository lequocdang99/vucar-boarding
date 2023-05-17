/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ['static.inshorts.com', 'www.vucar.vn'],
  },
};

module.exports = nextConfig;
