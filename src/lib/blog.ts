import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags?: string[]
  author?: string
  readTime?: string
}

export interface BlogPostMetadata {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
  author?: string
  readTime?: string
}

export function getAllPostsMetadata(): BlogPostMetadata[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          title: matterResult.data.title || 'Untitled',
          date: matterResult.data.date || '2024-01-01',
          excerpt: matterResult.data.excerpt || '',
          tags: matterResult.data.tags || [],
          author: matterResult.data.author || 'Author',
          readTime: matterResult.data.readTime || '5 min',
        }
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.warn('No blog posts found or error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      content: contentHtml,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || '2024-01-01',
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
      author: matterResult.data.author || 'Author',
      readTime: matterResult.data.readTime || '5 min',
    }
  } catch (error) {
    console.warn(`Post with slug "${slug}" not found:`, error)
    return null
  }
}

export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.warn('No blog posts found:', error)
    return []
  }
}