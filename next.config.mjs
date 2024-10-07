import withVideos from "next-videos";

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

// Merge the configurations
export default withVideos(nextConfig);
