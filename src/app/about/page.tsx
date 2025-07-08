import Link from 'next/link'
import { MapPin, Calendar, Mail, Linkedin, Github, Download } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "TechCorp S.r.l.",
      description: "Sviluppo di applicazioni web scalabili utilizzando Next.js, TypeScript e cloud AWS. Lead di un team di 4 sviluppatori."
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      description: "Sviluppo completo di piattaforma SaaS da zero. Stack: React, Node.js, PostgreSQL, Docker."
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "WebAgency",
      description: "Sviluppo di siti web e applicazioni frontend per clienti enterprise. Specializzazione in React e Vue.js."
    },
    {
      year: "2019",
      title: "Laurea in Informatica",
      company: "Università di Milano",
      description: "Tesi di laurea sull'intelligenza artificiale applicata al web development. Voto: 110/110 con lode."
    }
  ]

  const interests = [
    "Intelligenza Artificiale",
    "Open Source",
    "Fotografia",
    "Viaggi",
    "Gaming",
    "Cucina",
    "Lettura Tech",
    "Blockchain"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chi sono
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sviluppatore Full-Stack con oltre 5 anni di esperienza nella creazione 
            di applicazioni web moderne e soluzioni digitali innovative.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
            <p className="text-gray-600">Milano, Italia</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Esperienza</h3>
            <p className="text-gray-600">5+ anni</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Mail className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Status</h3>
            <p className="text-gray-600">Disponibile per progetti</p>
          </div>
        </div>

        {/* About Text */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">La mia storia</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Ciao! Sono un sviluppatore Full-Stack appassionato con una forte predilezione 
              per le tecnologie moderne e l&apos;innovazione continua. La mia carriera è iniziata 
              nel 2019 quando ho conseguito la laurea in Informatica presso l&apos;Università di Milano.
            </p>
            <p>
              Durante questi anni ho avuto l&apos;opportunità di lavorare su progetti molto diversi, 
              dalle startup innovative alle grandi enterprise, acquisendo competenze sia tecniche 
              che di leadership. Mi appassiona particolarmente l&apos;aspetto problem-solving dello 
              sviluppo software e la possibilità di creare soluzioni che abbiano un impatto reale 
              sulla vita delle persone.
            </p>
            <p>
              Quando non sto programmando, amo viaggiare per scoprire nuove culture, 
              praticare fotografia e sperimentare nuove tecnologie emergenti. Sono anche 
              un contributore attivo della community open source e partecipo regolarmente 
              a meetup e conferenze del settore.
            </p>
            <p>
              Il mio obiettivo è sempre quello di scrivere codice pulito, manutenibile e 
              performante, seguendo le best practices e rimanendo sempre aggiornato sulle 
              ultime tendenze tecnologiche.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Il mio percorso
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-20 flex-shrink-0 mb-2 md:mb-0">
                  <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="md:ml-8 bg-white rounded-lg shadow-md p-6 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Interessi e passioni
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span 
                key={interest}
                className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vuoi saperne di più?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Sono sempre interessato a nuove opportunità e collaborazioni. 
            Scarica il mio CV o contattami direttamente per discutere di potenziali progetti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contattami
            </Link>
            <a 
              href="/cv.pdf" 
              className="btn-secondary inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4 mr-2" />
              Scarica CV
            </a>
            <div className="flex gap-4 justify-center sm:ml-4">
              <a 
                href="https://linkedin.com/in/tuousername"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/tuousername"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}