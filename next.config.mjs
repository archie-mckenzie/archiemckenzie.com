import { initGT } from 'gt-next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: 'loose'
    },
    reactStrictMode: true
};

const withGT = initGT({
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'it', 'pt', 'zh', 'ja', 'ko', 'ru', 'da', 'el'],
    dictionaryName: 'archiemckenzie.com',
    baseURL: 'http://localhost:10000'
});

export default withGT(nextConfig);