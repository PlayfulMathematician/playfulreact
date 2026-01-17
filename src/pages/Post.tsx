import { useParams, Navigate } from 'react-router-dom'
import { getPostBySlug } from '../lib/posts'
import PageLayout from '../layouts/PageLayout';

export default function Post() {
  const { slug } = useParams();
  const mod = slug ? getPostBySlug(slug) : null
  if (!mod) {
    return <Navigate to="/404" replace />
  }
  const Content = mod.default
  return (
    <PageLayout title={mod.frontmatter.title}>
      <Content />
    </PageLayout>
  )
}

