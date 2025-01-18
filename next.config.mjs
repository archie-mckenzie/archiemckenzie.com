import { initGT } from 'gt-next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true
};

const withGT = initGT({
    defaultLocale: 'en'
});

export default withGT(nextConfig);