import { pick } from '../lib/audience';
import { withBase } from '../lib/paths';

export type WorkTag = {
  label: string;
  href?: string;
};

export type WorkProject = {
  title: string;
  period: string;
  role: string;
  summary: string;
  outcomes: string[];
  tags: WorkTag[];
  href?: string;
  image?: string;
};

export const workProjects: WorkProject[] = [
  {
    title: 'AI Shopping Assistant',
    period: '2025-2026',
    role: '设计 POC',
    summary: '会话式的电商导购助手，辅助用户找到感兴趣的商品并做出购物决策',
    outcomes: [
      '定义设计框架：0-1 定义整体交互模式和视觉规范',
      '寻找业务场景：探索在整体电商链路中，何时适合引入导购助手做什么事情',
      '设计机会点发散：探索未来拓展可能性',
    ],
    image: withBase('/work/ai-shopping-assistant.png'),
    tags: [
      {
        label: 'AI shopping chatbot design',
        href: pick({
          internal: 'https://bytedance.my.larkoffice.com/docx/WzyhddhbWosJdOxsfpjm8pVYymf',
          external: withBase('/work/ai-shopping-chatbot-design'),
        }),
      },
      {
        label: 'AI Design Opportunities',
        href: pick({
          internal: 'https://bytedance.my.larkoffice.com/docx/DeN2ddKnJoNZihx0iKSmq7TfyXf',
          external: withBase('/work/ai-design-opportunities'),
        }),
      },
    ],
  },
  {
    title: 'AI Design Language In Global-Ecommerce',
    period: '2025',
    role: '设计 POC',
    summary: '基于电商域内所有 AI 应用场景，统一设计语言',
    outcomes: ['颜色&图形识别', '具体场景应用', '文案规范'],
    image: withBase('/work/ai-design-language.png'),
    tags: [
      {
        label: 'TTS AI Design Language',
        href: pick({
          internal: 'https://bytedance.my.larkoffice.com/docx/ALd7d70qJoOeMZx5pDrmsDBzyze',
          external: withBase('/work/tts-ai-design-language'),
        }),
      },
    ],
  },
];
