import { withGTConfig } from "gt-next/config";
import { withSoundSmarter } from "em-sound-smarter/config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withGTConfig(withSoundSmarter(nextConfig));
