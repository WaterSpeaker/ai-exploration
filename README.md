# AI Exploration

编辑感浅色时间轴作品集：串联基础简历、AI 工作项目、设计 × 研发工作流与 vibe coding，部署于 Vercel，页末可嵌入 Tally / 飞书表单。

## 本地开发

```bash
npm install
cp .env.example .env   # 填入 PUBLIC_FORM_EMBED_URL
npm run dev
```

## 替换内容

文案与条目都在 `src/data/`：

| 文件 | 模块 |
|------|------|
| `resume.ts` | 基础简历 |
| `work.ts` | AI 相关工作项目 |
| `workflow.ts` | 设计 × 研发工作流 |
| `vibe.ts` | Vibe coding 项目 |

## 表单（Tally / 飞书）

在 `.env` 中设置：

```bash
PUBLIC_FORM_EMBED_URL=https://tally.so/r/xxxx
```

飞书表单使用公开分享链接即可。若页面内 iframe 无法加载，加上：

```bash
PUBLIC_FORM_PREFER_OPEN=true
```

此时会显示「打开留言表单」按钮。

在 Vercel 项目 Settings → Environment Variables 中配置同名变量后重新部署。

## 部署到 Vercel

1. 将仓库推送到 GitHub / GitLab
2. 在 [Vercel](https://vercel.com) Import 该仓库（Framework Preset: Astro）
3. 配置 `PUBLIC_FORM_EMBED_URL`
4. Deploy

或本地：

```bash
npx vercel
```

## 技术栈

- Astro 7（静态输出；章节导航与滚动显现用原生脚本）
- Vercel
- Tally / 飞书表单（环境变量接入）
