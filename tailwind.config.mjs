import catppuccin from '@catppuccin/tailwindcss';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: [
    'variant',
    [
      '@media (scripting: none) and (prefers-color-scheme: dark) { & }',
      "@media (prefers-color-scheme: dark) { &:not([data-theme='light'].latte *) }",
      '&:is(.macchiato *)',
    ],
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              'margin-top': 0,
              'margin-bottom': 0,
              'border-radius': 0,
            },
            code: {
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
              background: 'rgba(0, 0, 0, 0.1)',
              color: 'theme(colors.pink.500) !important',
              padding: '0.125rem 0.25rem',
              'border-radius': '0.25rem',
              'font-family': 'MonaspaceRadon, Lilex, monospace',
              'font-weight': 400,
              'text-decoration-color': 'currentColor',
            },
            blockquote: {
              'font-style': 'normal',
              'p::before': {
                content: '"" !important',
              },
              'p::after': {
                content: '"" !important',
              },
            },
            a: {
              color: 'theme(colors.pink.500)',
              'text-decoration-color': 'rgba(236, 72, 153, 0.8)',
              'text-decoration-style': 'dotted',
            },
            img: {
              'border-radius': '0.5rem',
              //'background-color': 'rgb(var(--ctp-mantle))',
              //'box-shadow': '0 0 0.7rem #00000026',
              //border: '0.1rem solid #00000026',
              'margin-left': 'auto',
              'margin-right': 'auto',
            },
          },
        },
        xl: {
          css: {
            pre: {
              'margin-top': 0,
              'margin-bottom': 0,
              'border-radius': 0,
            },
          },
        },
        linked: {
          css: {
            a: {
              'text-decoration': 'none !important',
              color: 'unset !important',
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'sans-serif'],
    },
  },
  plugins: [typography, catppuccin],
};
