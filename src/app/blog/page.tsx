import Link from 'next/link'
import { getAllPostsMetadata } from '@/lib/blog'
import { CalendarDays, Clock, User } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllPostsMetadata()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
                  <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              📝 Il Mio Blog Tecnico
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tutorial approfonditi, guide pratiche e riflessioni sul mondo dello sviluppo web moderno. 
              Tutto quello che imparo e sperimento, condiviso con la community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">Performance</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">DevOps</span>
            </div>
          </div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta information */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('it-IT')}
                      </div>
                      {post.readTime && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      )}
                    </div>
                    {post.author && (
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Leggi l'articolo completo →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Nessun articolo ancora
              </h2>
              <p className="text-gray-600 mb-8">
                I primi articoli del blog saranno pubblicati presto. 
                Torna a trovarci per non perdere i nuovi contenuti!
              </p>
              <Link href="/" className="btn-primary">
                Torna alla Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}