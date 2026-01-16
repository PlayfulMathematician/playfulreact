import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/posts">Posts</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}

