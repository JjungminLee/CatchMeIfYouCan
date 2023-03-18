/** @type {import('next').NextConfig} */

//bootstrap
const withCSS = require('@zeit/next-css');
module.exports = withCSS({});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config;
  },
  
}

module.exports = nextConfig
