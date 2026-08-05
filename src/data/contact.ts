import { pick } from '../lib/audience';

export type ContactCopyChannel = {
  id: 'wechat' | 'email';
  label: string;
  value: string;
};

export const contactSection = {
  lead: pick({
    internal: '在飞书上找到我',
    external: '微信或邮件联系我',
  }),
  /** Internal: Lark pill. External: copy-to-clipboard channels. */
  mode: pick({
    internal: 'lark' as const,
    external: 'copy' as const,
  }),
  lark: {
    name: '王琛',
    profileUrl:
      (import.meta.env.PUBLIC_LARK_PROFILE_URL as string | undefined)?.trim() ||
      'https://applink.feishu.cn/client/chat/open?openId=ou_ca21a64eefaae17f628d33af6c2ddc7d',
  },
  channels: [
    { id: 'wechat', label: '微信', value: 'water_speaker' },
    { id: 'email', label: '邮箱', value: 'suvi.wang.1993@gmail.com' },
  ] satisfies ContactCopyChannel[],
};
