import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateBlog } from "@/hooks/use_blogs"

export default function CreateBlog() {
  const navigate = useNavigate()
  const { mutate, isPending } = useCreateBlog()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [coverImage, setCoverImage] = useState("")

  const handlePublish = () => {
    if (!title || !content) {
      alert("Title and content are required")
      return
    }

    mutate(
      {
        title,
        description,
        content,
        category: tags.split(",").map(t => t.trim()),
        coverImage,
        date: new Date().toISOString()
      },
      {
        onSuccess: () => {
          navigate("/blogs") // 🔥 GO BACK TO BLOG LIST
        },
      }
    )
  }

  return (
    <div className="m bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-sky-400">
            Create New Blog
          </h1>
          <p className="mt-2 text-white/60">
            Write and publish a new blog post
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-white/20 bg-white/5 p-6 space-y-6">

          {/* Title */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Blog Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter blog title"
              className="w-full rounded-lg bg-black border border-white/20 px-4 py-2 outline-none focus:border-sky-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Short Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              placeholder="Short summary of the blog"
              className="w-full rounded-lg bg-black border border-white/20 px-4 py-2 outline-none focus:border-sky-400"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Blog Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              placeholder="Write your blog content here..."
              className="w-full rounded-lg bg-black border border-white/20 px-4 py-2 outline-none focus:border-sky-400"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Tags (comma separated)
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              type="text"
              placeholder="react, finance, tax"
              className="w-full rounded-lg bg-black border border-white/20 px-4 py-2 outline-none focus:border-sky-400"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block mb-2 text-sm text-white/70">
              Cover Image URL
            </label>
            <input
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              type="text"
              placeholder="https://image-url"
              className="w-full rounded-lg bg-black border border-white/20 px-4 py-2 outline-none focus:border-sky-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => navigate("/blogs")}
              className="rounded-lg border border-white/20 px-5 py-2 text-white/70 hover:bg-white/10"
            >
              Cancel
            </button>

            <button
              onClick={handlePublish}
              disabled={isPending}
              className="rounded-lg bg-sky-500 px-6 py-2 font-semibold text-black hover:bg-sky-400 disabled:opacity-50"
            >
              {isPending ? "Publishing..." : "Publish Blog"}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
