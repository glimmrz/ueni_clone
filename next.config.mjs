/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ueni-res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
