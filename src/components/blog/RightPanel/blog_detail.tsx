import type { Blog } from "@/types/blogData";

interface BlogDetailProps {
    blog: Blog | null
}

export const Blog_Detail = ({ blog }: BlogDetailProps) => {
    if (!blog) {
        return (
            <div className="rounded-lg border border-dashed border-white/20 p-10 text-center text-white/50">
                Select a blog to read ✨
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-white/20">
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-64 w-full object-cover"
                />
            </div>
            <div className="flex items-center justify-between text-sm text-white/60">
                <span className="text-red-400">{blog.category}</span>
                <span>{new Date(blog.date).toDateString()}</span>
            </div>
            <h1 className="text-3xl font-bold text-sky-400">
                {blog.title}
            </h1>
            <p className="leading-relaxed text-white/80 whitespace-pre-line">
                {blog.content}
            </p>
            <div className="flex flex-wrap gap-2">
                {blog.category.map((category) => (
                    <span
                        key={category}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs text-yellow-400"
                    >
                        #{category}
                    </span>
                ))}
            </div>
        </div>
    )
}