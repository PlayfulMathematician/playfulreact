import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/posts'
import Navbar from '../components/Navbar';

const posts = getAllPosts();
export default function Posts() {
  return (
    <main>
      <h1>Posts</h1>
      <Navbar />
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
