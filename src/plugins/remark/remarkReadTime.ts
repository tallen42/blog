import type { Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import readingTime from 'reading-time';

export const remarkReadTime = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (tree: Root, { data }: any) => {
        const text = toString(tree);
        const readTime = readingTime(text);
        data.astro.frontmatter.readingTime = readTime.text;
    };
};