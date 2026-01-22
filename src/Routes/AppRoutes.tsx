import { Routes, Route, Navigate } from "react-router-dom"
import Blogs from "@/pages/blogs"
import CreateBlog from "@/pages/create_blog"

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/blogs" replace />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
      </Routes>
  )
}
