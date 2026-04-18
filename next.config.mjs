const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repoName.endsWith('.github.io');
const basePath = isGithubActions && !isUserSite ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
