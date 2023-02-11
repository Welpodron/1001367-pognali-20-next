const path = require("path");

const isGithubActions = process.env.GITHUB_ACTIONS || false;

// let assetPrefix = "/";
// let basePath = "";
let assetPrefix = "/welpodron.github.io/1001367-pognali-20-next/";
let basePath = "/welpodron.github.io/1001367-pognali-20-next";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "countryflagsapi.com",
        port: "",
        pathname: "/svg/**",
      },
    ],
  },
  webpack(config, options) {
    // Начало конфигурации для SVG
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { ref: true } }],
    });
    // Конец конфигурации для SVG
    // Начало конфигурации для WDR
    if (options.dev && !options.isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, "./wdyr.ts");
        const entries = await originalEntry();

        if (entries["main.js"] && !entries["main.js"].includes(wdrPath)) {
          entries["main.js"].push(wdrPath);
        }
        return entries;
      };
    }
    // Конец конфигурации для WDR

    return config;
  },
};

module.exports = nextConfig;
