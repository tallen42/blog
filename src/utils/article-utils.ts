import type {MDXInstance} from 'astro';
import type {Frontmatter} from "@/types/Frontmatter";

export const extractFilePathData = (filePath: string): { date: number; key: string } => {
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2];
    const dateAndSlug = fileName.split('-');
    const yearPart = pathParts[pathParts.length - 3];

    const year = parseInt(yearPart);
    const month = parseInt(dateAndSlug[0]);
    const day = parseInt(dateAndSlug[1]);

    const key = dateAndSlug.slice(2).join('-');
    const date = Date.parse(year + '-' + month + '-' + day);

    return {date, key};
};

let temp = Object.values(import.meta.glob<MDXInstance<Frontmatter>>('@/articles/*/*/*.mdx', {
    eager: true,
}))
temp.forEach((a) => {
    const temp = extractFilePathData(a.file)
    a.frontmatter.date = temp.date
    a.frontmatter.key = temp.key
})

export const allArticles = temp.sort((a, b) => b.frontmatter.date - a.frontmatter.date);

export const visibleArticles = allArticles.filter(
    (a) => !a.frontmatter.underConstruction || !a.frontmatter.hidden || import.meta.env.DEV,
);

export const getArticleByKey = (key: string): {
    article: MDXInstance<Frontmatter>
} => visibleArticles.find((a) => a.frontmatter.key == key)