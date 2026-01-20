import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, getBlogsByID } from "@/Api/blog_api";
import type { Blog } from "@/types/blogData";

export const useBlogs = () => {
    return useQuery<Blog[]> ({
        queryKey: ["blogs"],
        queryFn: getBlogs
    })
}

export const useBlog = (id: number) => {
  return useQuery<Blog>({
    queryKey: ["blogs", id],
    queryFn: () => getBlogsByID(id),
    enabled: !!id,
  })
}