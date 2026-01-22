import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Blog_List } from '@/components/blog/LeftPanel/blog_list'
import { Blog_Detail } from '@/components/blog/RightPanel/blog_detail'
import { useBlogs } from '@/Hooks/use_blogs'
import type { Blog } from '@/types/blogData'

export default function Blogs() {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null)
  const { data } = useBlogs()
  const navigate = useNavigate()

  const selectedBlog: Blog | null = data?.find((b) => b.id === selectedBlogId) ?? null
  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="mb-5 text-4xl font-bold text-sky-400 text-center">
        CA Monk Blogs
      </h1>
      <button
        onClick={() => navigate("/blogs/create")}
        className="rounded-xl bg-sky-500 px-5 py-2 mb-3 font-semibold text-black hover:bg-sky-400 transition"
      >
        + Create Blog
      </button>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 rounded-xl border border-white/30 p-4">
          <Blog_List onSelectBlog={setSelectedBlogId} />
        </div>
        <div className="md:col-span-2 self-start rounded-xl border border-green-500/50 p-6 text-white/60">
          <Blog_Detail blog={selectedBlog} />
        </div>
      </div>
    </div>
  )
}
