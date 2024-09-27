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
    approvedLocales: ['en', 'de', 'fr', 'es', 'it', 'pt', 'zh', 'ja', 'ko', 'ru', 'da', 'el'],
    dictionaryName: 'archiemckenzie.com'
});

export default withGT(nextConfig);