import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Directory-style routes so GitHub Pages serves /privacy/ from privacy/index.html.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
