import type { Blog } from "@/types/blogData";
interface BlogCardProps{
    blog: Blog
    onSelect: (id: string) => void
}

export const Blog_Card = ({blog, onselect}: BlogCardProps) => {
    return(
        <div>
            <div>
                <span>
                    {blog.category}
                </span>
                <span>
                    {new Date(blog.createdAt).toDateString()}
                </span>
            </div>
            <div>
                <h2>
                    {blog.title}
                </h2>
            </div>
            <div>
                <p>
                    {blog.description}
                </p>
            </div>
        </div>
    )
}