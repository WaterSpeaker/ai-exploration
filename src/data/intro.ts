import { pick } from '../lib/audience';
import { withBase } from '../lib/paths';
import { aboutSection } from './about';

export type IntroMark = {
  text: string;
  href?: string;
  panel?: 'workflow-layers';
  /** Ember color without underline (e.g. 完整简历) */
  quiet?: boolean;
};

export type IntroRow = {
  marks: IntroMark[];
  detailsHref?: string;
};

export type IntroGroup = {
  label: string;
  rows: IntroRow[];
  muted?: boolean;
};

const workHref = {
  chatbot: pick({
    internal: 'https://bytedance.my.larkoffice.com/docx/WzyhddhbWosJdOxsfpjm8pVYymf',
    external: withBase('/work/ai-shopping-chatbot-design'),
  }),
  language: pick({
    internal: 'https://bytedance.my.larkoffice.com/docx/ALd7d70qJoOeMZx5pDrmsDBzyze',
    external: withBase('/work/tts-ai-design-language'),
  }),
  opportunities: pick({
    internal: 'https://bytedance.my.larkoffice.com/docx/DeN2ddKnJoNZihx0iKSmq7TfyXf',
    external: withBase('/work/ai-design-opportunities'),
  }),
};

export const introGroups: IntroGroup[] = [
  {
    label: 'AI 产品 // Create for ai',
    rows: [
      {
        marks: [
          {
            text: '作为设计负责人，带领 3 位设计师从 0-1 搭建端内导购助手（会话式 Agent），推动产品上线并实现正向 GMV 收益',
          },
        ],
        detailsHref: workHref.chatbot,
      },
      {
        marks: [
          {
            text: '定义国际电商 C 端整体 AI Design Language，覆盖视觉、交互与文案规范，并复用于多个 AI 产品子域',
          },
        ],
        detailsHref: workHref.language,
      },
      {
        marks: [
          {
            text: '牵头发起电商整体 AI 机会点探索，协同 7 位设计师完成方案探索并推动与产品团队沟通，最终约 20% 提案进入落地',
          },
        ],
        detailsHref: workHref.opportunities,
      },
    ],
  },
  {
    label: 'AI 工作流 // create with AI',
    rows: [
      {
        marks: [
          { text: '牵头探索并落地设计 × 研发 AI 协同工作流，并针对不同需求类型建立 ' },
          { text: '分层交付模式', panel: 'workflow-layers' },
        ],
      },
      {
        marks: [
          {
            text: '利用 AI 搭建团队提效工具与工作流：开发自动化 Skill 用于核心项目分享，单次节省约 30min；沉淀 ',
          },
          {
            text: '🔗 设计师 0-1 Vibe Coding 环境配置指南',
            href: 'https://bytedance.larkoffice.com/docx/ArjzdltPbom1oqxHe0vcvzZ3nqc',
          },
          { text: '，降低设计师自主开发的启动门槛' },
        ],
      },
      {
        marks: [
          { text: '独立完成多个 0-1 Vibe Coding 项目，包括 ' },
          { text: '🔗个人网站', href: 'https://waterspeaker.github.io/AboutMe/' },
          { text: ' 、' },
          {
            text: '🔗 Muse — Vibe Coding 灵感生成器',
            href: 'https://muse-lab-vibe.vercel.app/',
          },
          { text: '、个人资产管理工具(搭建中) ' },
        ],
      },
    ],
  },
  {
    label: '个人背景 // More about me',
    muted: true,
    rows: [
      {
        marks: [
          {
            text: '10 年设计经验，曾就职于阿里、字节。擅长探索型业务，包括产品交互框架、设计语言与设计驱动的创新提案。曾任多届 IXDC / UXPA 讲师、评委. ',
          },
          { text: '完整简历', href: aboutSection.ctaHref, quiet: true },
        ],
      },
    ],
  },
];
