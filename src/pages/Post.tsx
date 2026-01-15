import { useParams } from 'react-router-dom'
import { getPostBySlug } from '../lib/posts'

export default function Post() {
  const { slug } = useParams();
  const mod = slug ? getPostBySlug(slug) : null
  if (!mod) return <p>Post not found</p>
  const Content = mod.default
  return (
    <article>
      <h1>{mod.frontmatter.title}</h1>
      <Content />
    </article>
  )
}

