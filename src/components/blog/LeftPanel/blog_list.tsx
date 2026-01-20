import { useBlogs } from "@/Hooks/use_blogs";
import { Blog_Card } from "./blog_card";

interface BlogListProps{
    onSelectBlog: (id: string) => void
}

export const Blog_List = ({onSelectBlog}: BlogListProps) => {
    const {data, isLoading, error} = useBlogs();
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Failed to load Blogs, We will reach you soon</p>
    return(
        <div className="space-y-4">
            {data?.map((blog) => (
                <Blog_Card
                    key={blog.id}
                    blog={blog}
                    onSelect={onSelectBlog}
                />
            ))}
        </div>
    )
}