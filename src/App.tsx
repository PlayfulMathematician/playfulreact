import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:slug" element={<Post />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

