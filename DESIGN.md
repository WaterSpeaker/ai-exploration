# Caldera — Style Reference (adapted for AI Exploration)

> Source: https://styles.refero.design/style/fe8cdcf9-c850-4d52-be07-5ad269bf9ebf

**Theme:** light

Caldera runs on a warm limestone canvas flooded with molten orange. Flat, unshadowed UI. Ultrabold compressed type. Single vivid orange (`#fc5000`) as the only aggressive accent. Plasma violet for hero halftone only. Sulfur yellow for tags. 40px card radii, 800px pill controls.

## Non-negotiables

1. No drop shadows — surface hierarchy via Pumice → Limestone → Ember
2. Chromatic accents only: Ember, Plasma Violet, Sulfur
3. Radii: cards 40px / inputs 100px / pills 800px
4. Body: DM Sans 500 only; display: PP Neue Corp Compact Ultrabold (self-hosted)
5. Hero signature: orange halftone dots on violet→ember gradient

## Tokens live in

- `src/styles/tokens.css`
- Consumed by `src/styles/global.css` primitives and all components
