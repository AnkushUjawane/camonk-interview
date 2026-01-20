import type { Blog } from "@/types/blogData";
interface BlogCardProps{
    blog: Blog
    onSelect: (id: string) => void
}

export const Blog_Card = ({blog, onSelect}: BlogCardProps) => {
    return(
        <div onClick={() => onSelect(blog.id)} className="bg-white">
            <div className="bg-white">
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