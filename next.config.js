/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
      outputFileTracingIncludes: {
        '*': ['./gt_config.json'],
      },
    },
}