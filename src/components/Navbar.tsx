import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/posts">Posts</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/contact">Contact</Link>

      </nav>
    </div>
  )
}

