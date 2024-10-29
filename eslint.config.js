import pluginJs from '@eslint/js';
import astro from 'eslint-plugin-astro';
import * as mdx from 'eslint-plugin-mdx';
import prettier from 'eslint-plugin-prettier/recommended';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,astro,mdx}'] },
  { ignores: ['**/env.d.ts', '**/.astro/', 'dist/**/*', 'public/**/*'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  ...tailwind.configs['flat/recommended'],
  ...astro.configs.recommended,
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor(),
  },
  {
    rules: {
      'prettier/prettier': ['warn'],
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: ['giscus'],
        },
      ],
    },
  },
  {
    files: ['**/*.mdx'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['off'],
    },
  },
];
