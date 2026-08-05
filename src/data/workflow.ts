import { pick } from '../lib/audience';

export type WorkflowLearning = {
  text: string;
};

export type WorkflowCta = {
  label: string;
  href?: string;
  /** opens an in-page floating panel */
  panel?: 'workflow-layers';
};

export type WorkflowStep = {
  label: string;
  title: string;
  variant: 'chalk' | 'plasma' | 'ember';
  learnings?: WorkflowLearning[];
  cta?: WorkflowCta;
  /** full-width row under the two-column stages */
  fullWidth?: boolean;
};

export type Workflow = {
  steps: WorkflowStep[];
};

export type WorkflowLayer = {
  rank: number;
  title: string;
  titleEn: string;
  example?: string;
  type: string;
  workflow: string;
  prosCons: string;
  featured?: boolean;
};

export type WorkflowLayersPanel = {
  id: 'workflow-layers';
  title: string;
  subtitle: string;
  layers: WorkflowLayer[];
};

export const workflowLayersPanel: WorkflowLayersPanel = {
  id: 'workflow-layers',
  title: 'Design to Code 工作流分层',
  subtitle: '不同类型的项目，按设计 vibe coding 介入度高到低排序',
  layers: [
    {
      rank: 1,
      title: '从头搭建新页面 / 模块',
      titleEn: 'Build up new page/modules',
      type: '涉及页面数量较少，设计复杂度高（UI 样式 / 动效等）',
      workflow:
        '设计通过 Vibe coding 搭建完整页面和动效 → 将代码移交给研发转译为 engineering code → 研发处理接口等其他工作后发布上线',
      prosCons: 'Pros：研发无需再关注设计样式细节，且可省去设计还原度走查环节',
      featured: true,
    },
    {
      rank: 2,
      title: '设计样式问题修复',
      titleEn: 'UI issue Fixing',
      type: '不涉及服务端，纯设计样式',
      workflow: '设计直接在已有代码仓库内调整 → 研发进行 code review 后发布',
      prosCons:
        'Pros：能够更精准地修复样式问题，也在一定程度上释放前端人力；Cons：对设计师来说上手门槛相对较高',
    },
    {
      rank: 3,
      title: '基于现有页面 / 模块的增删改',
      titleEn: 'Based on existing pages & modules',
      type: '涉及页面较多，但每个页面内的改动不复杂',
      workflow: '研发在 Figma 内直接复制 session link 给 Agent 处理',
      prosCons: 'Pros：适用范围最广；Cons：设计师介入程度极低',
      featured: true,
    },
    {
      rank: 4,
      title: '仅现有组件调用和模块增减',
      titleEn: 'Only using existing components',
      type: '未创造新样式；理论上无须前端介入',
      workflow: '维持传统工作流',
      prosCons: '—',
    },
  ],
};

export const workflow: Workflow = {
  steps: [
    {
      label: '阶段 1',
      title: '设计师基于线上生产环境，跑通部署发布全流程',
      variant: 'chalk',
      learnings: [
        {
          text: '沉淀域内 Vibe coding 配置指南，方便后续设计师快速上手配置；',
        },
        {
          text: '方式可行，但对设计师来说上手门槛较高。从整体组织人效角度，不如让研发自己 vibe coding；',
        },
      ],
      cta: pick({
        internal: {
          label: '售后域 vibe coding 0-1 配置指南',
          href: 'https://bytedance.larkoffice.com/docx/ArjzdltPbom1oqxHe0vcvzZ3nqc',
        },
        external: undefined,
      }),
    },
    {
      label: '阶段 2',
      title: '设计师交付 HTML 格式页面，研发进行后续转译加工再发布',
      variant: 'plasma',
      learnings: [
        {
          text: '不同类型的项目工作流分层，按设计 vibe coding 介入度高到低排序',
        },
        {
          text: '用好团队 Skill，约束设计组件引用规范度',
        },
      ],
      cta: {
        label: 'AI 工作流分层',
        panel: 'workflow-layers',
      },
    },
    {
      label: '设计基建',
      title: '沉淀团队内整体设计规范SKILL，各域设计师基于此进行页面搭建',
      variant: 'ember',
      fullWidth: true,
      cta: pick({
        internal: {
          label: 'TTS design skill',
          href: 'https://skills.bytedance.net/skill/skills:skills.byted.org/tts_design/user_product/tts-design?fromSpaceId=skills.byted.org%2Ftts_design%2Fuser_product&fromSpaceName=skills.byted.org%2Ftts_design%2Fuser_product',
        },
        external: undefined,
      }),
    },
  ],
};
