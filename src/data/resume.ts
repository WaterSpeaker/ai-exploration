export type TimelineItem = {
  period: string;
  title: string;
  detail?: string;
};

export type Resume = {
  education: TimelineItem[];
  work: TimelineItem[];
  highlights: string[];
  designerTraits: string[];
};

export const resume: Resume = {
  education: [
    {
      period: '2009 — 2013',
      title: '浙江大学，工业设计系',
    },
    {
      period: '2013 — 2015',
      title: 'Aalto University, Finland, Master of HCID',
    },
  ],
  work: [
    {
      period: '2015 - 2016',
      title: 'Pilotfish Gmbh, Munich',
    },
    {
      period: '2016 - 2018',
      title: 'ARK 创新咨询',
    },
    {
      period: '2018 — 2022',
      title: '阿里巴巴 · 菜鸟',
    },
    {
      period: '2022 — 至今',
      title: '字节跳动 · 国际电商',
    },
  ],
  highlights: [
    'IXDC 讲师',
    'UXPA 年度优秀论文',
    '电商设计团队‘最好设计’',
    'Reliable partner award',
  ],
  designerTraits: [
    '擅长做设计驱动的事，能够通过数据分析、用户研究等主动发现设计机会点并产出解决方案；',
    '更喜欢做 0-1 业务，包括整体用户路径梳理，整体产品交互框架、设计语言定义等；',
    '偏理性&逻辑思考，比较擅长全链路复杂问题分析拆解；',
    '对设计有热爱，希望通过设计让这个世界变好一点。',
  ],
};
