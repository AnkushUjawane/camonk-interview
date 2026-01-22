import type { Blog } from "@/types/blogData";
interface BlogCardProps {
    blog: Blog
    onSelect: (id: string) => void
}

export const Blog_Card = ({ blog, onSelect }: BlogCardProps) => {
    return (
        <div onClick={() => onSelect(blog.id)}
            className="
            cursor-pointer
            bg-white/5
            m-2
            p-4
            transition
            hover:border-white/40
            hover:bg-white/10

            border border-white/25 bg-gradient-to-br from-white/10 to-white/2 shadow-[0_0_20px_rgba(0,180,255,0.10),inset_0_0_10px_rgba(255,255,255,0.08)] backdrop-blur-md rounded-xl w-80 h-40
            "
        >
            <div className="flex items-center justify-between text-xs text-white/60">
                <span className="text-red-400">
                    {blog.category}
                </span>
                <span>
                    {new Date(blog.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
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