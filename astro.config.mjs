import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import expressiveCode from 'astro-expressive-code';

import remarkMath from "remark-math";
import {remarkReadTime} from "./src/plugins/remark/remarkReadTime.js";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import {loadIcon} from "./src/utils/get-icon.js";

// https://astro.build/config



const linkIcon = loadIcon('link');

export default defineConfig({
    prefetch: true,
    site: 'https://blog.tallen.me',
    markdown: {
        remarkPlugins: [remarkMath, remarkReadTime],
        rehypePlugins: [
            rehypeKatex,
            rehypeSlug,
            [
                rehypeExternalLinks,
                {
                    target: '_blank',
                    rel: [],
                },
            ],
        ],
    },
    integrations: [
        tailwind(),
        expressiveCode({
            themes: ['solarized-dark', 'material-theme-lighter'],
            styleOverrides: {
                codeFontFamily: "Proto, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
            }
        }),
        mdx(),
        sitemap(),
    ],
});