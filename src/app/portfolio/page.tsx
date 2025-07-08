import Link from 'next/link'
import { Github, ExternalLink, Calendar } from 'lucide-react'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Una piattaforma e-commerce completa con sistema di pagamenti, gestione inventario e dashboard amministrativa. Built con Next.js, TypeScript, Prisma e Stripe.",
      longDescription: "Progetto complesso che include autenticazione utenti, carrello shopping, sistema di pagamenti con Stripe, dashboard amministrativa per la gestione prodotti e ordini, sistema di recensioni e notifiche email.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe", "NextAuth.js"],
      githubUrl: "https://github.com/tuousername/ecommerce-platform",
      liveUrl: "https://ecommerce-platform.vercel.app",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      date: "2024-01-15",
      status: "Completato"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Applicazione per la gestione di progetti e task con funzionalità di collaborazione in tempo reale, notifiche push e integrazione calendario.",
      longDescription: "Sistema completo di project management con board Kanban, timeline progetti, chat integrata, file sharing, time tracking e reportistica avanzata.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT", "Material-UI"],
      githubUrl: "https://github.com/tuousername/task-management",
      liveUrl: "https://task-management.vercel.app",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      date: "2023-12-10",
      status: "Completato"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteorologica interattiva con previsioni dettagliate, mappe meteorologiche e grafici di tendenza per multiple città.",
      longDescription: "Applicazione che utilizza API meteo per fornire previsioni accurate, include geolocalizzazione, ricerca città, grafici interattivi con Chart.js e memorizzazione preferenze utente.",
      technologies: ["Vue.js", "Nuxt.js", "Chart.js", "OpenWeather API", "Vuetify", "PWA"],
      githubUrl: "https://github.com/tuousername/weather-dashboard",
      liveUrl: "https://weather-dashboard.vercel.app",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      date: "2023-11-05",
      status: "Completato"
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "App per il tracciamento delle finanze personali con categorizzazione automatica delle spese, budget planning e analytics avanzate.",
      longDescription: "Sistema completo per la gestione finanziaria personale con import bank statements, categorizzazione AI delle transazioni, goals savings e dashboard finanziaria.",
      technologies: ["React Native", "Expo", "Firebase", "Chart.js", "Plaid API"],
      githubUrl: "https://github.com/tuousername/finance-tracker",
      liveUrl: "https://finance-tracker-app.vercel.app",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      date: "2023-10-20",
      status: "In sviluppo"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Piattaforma LMS per corsi online con video streaming, quiz interattivi, certificazioni e sistema di progressi gamificato.",
      longDescription: "Sistema educativo completo con creazione corsi, video player personalizzato, sistema quiz avanzato, certificazioni PDF, forum discussioni e analytics studenti.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "FFmpeg", "PDF-lib"],
      githubUrl: "https://github.com/tuousername/lms-platform",
      liveUrl: "https://lms-platform.vercel.app",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      date: "2023-09-15",
      status: "Completato"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Dashboard per l'analisi dei social media con metriche avanzate, scheduling post e report automatici per multiple piattaforme.",
      longDescription: "Tool di social media management con connessioni API multiple, scheduling intelligente, analytics comparativa, sentiment analysis e report PDF automatici.",
      technologies: ["Angular", "NestJS", "Redis", "Bull Queue", "D3.js", "Social APIs"],
      githubUrl: "https://github.com/tuousername/social-analytics",
      liveUrl: "https://social-analytics.vercel.app",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      date: "2023-08-30",
      status: "In sviluppo"
    }
  ]

  const skills = [
    { category: "Frontend", technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", technologies: ["Node.js", "Express", "NestJS", "Python", "Django", "FastAPI"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"] },
    { category: "Cloud & DevOps", technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "Nginx"] },
    { category: "Mobile", technologies: ["React Native", "Expo", "Flutter", "PWA"] },
    { category: "Altri", technologies: ["GraphQL", "Socket.io", "Stripe", "Firebase", "Figma"] }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Il Mio Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una selezione dei progetti su cui ho lavorato, dalle applicazioni web moderne 
            alle soluzioni mobile, utilizzando le tecnologie più innovative del settore.
          </p>
        </div>

        {/* Projects Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Progetti Recenti
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completato' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(project.date).toLocaleDateString('it-IT')}
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Codice
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
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
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Competenze Tecniche
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interessato a collaborare?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Sono sempre aperto a nuove opportunità e progetti interessanti. 
            Se hai un'idea o vuoi discutere di una possibile collaborazione, 
            non esitare a contattarmi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contattami
            </Link>
            <a 
              href="https://github.com/tuousername" 
              className="btn-secondary inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Vedi GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}