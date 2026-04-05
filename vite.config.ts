import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: "frontmatter" }],
        remarkMath,
      ],
      rehypePlugins: [rehypeHighlight, rehypeMathjax],
    }),
  ],
});
