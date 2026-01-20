import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/Api/blog_api";
import type { Blog } from "@/types/blogData";

export const useBlogs = () => {
    return useQuery<Blog[]> ({
        queryKey: ["blogs"],
        queryFn: getBlogs
    })
}