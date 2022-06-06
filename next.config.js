/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig


// linaria設定
const withLinaria = require('next-linaria');
module.exports = withLinaria({
  reactStrictMode: true,
  linaria: {
    classNameSlug: '[hash]_[title]',
  },
});