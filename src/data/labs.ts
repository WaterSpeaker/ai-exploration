import { pick } from '../lib/audience';
import { withBase } from '../lib/paths';

export type LabsCta = {
  label: string;
  href: string;
};

export type LabsProject = {
  id: string;
  kindLabel: string;
  navLabel: string;
  title: string;
  blurb: string;
  intro?: string | string[];
  highlights?: string[];
  image: string;
  imageAlt: string;
  primary?: LabsCta;
  secondary?: LabsCta;
};

export type LabsEpisode = {
  volume: string;
  title: string;
  blurb: string;
  href: string;
};

const larkPersonalSiteArticle = pick({
  internal: 'https://bytedance.my.larkoffice.com/docx/D5JXd5MbKo75GWxo5AdmVUaJy2e',
  external: withBase('/work/vibe-coding-personal-site'),
});

const larkMuseLabArticle = pick({
  internal:
    'https://bytedance.my.larkoffice.com/docx/ORfyd3iMSoNyg5x7xWcmt07RyAf?from=space_personal_filelist&pre_pathname=%2Fdrive%2Fme%2F&previous_navigation_time=1787545448453',
  external:
    'https://bytedance.my.larkoffice.com/docx/ORfyd3iMSoNyg5x7xWcmt07RyAf?from=space_personal_filelist&pre_pathname=%2Fdrive%2Fme%2F&previous_navigation_time=1787545448453',
});

export const labsProjects: LabsProject[] = [
  {
    id: 'personal-site',
    kindLabel: '实验',
    navLabel: 'Vibe coding之如何手搓个人站',
    title: 'Vibe coding 之如何手搓个人网站',
    blurb: '不会写代码的设计师，第一次把个人站做上线。',
    intro:
      '我是一个体验设计师，上学那会儿写过一点代码，大致懂得一点工程知识，但离实际研发还是差很远的。这是我第一次用 vibe coding 搭建一个正式上线的网站，这篇文章试图回答几个问题：',
    highlights: [
      '完全不会写代码的人如何搭建个人站',
      '有哪些可以合理利用的工具',
      '关于审美和“人味”',
    ],
    image: withBase('/vibe/personal-site-cover.png'),
    imageAlt: '个人网站首页预览',
    primary: {
      label: '打开站点',
      href: 'https://waterspeaker.github.io/AboutMe/',
    },
    secondary: larkPersonalSiteArticle
      ? { label: '实践过程', href: larkPersonalSiteArticle }
      : undefined,
  },
  {
    id: 'muse-lab',
    kindLabel: '实验',
    navLabel: 'Muse lab:灵感生成器',
    title: 'Muse lab: Vibe coding 灵感生成器',
    blurb: '不知道做什么时，用几轮对话生成 idea 和 mini PRD，复制进 agent 就能开工。',
    intro: [
      '我刚开始接触 vibe coding 的时候，前期总觉得不知道该做个啥，没有灵感，于是就有了这个项目。',
      '玩法是：通过几轮对话，帮用户生成一批 idea 以及对应的 mini PRD，可以直接复制到 agent 开工。',
      '另一个灵感来源是 Grill-me 这个skill，通过不断提问的方式帮助用户梳理清楚思路，也借鉴了它的机制。',
    ],
    image: withBase('/vibe/muse-lab-cover.png'),
    imageAlt: 'Muse Lab 灵感生成器界面预览',
    primary: {
      label: '体验产品',
      href: 'https://muse-lab-vibe.vercel.app/',
    },
    secondary: larkMuseLabArticle
      ? { label: '读文章', href: larkMuseLabArticle }
      : undefined,
  },
  {
    id: 'asset-allocation',
    kindLabel: '工具',
    navLabel: '个人资产管理工具',
    title: '个人资产管理工具',
    blurb:
      '尝试通过AI工具，帮助盘点个人资产、梳理投资偏好，并搭建资产配置看板与定投推送工具。同时也探讨了AI理财建议的边界和产品化的可能性。',
    intro:
      '尝试通过AI工具，帮助盘点个人资产、梳理投资偏好，并搭建资产配置看板与定投推送工具。同时也探讨了AI理财建议的边界和产品化的可能性。',
    image: withBase('/vibe/asset-allocation-cover.png'),
    imageAlt: '个人资产管理工具的资产配置界面预览',
    primary: {
      label: '打开站点',
      href: 'https://waterspeaker.github.io/allocation-review/',
    },
    secondary: {
      label: '读文章',
      href: 'https://waterspeaker.github.io/AboutMe/blog/vibe-coding-asset-plan/',
    },
  },
];

export const labsPodcast = {
  name: '十方上下',
  blurb: '世界的有趣，我很好奇。小琛的对谈播客。',
  href: 'https://www.xiaoyuzhoufm.com/podcast/69d60008e3ebaaa4b469a98d',
  episodes: [
    {
      volume: '015',
      title: 'Vibe Coding: 普通人的技术平权，还是另一场能力分化',
      blurb: '从不会编程到独立开发，vibe coding 是平权还是另一场分化。',
      href: 'https://www.xiaoyuzhoufm.com/episode/6a83d1898156bf33621a00c7',
    },
    {
      volume: '013',
      title: '我们站在AI时代的黎明：旧秩序开始崩塌，新秩序尚未建立',
      blurb: '职业选择、大厂与创业，以及 AI native 的工作方式。',
      href: 'https://www.xiaoyuzhoufm.com/episode/6a6de828ab3a91c24a0e2b58',
    },
    {
      volume: '008',
      title: '她怕被 AI 取代，他一次性开六个 Terminal',
      blurb: '设计师的 AI 焦虑，和一次开六个窗口的工程师对谈。',
      href: 'https://www.xiaoyuzhoufm.com/episode/6a159102ff7b9a8c0a5b88e5',
    },
  ] satisfies LabsEpisode[],
};
