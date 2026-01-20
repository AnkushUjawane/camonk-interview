import type { Blog } from '@/types/blogData'

export const useBlogs = () => {
  const data: Blog[] = [
    {
      id: '1',
      title: 'Understanding React Architecture',
      description: 'A deep dive into React structure',
      content:
        'React is a component-based library...\n\nThis blog explains how to structure React apps cleanly.',
      category: 'Frontend',
      tags: ['react', 'vite', 'architecture'],
      coverImage:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      createdAt: '2025-01-01',
    },
    {
      id: '2',
      title: 'Why Tailwind CSS Feels So Fast',
      description: 'Utility-first CSS explained',
      content:
        'Tailwind CSS provides low-level utility classes...\n\nThis improves development speed.',
      category: 'CSS',
      tags: ['tailwind', 'css', 'ui'],
      coverImage:
        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34',
      createdAt: '2025-01-10',
    },
  ]

  return { data }
}
