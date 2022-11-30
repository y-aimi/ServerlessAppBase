/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ...require(`./config/${process.env.APP_ENV || 'local'}.json`),
  },
  webpack: (config) => {
    // パス解決のエイリアス設定
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    };
    return config
  },
};

module.exports = nextConfig
