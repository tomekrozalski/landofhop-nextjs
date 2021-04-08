const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  i18n: {
    localeDetection: false,
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
  },
  images: {
    domains: ['land-of-hop-images.s3.eu-central-1.amazonaws.com'],
    imageSizes: [220],
  },
});
