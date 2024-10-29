export const extractFileKey = (filePath: string) =>
  filePath.split('/').slice(-1)[0].slice(0, -'.mdx'.length);
