/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 절대경로 설정 추가
    return config;
  },
};
