/**
 * key: the key that is used in the browser for accessing the article
 * title: user-readable title
 * learningDisclaimer: boolean to determine whether to show a disclaimer
 * underConstruction: boolean on whether this will be generated for prod
 * hidden: boolean on whether this will be searchable
 * readingTime: automatically generated string
 * date: string for when this was posted
 */
export interface Frontmatter {
    key: string;
    title: string;
    description: string;
    tags: string[];
    learningDisclaimer: boolean;
    underConstruction: boolean;
    hidden: boolean;
    readingTime: string;
    date: number;
}