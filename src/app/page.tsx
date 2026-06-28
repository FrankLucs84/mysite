import Link from 'next/link'
import { ArrowRight, MapPin, Linkedin, Github, Briefcase, Award, TrendingUp } from 'lucide-react'

const tools = [
  { name: 'Office 365', rating: 5 },
  { name: 'Excel', rating: 5 },
  { name: 'SAP', rating: 4 },
  { name: 'Power BI', rating: 4 },
  { name: 'SQL', rating: 4 },
  { name: 'KNIME', rating: 3 },
]

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={`text-base ${i < rating ? 'text-primary-600' : 'text-gray-200'}`}>★</span>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 border-4 border-white/30 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
                FL
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3 text-primary-200 text-sm font-medium">
                <MapPin className="h-4 w-4" />
                Brusciano (NA), Campania, Italia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                Francesco Lucignano
              </h1>
              <p className="text-xl md:text-2xl text-primary-200 font-medium mb-6">
                PMO &nbsp;|&nbsp; ICT &nbsp;|&nbsp; Business Analyst
              </p>
              <p className="text-primary-100 text-lg max-w-2xl leading-relaxed mb-8">
                Specializzato in Project Management con focus sui progetti software.
                Unisco il rigore metodologico del PMI all&apos;integrazione di soluzioni basate sull&apos;IA.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-primary-50">
                  Contattami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about" className="btn-outline-white">
                  Scopri di più
                </Link>
                <a
                  href="https://www.linkedin.com/in/francescolucignano84/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '15+', label: 'Anni di esperienza' },
              { value: 'Head of PMO', label: 'Ruolo attuale' },
              { value: '6', label: 'Certificazioni' },
              { value: '3', label: 'Aziende leader' },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-3xl font-bold text-primary-700 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Chi sono</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Supporto i team attraverso un attento <strong>Change Management</strong> e
                la mediazione dei conflitti organizzativi, curando piani operativi e reportistica
                strutturata per mantenere gli stakeholder informati sui progressi.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Attualmente ricopro il ruolo di <strong>Head of PMO</strong> presso Maurelli Group SPA,
                dove guido la gestione strategica di tutti i progetti ICT ed ERP dell&apos;azienda.
              </p>
              <Link href="/about" className="btn-primary">
                Il mio percorso
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Briefcase, title: 'Project Management', desc: 'Gestione progetti software con approccio PMI e metodologie Agile' },
                { icon: TrendingUp, title: 'Business Analysis', desc: 'Analisi funzionale e ottimizzazione dei processi ICT/ERP' },
                { icon: Award, title: 'Change Management', desc: 'Supporto alla trasformazione organizzativa e mediazione dei conflitti' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strumenti principali</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Competenza consolidata su strumenti di analisi, reportistica e gestione aziendale.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
                <span className="font-medium text-gray-900 text-sm">{tool.name}</span>
                <StarRating rating={tool.rating} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="btn-secondary">
              Tutte le competenze
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Esperienza recente</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Maurelli Group SPA</h3>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-medium">Attuale</span>
                </div>
              </div>
              <p className="text-primary-700 font-semibold mb-1">Head of PMO</p>
              <p className="text-xs text-gray-400 mb-2">Gennaio 2026 – presente</p>
              <p className="text-gray-500 text-sm">Prima: Project Manager (Set 2022 – Dic 2025, 3 anni 4 mesi)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Multiesse Srl – GDO</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">7 anni 8 mesi</span>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Business Controller & Sviluppo Progetti</p>
              <p className="text-xs text-gray-400">Gen 2015 – Ago 2022</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/about" className="btn-secondary">
              Percorso completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-800 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Iniziamo a collaborare</h2>
          <p className="text-primary-200 text-lg mb-8">
            Sono disponibile per nuove opportunità e collaborazioni. Contattami per discutere il tuo progetto.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-800 hover:bg-primary-50">
              Scrivimi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://www.linkedin.com/in/francescolucignano84/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/FrankLucs84"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
