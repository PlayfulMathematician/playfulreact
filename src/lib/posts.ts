import type { MDXModule } from "../types/post";
import { rankDDMMYY } from "./date";

const modules = import.meta.glob("../posts/*.mdx", {
  eager: true,
}) as Record<string, MDXModule>;

export function getAllPosts() {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split("/").pop()!.replace(".mdx", "");
      return {
        slug,
        module: mod,
        ...mod.frontmatter,
      };
    })
    .sort((a, b) => rankDDMMYY(b.date) - rankDDMMYY(a.date));
}

export function getPostBySlug(slug: string) {
  return modules[`../posts/${slug}.mdx`] ?? null;
}
