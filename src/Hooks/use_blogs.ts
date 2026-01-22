import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, getBlogsByID, createBlog } from "@/Api/blog_api";
import type { Blog } from "@/types/blogData";

export const useBlogs = () => {
    return useQuery<Blog[]> ({
        queryKey: ["blogs"],
        queryFn: getBlogs
    })
}

export const useBlog = (id: number | null) => {
  return useQuery<Blog>({
    queryKey: ["blogs", id],
    queryFn: () => getBlogsByID(id as number),
    enabled: !!id,
  })
}

export const useCreateBlog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (blog: Omit<Blog, "id">) => createBlog(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })
}