const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([
  [withPWA({
    pwa: {
      dest: "public",
      disable: process.env.NODE_ENV === "development",
    }
  })]
], nextConfig);

