import type { Blog } from '@/types/blogData'
const Base_Url = "http://localhost:3001/blogs"

export const getBlogs = async (): Promise<Blog[]> => {
    const response = await fetch(Base_Url)
    if(!response.ok){
        throw new Error('Failed to get Blogs')
    }
    return response.json()
}

export const getBlogsByID = async (id: string): Promise<Blog> => {
    const response = await fetch(`${Base_Url}/${id}`)
    if(!response.ok){
        throw new Error('Failed to get Blogs')
    }
    return response.json()
}

export const createBlog = async (
  blog: Omit<Blog, "id">
): Promise<Blog> => {
  const res = await fetch(Base_Url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })

  if (!res.ok) {
    throw new Error("Failed to create blog")
  }

  return res.json()
}