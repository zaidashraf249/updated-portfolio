const isGithubPages = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/updated-portfolio' : '',
  assetPrefix: isGithubPages ? '/updated-portfolio/' : '',
};

export default nextConfig;
