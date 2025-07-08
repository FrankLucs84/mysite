import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

export default function Home() {
  // Dati di esempio per i post del blog
  const latestPosts = [
    {
      id: 1,
      title: "Come iniziare con Next.js 14",
      excerpt: "Una guida completa per iniziare con Next.js 14 e le sue nuove funzionalità.",
      date: "2024-01-15",
      slug: "iniziare-con-nextjs-14"
    },
    {
      id: 2,
      title: "Le migliori pratiche per TypeScript",
      excerpt: "Scopri come scrivere codice TypeScript più pulito e manutenibile.",
      date: "2024-01-10",
      slug: "migliori-pratiche-typescript"
    },
    {
      id: 3,
      title: "Tailwind CSS: Tips e Tricks",
      excerpt: "Alcuni trucchi per ottimizzare il tuo workflow con Tailwind CSS.",
      date: "2024-01-05",
      slug: "tailwind-css-tips-tricks"
    }
  ]

  // Dati di esempio per i progetti
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce App",
      description: "Un'applicazione e-commerce completa built con Next.js e Stripe.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      githubUrl: "https://github.com/tuousername/ecommerce-app",
      liveUrl: "https://ecommerce-app.vercel.app",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Un task manager moderno con funzionalità di collaborazione.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/tuousername/task-manager",
      liveUrl: "https://task-manager.vercel.app",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ciao, sono{' '}
              <span className="text-primary-600">Nome Cognome</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sviluppatore Web Full-Stack appassionato di tecnologie moderne 
              e creazione di esperienze digitali straordinarie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/portfolio" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Vedi i miei progetti
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Contattami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ultimi Articoli
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Condivido le mie esperienze e conoscenze nel mondo dello sviluppo web
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Leggi di più →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary">
              Vedi tutti gli articoli
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Progetti in Evidenza
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Alcuni dei progetti su cui ho lavorato recentemente
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-primary-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Codice
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-gray-600 hover:text-primary-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary">
              Vedi tutti i progetti
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}