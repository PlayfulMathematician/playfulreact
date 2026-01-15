import { Link } from 'react-router-dom'
import type { MDXModule } from '../types/post'



const modules = import.meta.glob('../posts/*.mdx', {
  eager: true,
}) as Record<string, MDXModule>

const posts = Object.entries(modules).map(([path, mod]) => {
  const slug = path.split('/').pop()!.replace('.mdx', '')

  return {
    slug,
    ...mod.frontmatter,
  }
})


export default function Posts() {

  return (
    <main>
      <h1>Posts</h1>

      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
