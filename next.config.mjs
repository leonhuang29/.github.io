/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Indicates you're using static export mode
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  theme: {
    extend: {
      // Custom Tailwind CSS settings if needed
    },
  },
  plugins: [], // Add any Tailwind plugins here if needed
};

export default nextConfig;
