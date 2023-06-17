/** @type {import('next').NextConfig} */
const dns = require("node:dns");
dns.setDefaultResultOrder("ipv4first");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
