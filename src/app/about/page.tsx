import Link from 'next/link'
import { MapPin, Mail, Phone, Linkedin, Github, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'

const experience = [
  {
    company: 'Maurelli Group SPA',
    location: 'Napoli',
    roles: [
      { title: 'Head of PMO', period: 'Gennaio 2026 – presente', duration: '6 mesi', current: true },
      { title: 'Project Manager', period: 'Settembre 2022 – Dicembre 2025', duration: '3 anni 4 mesi', current: false },
    ],
  },
  {
    company: 'Multiesse Srl – GDO',
    location: 'Napoli, Campania, Italia',
    roles: [
      { title: 'Controllo di gestione (Business Controller)', period: 'Settembre 2019 – Agosto 2022', duration: '3 anni', current: false },
      { title: 'Impiegato commerciale e sviluppo progetti', period: 'Aprile 2017 – Agosto 2022', duration: '5 anni 5 mesi', current: false },
      { title: 'Impiegato amministrativo-contabile', period: 'Gennaio 2015 – Marzo 2017', duration: '2 anni 3 mesi', current: false },
    ],
  },
  {
    company: 'Pasi SpA "Flordocafè"',
    location: 'Napoli, Italia',
    roles: [
      { title: 'Direttore di filiale', period: 'Maggio 2010 – Dicembre 2014', duration: '4 anni 8 mesi', current: false },
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0 w-28 h-28 rounded-full bg-primary-700 flex items-center justify-center text-3xl font-bold text-white border-4 border-primary-100">
              FL
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Francesco Lucignano</h1>
              <p className="text-lg text-primary-700 font-medium mb-3">PMO | ICT | Business Analyst</p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-sm text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Brusciano (NA), Campania</span>
                <a href="tel:+393500109024" className="flex items-center gap-1 hover:text-primary-600"><Phone className="h-4 w-4" /> +39 350 010 9024</a>
                <a href="mailto:francesco.lucignano@gmail.com" className="flex items-center gap-1 hover:text-primary-600"><Mail className="h-4 w-4" /> francesco.lucignano@gmail.com</a>
              </div>
              <div className="flex gap-3 mt-4 justify-center sm:justify-start">
                <a href="https://www.linkedin.com/in/francescolucignano84/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="https://github.com/FrankLucs84" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors"><Github className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Profile */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Profilo</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Specializzato in Project Management, con particolare focus sui progetti software,
            unisco il rigore metodologico del PMI all&apos;integrazione di soluzioni basate sull&apos;IA.
            Supporto i team attraverso un attento Change Management e la mediazione dei conflitti
            organizzativi, curando piani operativi e reportistica strutturata per mantenere gli
            stakeholder informati sui progressi.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary-600" />
            Esperienza professionale
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{exp.company}</h3>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                <div className="space-y-3 pl-13">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-t border-gray-50 first:border-0 first:pt-0 gap-1">
                      <div>
                        <p className="font-semibold text-gray-800">{role.title}</p>
                        <p className="text-sm text-gray-500">{role.period}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${role.current ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}>
                          {role.current ? 'Attuale' : role.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary-600" />
            Istruzione
          </h2>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-5 w-5 text-primary-700" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Università degli Studi di Napoli Federico II</h3>
              <p className="text-primary-700 font-medium">Laurea in Economia Aziendale</p>
              <p className="text-gray-400 text-sm">2005 – 2010</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Vuoi collaborare?</h2>
          <p className="text-gray-600 mb-6">Sono disponibile per nuove opportunità. Contattami per discutere come posso contribuire ai tuoi progetti.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Contattami
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Vedi le competenze
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
