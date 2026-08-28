import { pick } from '../lib/audience';
import { withBase } from '../lib/paths';

export type VibeProject = {
  name: string;
  blurb: string;
  stack: string[];
  href?: string;
  image?: string;
};

/** 替换为你 vibe coding 过的真实项目 */
export const vibeProjects: VibeProject[] = [
  {
    name: '我的个人网站',
    blurb: '花一周时间搭的个人站，回忆古早互联网时期',
    stack: ['Cursor', 'Github', '飞书多维表格'],
    href: 'https://waterspeaker.github.io/AboutMe/',
    image: withBase('/vibe/personal-site.png?v=3'),
  },
  {
    name: 'Vibe coding 灵感生成器',
    blurb: '想 vibe coding？探索方向或打磨已有想法，拿走一份能丢进 agent 直接开工的 Brief。',
    stack: ['Cursor', 'Deepseek', 'Vercel'],
    href: 'https://muse-lab-vibe.vercel.app/',
    image: withBase('/vibe/muse-lab.png'),
  },
  {
    name: '团队设计周刊Skill',
    blurb: '总结团队内部好的设计文档，总结核心信息并以卡片形式推送到群里',
    stack: ['Aime', '飞书机器人'],
    href: pick({
      internal: 'https://bytedance.larkoffice.com/docx/Sa48di26BoBaPsxpy6AclSvNnFc',
      external: undefined,
    }),
    image: withBase('/vibe/design-weekly.png'),
  },
];
