/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    VW_KEY: process.env.VWORLD_KEY
  }
}

module.exports = nextConfig
