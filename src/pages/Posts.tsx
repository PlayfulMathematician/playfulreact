import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/posts'
import PageLayout from '../layouts/PageLayout';
import { toWords } from '../lib/date';
const posts = getAllPosts();
export default function Posts() {
  return (
    <PageLayout title="Posts">
      <main>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>
                {post.title}
              </Link>{" - "}{toWords(post.date)}
            </li>
          ))}
        </ul>
      </main>
    </PageLayout>
  )
}
