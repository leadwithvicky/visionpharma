import IconCloud from '@/components/ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  // 'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  // 'aws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  // 'testing-library',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  // 'vscode',
  'androidstudio',
  'sonarqube',
  'figma',
  'notion',
  'python',
];

export function IconCloudDemo() {
  return (
    <div className="flex justify-center items-center  max-h-[550px] max-w-[550px]">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
