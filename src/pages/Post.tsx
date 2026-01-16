import { useParams, Navigate } from 'react-router-dom'
import { getPostBySlug } from '../lib/posts'
import Navbar from '../components/Navbar';

export default function Post() {
  const { slug } = useParams();
  const mod = slug ? getPostBySlug(slug) : null
  if (!mod) {
    return <Navigate to="/404" replace />
  }
  const Content = mod.default
  return (
    <article>
      <h1>{mod.frontmatter.title}</h1>
      <Navbar />
      <Content />
    </article>
  )
}

