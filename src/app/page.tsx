import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

export default function Home() {
  // Articoli del blog per la homepage
  const latestPosts = [
    {
      id: 1,
      title: "Come iniziare con Next.js 14",
      excerpt: "Una guida completa per iniziare con Next.js 14 e le sue nuove funzionalità. Scopri l'App Router, Server Components e molto altro.",
      date: "2024-01-15",
      slug: "iniziare-con-nextjs-14",
      readTime: "8 min",
      tags: ["Next.js", "React", "Tutorial"]
    },
    {
      id: 2,
      title: "Le migliori pratiche per TypeScript",
      excerpt: "Scopri come scrivere codice TypeScript più pulito e manutenibile seguendo le best practices del settore.",
      date: "2024-01-10",
      slug: "migliori-pratiche-typescript",
      readTime: "12 min",
      tags: ["TypeScript", "Best Practices"]
    },
    {
      id: 3,
      title: "Tailwind CSS: Tips e Tricks",
      excerpt: "Alcuni trucchi per ottimizzare il tuo workflow con Tailwind CSS e scrivere stili più efficienti.",
      date: "2024-01-05",
      slug: "tailwind-css-tips-tricks",
      readTime: "6 min",
      tags: ["CSS", "Tailwind", "Frontend"]
    },
    {
      id: 4,
      title: "React Server Components Spiegati",
      excerpt: "Tutto quello che devi sapere sui React Server Components e come cambiano il modo di sviluppare.",
      date: "2024-01-01",
      slug: "react-server-components-spiegati",
      readTime: "10 min",
      tags: ["React", "Server Components", "Frontend"]
    },
    {
      id: 5,
      title: "Deploy automatico con GitHub Actions",
      excerpt: "Come configurare un workflow CI/CD completo per deployare automaticamente le tue applicazioni.",
      date: "2023-12-28",
      slug: "deploy-automatico-github-actions",
      readTime: "15 min",
      tags: ["DevOps", "CI/CD", "GitHub"]
    },
    {
      id: 6,
      title: "Performance Web: Ottimizzazione Avanzata",
      excerpt: "Tecniche avanzate per ottimizzare le performance delle tue applicazioni web e migliorare l'esperienza utente.",
      date: "2023-12-20",
      slug: "performance-web-ottimizzazione",
      readTime: "11 min",
      tags: ["Performance", "Web Vitals", "Optimization"]
    }
  ]

  // Progetti in evidenza per la homepage
  const featuredProjects = [
    {
      id: 1,
      title: "Personal Blog",
      description: "Blog tecnico con Next.js 14, TypeScript e Tailwind CSS. Gestione contenuti Markdown.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
      githubUrl: "https://github.com/tuousername/personal-blog",
      liveUrl: "https://blog.example.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Open Source Tool",
      description: "Utility per sviluppatori con CLI e interfaccia web. Pubblicato su npm.",
      technologies: ["Node.js", "TypeScript", "CLI", "npm"],
      githubUrl: "https://github.com/tuousername/dev-tool",
      liveUrl: "https://npmjs.com/package/dev-tool",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
    }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Il Mio{' '}
              <span className="text-primary-600">Blog Tecnico</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Condivido esperienze, tutorial e riflessioni sul mondo dello sviluppo web 
              e delle tecnologie moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Leggi gli articoli
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/about" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Chi sono
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Articoli Recenti
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tutorial, guide e riflessioni su sviluppo web, tecnologie moderne e best practices. 
              Tutto quello che imparo e sperimento nel mio percorso di developer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  {/* Tags */}
                  {post.tags && (
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
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>{new Date(post.date).toLocaleDateString('it-IT')}</span>
                      {post.readTime && <span>• {post.readTime}</span>}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Leggi →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn-primary text-lg px-8 py-3">
                Esplora tutti gli articoli
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-3">
                Scopri di più su di me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Alcuni Progetti
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una selezione di progetti su cui ho lavorato
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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