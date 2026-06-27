import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  devIndicators: false,
  ...(isStaticExport
    ? {
        output: "export",
        basePath: "/rupanjan-portfolio",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;