export interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
  learningDisclaimer: boolean;
  underConstruction: boolean;
  notExpert: boolean;
  hidden: boolean;
  readingTime: string;
  hero: string | undefined;
  heroAlt: string | undefined;
}
