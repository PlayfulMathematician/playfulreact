import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/posts'
import PageLayout from '../layouts/PageLayout';
import { toWords } from '../lib/date';
const posts = getAllPosts();
export default function Posts() {
  return (
    <PageLayout title="Home">
      <main>
        <ul>
          {posts.map((post, index) => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>
                {post.title}
              </Link>{" - "}{toWords(post.date)}
              <p>{post.description}</p>
              {index !== posts.length - 1 && <br />}
            </li>
          ))}
        </ul>
      </main>
    </PageLayout>
  )
}
