/** @type {import('next').NextConfig} */

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy,
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];

const nextConfig = {
  // GitHub Pages hosts this project under /Portfolio_web. Keep local development
  // at the domain root and enable static export only in the Pages workflow.
  ...(process.env.GITHUB_PAGES === 'true'
    ? { output: 'export', basePath: '/Portfolio_web', assetPrefix: '/Portfolio_web/' }
    : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    unoptimized: process.env.GITHUB_PAGES === 'true',
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 768, 1024, 1280],
  },
  ...(process.env.GITHUB_PAGES === 'true'
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: securityHeaders,
            },
            {
              source: '/:path(images|cv|certificates)/:file*',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=86400, stale-while-revalidate=604800',
                },
              ],
            },
          ];
        },
      }),
};

module.exports = nextConfig;
