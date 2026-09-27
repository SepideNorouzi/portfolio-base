/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Copy across this site uses plain apostrophes/quotes; lint stays available via `npm run lint`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
