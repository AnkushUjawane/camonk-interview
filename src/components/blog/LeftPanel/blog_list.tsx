import { useBlogs } from "@/Hooks/use_blogs";
import { Blog_Card } from "./blog_card";

interface BlogListProps{
    onSelectBlog: (id: string) => void
}

export const Blog_List = ({onselectBlog}: BlogListProps) => {
    return(
        <div>
            
        </div>
    )
}