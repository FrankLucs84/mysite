import Link from 'next/link'
import { Award, ArrowRight } from 'lucide-react'

const tools = [
  { name: 'Office 365', rating: 5, category: 'Produttività' },
  { name: 'Excel', rating: 5, category: 'Produttività' },
  { name: 'SAP', rating: 4, category: 'ERP' },
  { name: 'Power BI', rating: 4, category: 'Data Analysis' },
  { name: 'SQL', rating: 4, category: 'Data Analysis' },
  { name: 'KNIME', rating: 3, category: 'Data Analysis' },
  { name: 'Javascript', rating: 3, category: 'Sviluppo' },
  { name: 'Python', rating: 2, category: 'Sviluppo' },
  { name: 'HTML & CSS', rating: 2, category: 'Sviluppo' },
  { name: 'React', rating: 1, category: 'Sviluppo' },
]

const competenze = [
  {
    title: 'Analisi funzionale',
    desc: 'Raccolta e analisi dei requisiti di business, mappatura dei processi e definizione delle specifiche funzionali per soluzioni software.',
    tags: ['Requirements gathering', 'Process mapping', 'Gap analysis'],
  },
  {
    title: 'Processi ICT/ERP',
    desc: 'Gestione e ottimizzazione dei sistemi ERP aziendali, con esperienza su SAP e piattaforme di helpdesk e ticketing.',
    tags: ['SAP', 'ERP Integration', 'HelpdeskAdvanced', 'ITIL'],
  },
  {
    title: 'Project Management',
    desc: 'Pianificazione, coordinamento e controllo di progetti software dalla fase di avvio alla consegna, con approccio PMI e Agile.',
    tags: ['PMI', 'Agile', 'Scrum', 'Risk management', 'Stakeholder management'],
  },
  {
    title: 'Change Management',
    desc: 'Supporto alle organizzazioni nei processi di trasformazione digitale, gestione delle resistenze e mediazione dei conflitti.',
    tags: ['Organizational change', 'Training', 'Communication plan'],
  },
  {
    title: 'Business Controlling',
    desc: 'Controllo di gestione, budgeting, reporting direzionale e analisi degli scostamenti per il supporto alle decisioni strategiche.',
    tags: ['Budgeting', 'KPI', 'Reporting', 'Forecasting'],
  },
  {
    title: 'Data Analysis',
    desc: 'Analisi di dati aziendali con Power BI, Excel, KNIME e SQL per la produzione di insight e dashboard operative.',
    tags: ['Power BI', 'KNIME', 'SQL', 'Data visualization'],
  },
]

const certifications = [
  { name: 'ISIPM-BASE®', issuer: 'ISIPM – Istituto Italiano di Project Management', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { name: 'Agile Project Management', issuer: 'Alison', color: 'bg-green-50 border-green-200 text-green-800' },
  { name: 'Certificazione PAT – HelpdeskAdvanced', issuer: 'PAT Group', color: 'bg-purple-50 border-purple-200 text-purple-800' },
  { name: 'Basic Proficiency in KNIME Analytics Platform', issuer: 'KNIME', color: 'bg-orange-50 border-orange-200 text-orange-800' },
  { name: 'Microsoft PL-300: Exam Preparation', issuer: 'Coursera', color: 'bg-cyan-50 border-cyan-200 text-cyan-800' },
  { name: 'Google Foundations: Data, Data, Everywhere', issuer: 'Coursera – Google', color: 'bg-red-50 border-red-200 text-red-800' },
]

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-primary-600' : 'text-gray-200'}`}>★</span>
      ))}
    </div>
  )
}

const toolsByCategory = tools.reduce<Record<string, typeof tools>>((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = []
  acc[tool.category].push(tool)
  return acc
}, {})

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Competenze & Strumenti</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Competenze consolidate in Project Management, analisi dei dati e processi aziendali,
            supportate da certificazioni e strumenti specifici del settore.
          </p>
        </div>

        {/* Core competencies */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Aree di competenza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {competenze.map((c) => (
              <div key={c.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Strumenti e tecnologie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
              <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-4">{category}</h3>
                <div className="space-y-3">
                  {categoryTools.map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{tool.name}</span>
                      <StarRating rating={tool.rating} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary-600" />
            Certificazioni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className={`rounded-xl border p-5 ${cert.color}`}>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{cert.name}</p>
                    <p className="text-sm opacity-75 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Interessato a collaborare?</h2>
          <p className="text-gray-600 mb-6">
            Hai un progetto che richiede competenze in Project Management o Business Analysis? Scrivimi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Contattami
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-secondary">
              Il mio percorso
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
