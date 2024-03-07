/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            //pathname: '/account123/**',
            },
        ],
        },
    i18n: {
        locales: ['en-US', 'es'],
        defaultLocale: 'en-US'
    }
}

module.exports = nextConfig;
