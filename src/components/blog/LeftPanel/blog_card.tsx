import type { Blog } from "@/types/blogData";
interface BlogCardProps{
    blog: Blog
    onSelect: (id: string) => void
}

export const Blog_Card = ({blog, onSelect}: BlogCardProps) => {
    return(
        <div onClick={() => onSelect(blog.id)} 
        className="
            cursor-pointer
            rounded-xl
            border border-white/20
            bg-white/5
            m-2
            p-4
            transition
            hover:border-white/40
            hover:bg-white/10
            "
        >
            <div className="flex items-center justify-between text-xs text-white/60">
                <span className="text-red-400">
                    {blog.category}
                </span>
                <span>
                    {new Date(blog.date).toDateString()}
                </span>
            </div>
            <div>
                <h2 className="mt-2 text-lg font-semibold text-sky-400">
                    {blog.title}
                </h2>
            </div>
            <div>
                <p className="mt-1 text-sm text-yellow-400/90 line-clamp-2">
                    {blog.description}
                </p>
            </div>
        </div>
    )
}