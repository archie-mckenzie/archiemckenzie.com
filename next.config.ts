import { withGTConfig } from 'gt-next/config'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true
};

export default withGTConfig(nextConfig);
