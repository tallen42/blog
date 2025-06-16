import fs from "node:fs";

export const loadIcon = (name: string) =>
    fs.readFileSync(new URL(`../../public/icons/${name}.svg`, import.meta.url), 'utf-8');