import { defineConfig, presetIcons, presetWebFonts, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({ scale: 1.2 }),
    presetAnimations(),
    presetShadcn(),
    presetWebFonts({
      fonts: {
        sans: [{ name: 'Geist', weights: ['400', '500', '700'] }],
        mono: 'Geist Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        './**/*.{js,ts}',
      ],
    },
  },
})
