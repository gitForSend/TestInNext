// const { i18n } = require('./next-i18next.config');
const withImages = require('next-images');

module.exports = withImages({
//   i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
