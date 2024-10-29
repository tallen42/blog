export interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
  date: string;
  learningDisclaimer: boolean;
  underConstruction: boolean;
  notExpert: boolean;
  readingTime: string;
  hero: string | undefined;
  heroAlt: string | undefined;
}
