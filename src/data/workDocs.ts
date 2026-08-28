export type WorkDocPage = {
  slug: string;
  title: string;
  chip: string;
  description: string;
};

export const workDocPages: WorkDocPage[] = [
  {
    slug: 'vibe-coding-personal-site',
    title: 'Vibe coding 之如何手搓个人网站',
    chip: 'Vibe coding personal site',
    description: '一个不会写代码的设计师，第一次用 vibe coding 搭建并上线个人网站的实践记录。',
  },
  {
    slug: 'ai-shopping-chatbot-design',
    title: 'AI shopping assistant design',
    chip: 'AI shopping chatbot design',
    description: 'TTS 电商 AI 导购助手的设计分析、交互模式与视觉系统。',
  },
  {
    slug: 'ai-design-opportunities',
    title: 'TTS-C AI Product Design Summary & Opportunities',
    chip: 'AI Design Opportunities',
    description: 'C 端 AI 应用场景概览与设计机会点展望。',
  },
  {
    slug: 'tts-ai-design-language',
    title: 'TTS-C AI Design Language',
    chip: 'TTS AI Design Language',
    description: '国际电商 C 端 AI 设计语言：视觉规范与文案规范。',
  },
];

export function getWorkDoc(slug: string) {
  return workDocPages.find((page) => page.slug === slug);
}
