const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  i18n: {
    localeDetection: false,
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
  },
});
