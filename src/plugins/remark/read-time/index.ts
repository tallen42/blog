import type { Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import readingTime from 'reading-time';

// https://docs.astro.build/en/recipes/reading-time/
// now in TypeScript
// but the types aren't useful...

export const remarkReadTime = () => {
  // c'est la vie
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: Root, { data }: any) => {
    const text = toString(tree);
    const readTime = readingTime(text);
    data.astro.frontmatter.readingTime = readTime.text;
  };
};
