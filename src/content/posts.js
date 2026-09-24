// Posts are bundled at build time: each file starts with "## Title" and an
// "_date_" line, followed by the body.
const files = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const parsePost = (path, raw) => {
  const slug = path.split("/").pop().replace(/\.md$/, "");
  const lines = raw.split("\n");
  const titleIndex = lines.findIndex((line) => line.startsWith("## "));
  const dateIndex = lines.findIndex((line) => /^_.+_\s*$/.test(line.trim()));
  const title = lines[titleIndex].replace(/^##\s+/, "").trim();
  const date = dateIndex >= 0 ? lines[dateIndex].trim().slice(1, -1) : "";

  const body = lines
    .filter((_, index) => index !== titleIndex && index !== dateIndex)
    .join("\n")
    // The originals use lone backslashes as spacers; plain paragraphs read better.
    .replace(/^\\\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const excerpt = body
    .split("\n\n")
    .find((block) => block && !block.startsWith("_") && !block.startsWith("**"))
    ?.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "");

  return { slug, title, date, body, excerpt };
};

const posts = Object.entries(files)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.slug.localeCompare(a.slug));

export const findPost = (slug) => posts.find((post) => post.slug === slug);

export default posts;
