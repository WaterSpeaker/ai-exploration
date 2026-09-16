# 对内 / 对外内容差异表

**基准**

| 受众 | 基准来源 | 抓取时间 |
|------|----------|----------|
| `internal` | [ai-exploration.gf-preview.bytedance.net](https://ai-exploration.gf-preview.bytedance.net/) | 2026-08-05 |
| `external` | 本地当前版本（`src/` / `dist/`） | 2026-08-05 |

**构建**

| 命令 | 受众 |
|------|------|
| `npm run build` / `build:external` / `dev:external` | `external`（默认） |
| `npm run build:internal` / `dev:internal` | `internal` |

设置 `PUBLIC_SITE_AUDIENCE=internal|external`（见 `.env.example`）。解析逻辑在 `src/lib/audience.ts`。

**`diff_type` 说明**

| 值 | 含义 |
|----|------|
| `same` | 两边一致，暂不需分叉 |
| `replace` | 同一意图，载体不同（如飞书文档 ↔ 站内页） |
| `rewrite` | 文案或链接按受众改写 |
| `hide` | 对外隐藏链接或条目（卡片可保留） |
| `external_only` | 仅对外构建产出 |

**`status`**：`needs_decision` → `approved` → `implemented` → `verified`

---

## A. Work 文档入口（已实现）

| id | surface | diff_type | internal | external | status | code_path | notes |
|----|---------|-----------|----------|----------|--------|-----------|-------|
| `work.tag.chatbot` | work chip | `replace` | 飞书 `…/WzyhddhbWosJdOxsfpjm8pVYymf` | `/work/ai-shopping-chatbot-design` | `implemented` | `src/data/work.ts` | 对内飞书、对外 HTML |
| `work.tag.opportunities` | work chip | `replace` | 飞书 `…/DeN2ddKnJoNZihx0iKSmq7TfyXf` | `/work/ai-design-opportunities` | `implemented` | `src/data/work.ts` | 同上 |
| `work.tag.tts-lang` | work chip | `replace` | 飞书 `…/ALd7d70qJoOeMZx5pDrmsDBzyze` | `/work/tts-ai-design-language` | `implemented` | `src/data/work.ts` | 同上 |
| `doc.ai-shopping-chatbot-design` | work doc | `external_only` | 不产出站内页 | 现有 HTML（待脱敏审核） | `implemented` | `work/[slug].astro` + work-docs | internal build 不生成 `/work/*` |
| `doc.ai-design-opportunities` | work doc | `external_only` | 不产出站内页 | 现有 HTML（待脱敏审核） | `implemented` | 同上 | 后续审核是否脱敏 |
| `doc.tts-ai-design-language` | work doc | `external_only` | 不产出站内页 | 现有 HTML（待脱敏审核） | `implemented` | 同上 | 后续审核是否脱敏 |

---

## B. 已拍板并落地的其它差异

| id | surface | diff_type | internal | external | status | code_path |
|----|---------|-----------|----------|----------|--------|-----------|
| `url.resume.about-me` | About CTA | `same` | `/chen-wang-resume.pdf?v=20260914`（Resume - 王琛.pdf） | `/chen-wang-resume.pdf?v=20260914`（Resume - 王琛.pdf） | `implemented` | `src/data/about.ts` |
| `url.muse-lab` | Vibe card / Labs experiment | `same` | Muse Lab vercel 链接 | Muse Lab vercel 链接 | `implemented` | `src/data/vibe.ts` · `src/data/labs.ts` |
| `url.lark.design-weekly` | Vibe card / Labs tool | `hide`（仅链接） | 保留飞书链接 | 保留卡片，无链接 | `implemented` | `src/data/vibe.ts` · `src/data/labs.ts` |
| `url.lark.personal-site-article` | Labs experiment | `hide`（仅链接） | 飞书「如何手搓个人网站」 | 保留卡，无文章 CTA | `implemented` | `src/data/labs.ts` |
| `url.lark.muse-lab-article` | Labs experiment | `hide`（仅链接） | 飞书 Muse Lab 文章 | 保留卡，无文章 CTA | `implemented` | `src/data/labs.ts` |
| `url.aime.design-weekly` | Labs tool | `hide`（仅链接） | Aime Skill | 不展示 Skill CTA | `implemented` | `src/data/labs.ts` |

---

## C. Workflow 内网 CTA（已实现）

| id | surface | diff_type | internal | external | status | code_path |
|----|---------|-----------|----------|----------|--------|-----------|
| `url.lark.vibe-config` | Workflow CTA | `hide` | 售后域 vibe coding 0-1 配置指南 | 隐藏按钮 | `implemented` | `src/data/workflow.ts` |
| `url.skills.tts-design` | Workflow CTA | `hide` | TTS design skill | 隐藏按钮 | `implemented` | `src/data/workflow.ts` |

「AI 工作流分层」为站内 panel，两边都保留。

## D. Contact（已实现）

| id | surface | diff_type | internal | external | status | code_path |
|----|---------|-----------|----------|----------|--------|-----------|
| `contact.lead` | Contact copy | `rewrite` | 在飞书上找到我 | 微信或邮件联系我 | `implemented` | `src/data/contact.ts` |
| `url.feishu.chat-default` | Contact | `hide` | 飞书 pill「王琛」 | 不展示 | `implemented` | `ContactForm.astro` |
| `contact.wechat` | Contact | `external_only` | — | 微信按钮，点击复制 `water_speaker` | `implemented` | `src/data/contact.ts` |
| `contact.email` | Contact | `external_only` | — | 邮箱按钮，点击复制 `suvi.wang.1993@gmail.com` | `implemented` | `src/data/contact.ts` |

---

## E. 决策记录（2026-08-05）

1. Work：对内飞书、对外 HTML — **已落地**
2. 三篇 HTML：先用现文件，后续审核脱敏 — **已落地（待审核）**
3. 对内、对外「完整简历」统一指向 `/chen-wang-resume.pdf?v=20260914` — **已落地**
4. Vibe 后两张卡：对外保留卡片、去掉链接 — **已落地**
5. Workflow 两条内网 CTA（配置指南 / TTS skill）：对外隐藏 — **已落地**
6. Contact：对外去掉飞书，改为微信/邮箱点击复制 — **已落地**
7. 对外访问密码门（默认 `1234`，session 内记住）— **已落地**；对内无门禁

可导入飞书的扁平表见 [`audience-diff.csv`](./audience-diff.csv)。
