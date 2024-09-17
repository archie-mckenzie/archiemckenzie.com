import { initGT } from 'gt-next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: 'loose'
    }
};

const withGT = initGT({
    approvedLocales: ['en', 'de', 'fr', 'es', 'it', 'pt', 'zh', 'ja', 'ko', 'ru', 'da', 'el'],
    dictionaryName: 'archiemckenzie.com'
})

export default withGT(nextConfig);