import type { ComponentType } from 'react'

export interface PostFrontmatter {
  title: string
  date: string
  description?: string
}

export type MDXModule = {
  default: ComponentType
  frontmatter: PostFrontmatter
}
