import { useState } from 'react'
import { Blog_List } from '@/components/blog/LeftPanel/blog_list'
import {Blog_Detail} from '@/components/blog/RightPanel/blog_detail'
import { useBlogs } from '@/Hooks/use_blogs'
import type {Blog} from '@/types/blogData'

export default function Blogs(){
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null)
  const {data} = useBlogs()

  const selectedBlog: Blog | null = data?.find((b) => b.id === selectedBlogId) ?? null
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 rounded-xl border border-white/30 p-4">
          <Blog_List onSelectBlog={setSelectedBlogId} />
        </div>
        <div className="md:col-span-2 rounded-xl border border-green-500/50 p-6 text-white/60">
          <Blog_Detail blog={selectedBlog}/>
        </div>
      </div>
    </div>
  )
}
